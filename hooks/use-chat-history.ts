import { useEffect, useState } from 'react'

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

export interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: number
  updatedAt: number
}

const STORAGE_KEY = 'medstudy_chat_history'
const MAX_SESSIONS = 50

export function useChatHistory() {
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load sessions from localStorage on mount
  useEffect(() => {
    const loadSessions = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
          const parsed = JSON.parse(stored)
          setSessions(Array.isArray(parsed) ? parsed : [])
          
          // Load last used session
          const lastSessionId = localStorage.getItem(`${STORAGE_KEY}_current`)
          if (lastSessionId && parsed.some((s: ChatSession) => s.id === lastSessionId)) {
            setCurrentSessionId(lastSessionId)
          } else if (parsed.length > 0) {
            setCurrentSessionId(parsed[0].id)
          }
        }
      } catch (error) {
        console.error('Failed to load chat history:', error)
      }
      setIsLoaded(true)
    }

    loadSessions()
  }, [])

  // Save sessions to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions))
        if (currentSessionId) {
          localStorage.setItem(`${STORAGE_KEY}_current`, currentSessionId)
        }
      } catch (error) {
        console.error('Failed to save chat history:', error)
      }
    }
  }, [sessions, currentSessionId, isLoaded])

  const createSession = (title?: string): ChatSession => {
    const id = `session_${Date.now()}`
    const session: ChatSession = {
      id,
      title: title || `Chat ${new Date().toLocaleDateString()}`,
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }

    setSessions((prev) => {
      const newSessions = [session, ...prev]
      // Keep only last 50 sessions
      return newSessions.slice(0, MAX_SESSIONS)
    })
    setCurrentSessionId(id)
    return session
  }

  const addMessage = (message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    if (!currentSessionId) {
      createSession()
      return
    }

    const newMessage: ChatMessage = {
      ...message,
      id: `msg_${Date.now()}_${Math.random()}`,
      timestamp: Date.now(),
    }

    setSessions((prev) =>
      prev.map((session) => {
        if (session.id === currentSessionId) {
          // Update title if it's the first message
          const title =
            session.messages.length === 0
              ? message.content.substring(0, 50)
              : session.title

          return {
            ...session,
            messages: [...session.messages, newMessage],
            title,
            updatedAt: Date.now(),
          }
        }
        return session
      })
    )
  }

  const getCurrentSession = (): ChatSession | null => {
    return (
      sessions.find((s) => s.id === currentSessionId) ||
      null
    )
  }

  const deleteSession = (sessionId: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== sessionId))
    
    if (currentSessionId === sessionId) {
      const remaining = sessions.filter((s) => s.id !== sessionId)
      setCurrentSessionId(remaining.length > 0 ? remaining[0].id : null)
    }
  }

  const clearAllSessions = () => {
    setSessions([])
    setCurrentSessionId(null)
  }

  const updateSessionTitle = (sessionId: string, title: string) => {
    setSessions((prev) =>
      prev.map((session) => {
        if (session.id === sessionId) {
          return { ...session, title, updatedAt: Date.now() }
        }
        return session
      })
    )
  }

  const switchSession = (sessionId: string) => {
    if (sessions.some((s) => s.id === sessionId)) {
      setCurrentSessionId(sessionId)
    }
  }

  const updateLastMessage = (sessionId: string, content: string) => {
    setSessions((prev) =>
      prev.map((session) => {
        if (session.id !== sessionId) return session
        const msgs = [...session.messages]
        for (let i = msgs.length - 1; i >= 0; i--) {
          if (msgs[i].role === 'assistant') {
            msgs[i] = { ...msgs[i], content }
            break
          }
        }
        return { ...session, messages: msgs }
      })
    )
  }

  return {
    sessions,
    currentSessionId,
    currentSession: getCurrentSession(),
    isLoaded,
    createSession,
    addMessage,
    deleteSession,
    clearAllSessions,
    updateSessionTitle,
    switchSession,
    updateLastMessage,
  }
}
