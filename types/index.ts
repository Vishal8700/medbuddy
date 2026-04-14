export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  topic: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  isStreaming?: boolean
}

export interface TestResults {
  subject: string
  score: number
  totalQuestions: number
  answers: { questionId: string; selected: number; correct: number }[]
}

export interface Book {
  id: string
  title: string
  author: string
  subject: string
  size: string
  type: 'pdf' | 'text'
  description: string
}
