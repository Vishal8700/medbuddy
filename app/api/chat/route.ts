import { NextRequest } from 'next/server'
import OpenAI from 'openai'

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': 'https://medstudy.app',
    'X-Title': 'MedStudy AI',
  },
})

const MODEL = 'mistralai/mistral-small-3.2-24b-instruct'
const FALLBACK_MODEL = 'mistralai/mistral-small-24b-instruct-2501'
const FALLBACK_STATUSES = new Set([400, 402, 404])

const SYSTEM_PROMPT = `You are an expert MDCAT study assistant specializing in Biology, Chemistry, Physics, and English for Pakistani medical entrance exams.
Provide clear, accurate, and well-structured answers.
IMPORTANT formatting rules:
- Do NOT use ** or * for bold/italic. Write plain text only.
- Do NOT use markdown symbols like **, *, __, or similar.
- Use numbered lists (1. 2. 3.) or bullet points with a dash (- item) for lists.
- For headings, just write the heading text followed by a colon or on its own line.
- For math equations use $...$ for inline and $$...$$ for display equations only.
- For code use triple backticks with language name.
- Be concise, clear, and educational.

Answer style for MCQs or direct questions:
- Start with "Correct answer: <option letter> - <answer text>" when the correct option can be identified.
- Then write "Explanation:" on the next line.
- Use short pointer bullets under the explanation.
- Explain why the correct option is right in simple student-friendly language.
- If helpful, add "Why other options are not correct:" and list brief points.
- Keep each point short so it reads well in a mobile chat bubble.
- If the answer is uncertain from the provided context, say what is missing instead of guessing.`

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENROUTER_API_KEY) {
      return jsonError('Chat is not configured. Missing OPENROUTER_API_KEY.', 503)
    }

    const { message, messages } = await request.json()

    if (!message && (!messages || messages.length === 0)) {
      return jsonError('Message is required', 400)
    }

    const chatMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(messages ?? [{ role: 'user', content: message }]),
    ]

    // Try primary model, fall back automatically
    let model = MODEL
    try {
      const stream = await client.chat.completions.create({
        model,
        messages: chatMessages,
        stream: true,
      })

      return streamToResponse(stream)
    } catch (err: unknown) {
      const status = (err as { status?: number })?.status
      if (status && FALLBACK_STATUSES.has(status)) {
        console.warn(`Model ${model} unavailable (${status}), trying fallback...`)
        model = FALLBACK_MODEL
        const stream = await client.chat.completions.create({
          model,
          messages: chatMessages,
          stream: true,
        })
        return streamToResponse(stream)
      }
      throw err
    }
  } catch (error) {
    console.error('Chat API error:', error)
    const status = getErrorStatus(error)
    const msg = getErrorMessage(error)
    return jsonError(msg, status)
  }
}

function jsonError(error: string, status: number) {
  return new Response(JSON.stringify({ error }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function getErrorStatus(error: unknown) {
  const status = (error as { status?: number })?.status
  if (status && status >= 400 && status < 500) return status
  if (status && status >= 500 && status < 600) return 502
  return 500
}

function getErrorMessage(error: unknown) {
  const status = (error as { status?: number })?.status
  if (status === 401) {
    return 'OpenRouter rejected the API key. Check OPENROUTER_API_KEY and make sure the key belongs to an active OpenRouter account.'
  }
  if (error instanceof Error && error.message) return error.message
  return 'Chat service is unavailable. Please try again.'
}

function streamToResponse(stream: AsyncIterable<OpenAI.Chat.ChatCompletionChunk>) {
  const encoder = new TextEncoder()

  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const delta = chunk.choices[0]?.delta?.content
          if (delta) {
            // Forward as SSE so the client parser works unchanged
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ choices: [{ delta: { content: delta } }] })}\n\n`))
          }
        }
        controller.enqueue(encoder.encode('data: [DONE]\n\n'))
      } finally {
        controller.close()
      }
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}
