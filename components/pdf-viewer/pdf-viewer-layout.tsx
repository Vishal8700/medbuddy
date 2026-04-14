'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, FileText, ChevronLeft, ChevronRight } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface PdfViewerLayoutProps {
  file: string
  title: string
}

export function PdfViewerLayout({ file, title }: PdfViewerLayoutProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hello! I'm your Study Assistant for "${title}". Ask me anything about this document — I can explain concepts, summarize sections, or answer questions based on the content.`,
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState<number | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    // Add empty assistant placeholder
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }])
    setIsLoading(true)

    try {
      const systemContext = `You are a study assistant helping a student read "${title}" (a PDF document). The student is currently on page ${currentPage}${totalPages ? ` of ${totalPages}` : ''}. Answer questions based on the document context.

Response style:
- For MCQs or direct answer questions, start with "Correct answer: <option letter> - <answer text>".
- Then write "Explanation:" on the next line.
- Use short dash bullets as pointers.
- Explain the concept in simple student-friendly wording.
- If helpful, add "Why other options are not correct:" with short bullets.
- Keep the response concise and easy to read on mobile.`

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemContext },
            { role: 'user', content: userMessage },
          ],
        }),
      })

      if (!res.ok) throw new Error(await readError(res))

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let fullContent = ''

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const chunk = decoder.decode(value, { stream: true })
          for (const line of chunk.split('\n')) {
            if (!line.startsWith('data: ')) continue
            const data = line.slice(6).trim()
            if (data === '[DONE]') break
            try {
              const parsed = JSON.parse(data)
              const delta = parsed.choices?.[0]?.delta?.content
              if (delta) {
                fullContent += delta
                setMessages((prev) => {
                  const updated = [...prev]
                  updated[updated.length - 1] = { role: 'assistant', content: fullContent }
                  return updated
                })
              }
            } catch { /* skip */ }
          }
        }
      }

      if (!fullContent) {
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content: 'Sorry, I could not generate a response.' }
          return updated
        })
      }
    } catch (error) {
      setMessages((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          role: 'assistant',
          content: error instanceof Error ? error.message : 'Sorry, something went wrong. Please try again.',
        }
        return updated
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend(e as unknown as React.FormEvent)
    }
  }

  const readError = async (response: Response) => {
    try {
      const data = await response.json()
      return data.error || 'API error'
    } catch {
      return 'API error'
    }
  }

  if (!file) {
    return (
      <div className="flex items-center justify-center h-screen bg-background text-muted-foreground">
        No PDF file specified.
      </div>
    )
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      {/* Left: AI Chatbot */}
      <div className="w-[380px] min-w-[320px] flex flex-col border-r border-border bg-card">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-primary text-primary-foreground">
          <Bot className="w-5 h-5" />
          <span className="font-semibold text-sm">Study Assistant</span>
          <span className="ml-auto text-xs opacity-70 truncate max-w-[140px]">{title}</span>
        </div>

        {/* Page context badge */}
        <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 border-b border-border text-xs text-muted-foreground">
          <FileText className="w-3.5 h-3.5" />
          <span>
            Viewing page <span className="font-semibold text-foreground">{currentPage}</span>
            {totalPages ? ` of ${totalPages}` : ''}
          </span>
          <div className="ml-auto flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="p-0.5 hover:bg-muted rounded"
              disabled={currentPage <= 1}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setCurrentPage((p) => (totalPages ? Math.min(totalPages, p + 1) : p + 1))}
              className="p-0.5 hover:bg-muted rounded"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
              )}
              <div
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-tr-sm'
                    : 'bg-muted text-foreground rounded-tl-sm'
                }`}
              >
                {msg.content}
              </div>
              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-2 justify-start">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-border">
          <form onSubmit={handleSend} className="flex gap-2 items-end">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about this document..."
              rows={2}
              disabled={isLoading}
              className="flex-1 resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-1.5 text-center">Shift+Enter for new line</p>
        </div>
      </div>

      {/* Right: PDF Viewer */}
      <div className="flex-1 flex flex-col">
        {/* PDF toolbar */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border bg-card">
          <FileText className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium truncate">{title}</span>
          <a
            href={file}
            download
            className="ml-auto text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
          >
            Download
          </a>
        </div>

        {/* PDF iframe */}
        <iframe
          ref={iframeRef}
          src={`${file}#page=${currentPage}`}
          className="flex-1 w-full border-0"
          title={title}
          onLoad={() => {
            // Try to sync page from iframe if possible
          }}
        />
      </div>
    </div>
  )
}
