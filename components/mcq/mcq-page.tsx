'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronRight, ChevronLeft, Clock, AlertTriangle } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import type { Question } from '@/lib/questions/index'

interface TestResults {
  seriesId: string
  seriesName: string
  score: number
  totalQuestions: number
  answers: { questionId: string; selected: string; correct: string }[]
  duration: number // seconds taken
}

interface MCQPageProps {
  seriesId: string
  seriesName: string
  questions: Question[]
  totalMinutes: number
  onComplete: (results: TestResults) => void
  onCancel: () => void
}

const OPTION_KEYS = ['A', 'B', 'C', 'D'] as const

export function MCQPage({ seriesId, seriesName, questions, totalMinutes, onComplete, onCancel }: MCQPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  // answers: key = questionNo, value = 'A'|'B'|'C'|'D'|null
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [secondsLeft, setSecondsLeft] = useState(totalMinutes * 60)
  const [startTime] = useState(Date.now())

  const currentQuestion = questions[currentIndex]
  const progress = ((currentIndex + 1) / questions.length) * 100
  const answeredCount = Object.keys(answers).length

  // Timer
  useEffect(() => {
    if (secondsLeft <= 0) {
      handleSubmit()
      return
    }
    const t = setInterval(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearInterval(t)
  }, [secondsLeft])

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600)
    const m = Math.floor((secs % 3600) / 60)
    const s = secs % 60
    if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  const handleSelect = (key: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.questionNo]: key }))
  }

  const handleSubmit = useCallback(() => {
    const durationSecs = Math.floor((Date.now() - startTime) / 1000)
    let score = 0
    const answerList = questions.map((q) => {
      const selected = answers[q.questionNo] ?? ''
      const correct = q.answer
      if (selected && selected === correct) score++
      return { questionId: String(q.questionNo), selected, correct }
    })

    onComplete({ seriesId, seriesName, score, totalQuestions: questions.length, answers: answerList, duration: durationSecs })
  }, [answers, questions, seriesId, seriesName, onComplete, startTime])

  const isWarning = secondsLeft <= 300 // last 5 min

  // Subject breakdown for the question palette
  const subjects = [...new Set(questions.map((q) => q.subject))]

  return (
    <div className="max-w-5xl mx-auto space-y-4">

      {/* Top bar */}
      <div className="flex items-center justify-between bg-card border border-border rounded-xl px-5 py-3">
        <div>
          <h1 className="text-xl font-bold">{seriesName}</h1>
          <p className="text-sm text-muted-foreground">
            Q {currentIndex + 1} / {questions.length} &nbsp;·&nbsp; {answeredCount} answered
          </p>
        </div>

        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold text-lg ${
          isWarning ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'
        }`}>
          {isWarning && <AlertTriangle className="w-4 h-4" />}
          <Clock className="w-4 h-4" />
          {formatTime(secondsLeft)}
        </div>

        <button onClick={onCancel} className="text-muted-foreground hover:text-foreground text-xl leading-none">✕</button>
      </div>

      <Progress value={progress} className="h-1.5" />

      <div className="grid lg:grid-cols-[1fr_260px] gap-4">

        {/* Question card */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              {currentQuestion.subject}
            </span>
            <span className="text-xs text-muted-foreground">Source: {currentQuestion.source}</span>
          </div>

          <h2 className="text-lg font-semibold leading-relaxed">
            {currentIndex + 1}. {currentQuestion.title}
          </h2>

          <div className="space-y-3">
            {OPTION_KEYS.map((key) => {
              const selected = answers[currentQuestion.questionNo] === key
              return (
                <button
                  key={key}
                  onClick={() => handleSelect(key)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                    selected
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50 hover:bg-muted/50'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 ${
                    selected ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground'
                  }`}>
                    {key}
                  </div>
                  <span className="text-sm">{currentQuestion.options[key]}</span>
                </button>
              )
            })}
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            {currentIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-colors"
              >
                Submit Test
              </button>
            ) : (
              <button
                onClick={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary transition-colors text-sm"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Question palette */}
        <div className="bg-card border border-border rounded-xl p-4 space-y-4 h-fit">
          <p className="text-sm font-semibold">Question Palette</p>

          {subjects.map((subj) => {
            const subjQs = questions.filter((q) => q.subject === subj)
            return (
              <div key={subj}>
                <p className="text-xs text-muted-foreground mb-1.5 font-medium">{subj}</p>
                <div className="flex flex-wrap gap-1.5">
                  {subjQs.map((q) => {
                    const isActive = q.questionNo === currentQuestion.questionNo
                    const isAnswered = !!answers[q.questionNo]
                    const qIdx = questions.findIndex((x) => x.questionNo === q.questionNo)
                    return (
                      <button
                        key={q.questionNo}
                        onClick={() => setCurrentIndex(qIdx)}
                        title={`Q${q.questionNo}`}
                        className={`w-7 h-7 rounded text-xs font-medium transition-all ${
                          isActive
                            ? 'bg-primary text-primary-foreground ring-2 ring-primary/50'
                            : isAnswered
                            ? 'bg-green-500/20 text-green-700 dark:text-green-400 border border-green-500/30'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {q.questionNo}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}

          <div className="pt-2 border-t border-border space-y-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500/30" /> Answered
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-muted" /> Not answered
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-primary" /> Current
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
