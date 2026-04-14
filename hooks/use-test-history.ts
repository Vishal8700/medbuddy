'use client'

import { useState, useEffect, useCallback } from 'react'

export interface TestAttempt {
  id: string
  subject: string
  score: number
  totalQuestions: number
  percentage: number
  timestamp: number
  userAnswers: {
    questionId: string
    selectedAnswer: string
    correctAnswer: string
    isCorrect: boolean
  }[]
  duration?: number // in seconds
}

export interface TestStats {
  totalAttempts: number
  bestScore: number
  averageScore: number
  bySubject: Record<
    string,
    {
      attempts: number
      bestScore: number
      averageScore: number
    }
  >
}

const MAX_HISTORY = 50
const STORAGE_KEY = 'med-study-test-history'

export function useTestHistory() {
  const [history, setHistory] = useState<TestAttempt[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setHistory(Array.isArray(parsed) ? parsed : [])
      }
    } catch (error) {
      console.error('[v0] Failed to load test history:', error)
    }
    setIsLoaded(true)
  }, [])

  // Save a new test attempt
  const saveTestAttempt = useCallback(
    (attempt: Omit<TestAttempt, 'id' | 'timestamp'>) => {
      const newAttempt: TestAttempt = {
        ...attempt,
        id: `test-${Date.now()}`,
        timestamp: Date.now(),
      }

      setHistory((prevHistory) => {
        const updated = [newAttempt, ...prevHistory]
        // Keep only the last MAX_HISTORY attempts
        const trimmed = updated.slice(0, MAX_HISTORY)

        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))
        } catch (error) {
          console.error('[v0] Failed to save test history:', error)
        }

        return trimmed
      })

      return newAttempt
    },
    []
  )

  // Clear entire history
  const clearHistory = useCallback(() => {
    setHistory([])
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      console.error('[v0] Failed to clear test history:', error)
    }
  }, [])

  // Delete specific test attempt
  const deleteAttempt = useCallback((id: string) => {
    setHistory((prevHistory) => {
      const updated = prevHistory.filter((attempt) => attempt.id !== id)

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      } catch (error) {
        console.error('[v0] Failed to delete test attempt:', error)
      }

      return updated
    })
  }, [])

  // Get test attempts for a specific subject
  const getBySubject = useCallback(
    (subject: string) => {
      return history.filter((attempt) => attempt.subject === subject)
    },
    [history]
  )

  // Calculate statistics
  const getStats = useCallback((): TestStats => {
    if (history.length === 0) {
      return {
        totalAttempts: 0,
        bestScore: 0,
        averageScore: 0,
        bySubject: {},
      }
    }

    const bestScore = Math.max(...history.map((h) => h.percentage))
    const averageScore =
      history.reduce((sum, h) => sum + h.percentage, 0) / history.length

    const bySubject: Record<
      string,
      {
        attempts: number
        bestScore: number
        averageScore: number
      }
    > = {}

    history.forEach((attempt) => {
      if (!bySubject[attempt.subject]) {
        bySubject[attempt.subject] = {
          attempts: 0,
          bestScore: 0,
          averageScore: 0,
        }
      }

      const stats = bySubject[attempt.subject]
      stats.attempts += 1
      stats.bestScore = Math.max(stats.bestScore, attempt.percentage)
      stats.averageScore =
        (stats.averageScore * (stats.attempts - 1) + attempt.percentage) /
        stats.attempts
    })

    return {
      totalAttempts: history.length,
      bestScore,
      averageScore,
      bySubject,
    }
  }, [history])

  // Get single test attempt by ID
  const getAttemptById = useCallback(
    (id: string) => {
      return history.find((attempt) => attempt.id === id)
    },
    [history]
  )

  // Export history as JSON
  const exportHistory = useCallback(() => {
    const dataStr = JSON.stringify(history, null, 2)
    const dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr)

    const exportFileDefaultName = `test-history-${new Date().toISOString().split('T')[0]}.json`

    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }, [history])

  return {
    history,
    isLoaded,
    saveTestAttempt,
    clearHistory,
    deleteAttempt,
    getBySubject,
    getStats,
    getAttemptById,
    exportHistory,
  }
}
