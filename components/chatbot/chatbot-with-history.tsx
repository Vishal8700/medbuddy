'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { ChatMessage } from '@/components/chatbot/chat-message'
import { useChatHistory } from '@/hooks/use-chat-history'
import {
  Send, Plus, Trash2, MessageSquare, Image as ImageIcon,
  X, Menu, ChevronLeft, Sparkles,
} from 'lucide-react'

export function ChatbotWithHistory() {
  const {
    sessions,
    currentSessionId,
    currentSession,
    isLoaded,
    createSession,
    addMessage,
    deleteSession,
    switchSession,
    updateLastMessage,
  } = useChatHistory()

  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageBase64, setImageBase64] = useState<string | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Init session
  useEffect(() => {
    if (isLoaded && !currentSessionId) createSession()
  }, [isLoaded, currentSessionId, createSession])

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentSession?.messages, isLoading])

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current
    if (!ta) return
    ta.style.height = 'auto'
    ta.style.height = Math.min(ta.scrollHeight, 160) + 'px'
  }, [input])

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const result = ev.target?.result as string
      setImagePreview(result)
      // Strip the data:image/...;base64, prefix for the API
      setImageBase64(result.split(',')[1])
    }
    reader.readAsDataURL(file)
    // Reset so same file can be re-selected
    e.target.value = ''
  }

  const clearImage = () => {
    setImagePreview(null)
    setImageBase64(null)
  }

  const handleSend = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault()
    if ((!input.trim() && !imageBase64) || !currentSessionId || isLoading) return

    const userText = input.trim()
    const userImage = imagePreview
    setInput('')
    clearImage()

    // Build user message content
    const userContent = userImage
      ? `${userText ? userText + '\n' : ''}[Image attached]`
      : userText

    addMessage({ role: 'user', content: userContent })
    addMessage({ role: 'assistant', content: '' })
    setIsLoading(true)

    try {
      const history = (currentSession?.messages || []).map((m) => ({
        role: m.role,
        content: m.content,
      }))

      // Build the last user message with optional image
      const lastUserMsg = imageBase64
        ? {
            role: 'user',
            content: [
              ...(userText ? [{ type: 'text', text: userText }] : []),
              { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${imageBase64}` } },
            ],
          }
        : { role: 'user', content: userText }

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...history, lastUserMsg],
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
                updateLastMessage(currentSessionId, fullContent)
              }
            } catch { /* skip */ }
          }
        }
      }

      if (!fullContent) {
        updateLastMessage(currentSessionId, 'Sorry, I could not generate a response. Please try again.')
      }
    } catch (error) {
      updateLastMessage(
        currentSessionId,
        error instanceof Error ? error.message : 'Sorry, I encountered an error. Please try again.',
      )
    } finally {
      setIsLoading(false)
    }
  }, [input, imageBase64, imagePreview, currentSessionId, currentSession, isLoading, addMessage, updateLastMessage])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
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

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full overflow-hidden">

      {/* ── Sidebar ── */}
      <aside
        className={`
          flex flex-col w-64 border-r border-border bg-card shrink-0
          transition-transform duration-200
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          fixed inset-y-0 top-16 z-40
          md:static md:translate-x-0 md:top-auto md:inset-y-auto md:h-full
        `}
      >
        <div className="p-3 border-b border-border">
          <button
            onClick={() => createSession()}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <Plus className="h-4 w-4" />
            New Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {sessions.length === 0 && (
            <p className="text-xs text-muted-foreground text-center py-4">No chats yet</p>
          )}
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`group relative flex items-start gap-2 p-2.5 rounded-lg cursor-pointer transition-colors ${
                session.id === currentSessionId
                  ? 'bg-primary/10 border border-primary/20'
                  : 'hover:bg-muted'
              }`}
            >
              <MessageSquare className="h-3.5 w-3.5 mt-0.5 shrink-0 text-muted-foreground" />
              <button
                onClick={() => { switchSession(session.id); setIsSidebarOpen(false) }}
                className="flex-1 text-left min-w-0"
              >
                <p className="text-sm font-medium truncate">{session.title}</p>
                <p className="text-xs text-muted-foreground">{session.messages.length} messages</p>
              </button>
              <button
                onClick={() => deleteSession(session.id)}
                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-destructive/20 rounded transition-opacity shrink-0"
              >
                <Trash2 className="h-3 w-3 text-destructive" />
              </button>
            </div>
          ))}
        </div>
      </aside>

      {/* Sidebar overlay (mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* ── Main chat area ── */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border bg-card shrink-0">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-1.5 hover:bg-muted rounded-lg transition-colors"
          >
            {isSidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-semibold text-sm">
              Sera AI Chat Console
            </span>
          </div>
          <span className="ml-auto text-xs text-muted-foreground">Mistral · OpenRouter</span>
        </div>

        {/* Messages — this div scrolls, not the page */}
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto"
        >
          <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
            {(!currentSession || currentSession.messages.length === 0) && (
              <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">How can I help you?</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ask anything about Biology, Chemistry, Physics, or English for MDCAT
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {['Explain DNA replication', 'Newton\'s laws of motion', 'pH and acid-base reactions', 'Photosynthesis process'].map((s) => (
                    <button
                      key={s}
                      onClick={() => { setInput(s); textareaRef.current?.focus() }}
                      className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentSession?.messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            {isLoading && currentSession?.messages[currentSession.messages.length - 1]?.content === '' && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-primary/70 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-primary/70 rounded-full animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 bg-primary/70 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input area */}
        <div className="shrink-0 border-t border-border bg-card px-4 py-3">
          <div className="max-w-3xl mx-auto">

            {/* Image preview */}
            {imagePreview && (
              <div className="mb-2 relative inline-block">
                <img
                  src={imagePreview}
                  alt="Attached"
                  className="h-20 w-auto rounded-lg border border-border object-cover"
                />
                <button
                  onClick={clearImage}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:bg-destructive/90 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            <div className="flex items-end gap-2 bg-background border border-border rounded-2xl px-3 py-2 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary transition-all">
              {/* Image upload button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors shrink-0 mb-0.5"
                title="Attach image"
              >
                <ImageIcon className="w-4 h-4" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageSelect}
              />

              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything about medical science..."
                rows={1}
                disabled={isLoading}
                className="flex-1 resize-none bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground disabled:opacity-50 max-h-40 py-1"
              />

              <button
                onClick={() => handleSend()}
                disabled={isLoading || (!input.trim() && !imageBase64)}
                className="p-1.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0 mb-0.5"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-1.5">
              Enter to send · Shift+Enter for new line · Attach images for visual questions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
