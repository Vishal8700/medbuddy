'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp, Clock } from 'lucide-react'
import { useTestHistory } from '@/hooks/use-test-history'
import type { Question } from '@/lib/questions/index'

interface Answer {
  questionId: string
  selected: string
  correct: string
}

interface TestResults {
  seriesId: string
  seriesName: string
  score: number
  totalQuestions: number
  answers: Answer[]
  duration: number
}

interface ResultsPageProps {
  results: TestResults
  questions: Question[]
  onBackHome: () => void
  onRetake?: () => void
}

const OPTION_KEYS = ['A', 'B', 'C', 'D'] as const

export function ResultsPage({ results, questions, onBackHome, onRetake }: ResultsPageProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const { saveTestAttempt } = useTestHistory()

  const percentage = Math.round((results.score / results.totalQuestions) * 100)
  const isPassed = percentage >= 60

  useEffect(() => {
    saveTestAttempt({
      subject: results.seriesName,
      score: results.score,
      totalQuestions: results.totalQuestions,
      percentage,
      userAnswers: results.answers.map((a) => ({
        questionId: a.questionId,
        selectedAnswer: a.selected,
        correctAnswer: a.correct,
        isCorrect: a.selected === a.correct,
      })),
      duration: results.duration,
    })
  }, []) // eslint-disable-line

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const formatDuration = (secs: number) => {
    const h = Math.floor(secs / 3600)
    const m = Math.floor((secs % 3600) / 60)
    const s = secs % 60
    if (h > 0) return `${h}h ${m}m ${s}s`
    return `${m}m ${s}s`
  }

  // Subject breakdown
  const subjects = [...new Set(questions.map((q) => q.subject))]
  const subjectStats = subjects.map((subj) => {
    const subjAnswers = results.answers.filter((a) => {
      const q = questions.find((q) => String(q.questionNo) === a.questionId)
      return q?.subject === subj
    })
    const correct = subjAnswers.filter((a) => a.selected === a.correct).length
    return { subj, total: subjAnswers.length, correct }
  })

  return (
    <div className="max-w-4xl mx-auto space-y-8">

      {/* Summary */}
      <div className="bg-card border border-border rounded-xl p-8 text-center space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Test Complete!</h1>
          <p className="text-muted-foreground">{results.seriesName}</p>
        </div>

        {/* Circle */}
        <div className="flex justify-center">
          <div className="relative w-36 h-36">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 144 144">
              <circle cx="72" cy="72" r="60" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
              <circle
                cx="72" cy="72" r="60" fill="none" stroke="currentColor" strokeWidth="8"
                strokeDasharray={`${(percentage / 100) * 377} 377`}
                className={isPassed ? 'text-primary' : 'text-destructive'}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">{percentage}%</span>
              <span className="text-xs text-muted-foreground">Score</span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4">
          <div><div className="text-2xl font-bold text-primary">{results.score}</div><div className="text-xs text-muted-foreground">Correct</div></div>
          <div><div className="text-2xl font-bold text-destructive">{results.totalQuestions - results.score}</div><div className="text-xs text-muted-foreground">Wrong</div></div>
          <div><div className="text-2xl font-bold">{results.totalQuestions}</div><div className="text-xs text-muted-foreground">Total</div></div>
          <div>
            <div className="text-2xl font-bold flex items-center justify-center gap-1">
              <Clock className="w-4 h-4" />{formatDuration(results.duration)}
            </div>
            <div className="text-xs text-muted-foreground">Time taken</div>
          </div>
        </div>

        <div className={`inline-block px-6 py-2 rounded-lg font-bold ${isPassed ? 'bg-primary/20 text-primary' : 'bg-destructive/20 text-destructive'}`}>
          {isPassed ? '✓ Passed' : '✗ Needs Improvement'}
        </div>
      </div>

      {/* Subject breakdown */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {subjectStats.map(({ subj, total, correct }) => (
          <div key={subj} className="bg-card border border-border rounded-lg p-4">
            <p className="font-semibold text-sm mb-2">{subj}</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-primary">{correct}/{total}</span>
              <span className="text-sm text-muted-foreground">{Math.round((correct / total) * 100)}%</span>
            </div>
            <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: `${(correct / total) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Answer review */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Review Answers</h2>
        {results.answers.map((answer, idx) => {
          const question = questions.find((q) => String(q.questionNo) === answer.questionId)
          if (!question) return null
          const isCorrect = answer.selected === answer.correct
          const isExpanded = expanded.has(answer.questionId)

          return (
            <div key={answer.questionId} className={`border rounded-xl overflow-hidden ${isCorrect ? 'border-primary/30 bg-primary/5' : 'border-destructive/30 bg-destructive/5'}`}>
              <button
                onClick={() => toggle(answer.questionId)}
                className="w-full p-4 flex items-start justify-between hover:bg-card/50 transition-colors text-left"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className={`mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isCorrect ? 'bg-primary text-primary-foreground' : 'bg-destructive text-destructive-foreground'}`}>
                    {isCorrect ? '✓' : '✗'}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Q{idx + 1} · {question.subject}</p>
                    <p className="text-sm font-medium">{question.title}</p>
                  </div>
                </div>
                {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0 mt-1" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />}
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 border-t border-border/50 pt-3 space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {OPTION_KEYS.map((key) => {
                      const isSelected = answer.selected === key
                      const isCorrectOpt = answer.correct === key
                      return (
                        <div key={key} className={`flex items-center gap-2 p-2.5 rounded-lg text-sm border ${
                          isCorrectOpt ? 'border-primary/50 bg-primary/10' :
                          isSelected && !isCorrectOpt ? 'border-destructive/50 bg-destructive/10' :
                          'border-border'
                        }`}>
                          <span className="font-bold text-xs w-5 shrink-0">{key}.</span>
                          <span>{question.options[key]}</span>
                          {isCorrectOpt && <span className="ml-auto text-primary text-xs font-bold">✓</span>}
                          {isSelected && !isCorrectOpt && <span className="ml-auto text-destructive text-xs font-bold">✗</span>}
                        </div>
                      )
                    })}
                  </div>
                  {!answer.selected && (
                    <p className="text-xs text-muted-foreground italic">Not attempted</p>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Actions */}
      <div className="flex gap-4 justify-center pb-8">
        <button onClick={onBackHome} className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors">
          Back to Tests
        </button>
        {onRetake && (
          <button onClick={onRetake} className="px-8 py-3 rounded-lg border border-border hover:border-primary font-medium transition-colors">
            Retake Test
          </button>
        )}
      </div>
    </div>
  )
}
