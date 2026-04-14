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

const SYSTEM_PROMPT = `You are an expert MDCAT study assistant specializing in Biology, Chemistry, Physics, and English for Pakistani medical entrance exams.
Provide clear, accurate, and well-structured answers.
IMPORTANT formatting rules:
- Do NOT use ** or * for bold/italic. Write plain text only.
- Do NOT use markdown symbols like **, *, __, or similar.
- Use numbered lists (1. 2. 3.) or bullet points with a dash (- item) for lists.
- For headings, just write the heading text followed by a colon or on its own line.
- For math equations use $...$ for inline and $$...$$ for display equations only.
- For code use triple backticks with language name.
- Be concise, clear, and educational.`

export async function POST(request: NextRequest) {
  try {
    const { message, messages } = await request.json()

    if (!message && (!messages || messages.length === 0)) {
      return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 })
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
      if (status === 404 || status === 400 || status === 402) {
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
    const msg = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ error: msg }), { status: 500 })
  }
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
