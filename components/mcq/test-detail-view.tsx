'use client'

import { TestAttempt } from '@/hooks/use-test-history'
import { ChevronLeft, Clock } from 'lucide-react'

interface TestDetailViewProps {
  attempt: TestAttempt
  onBack: () => void
}

export function TestDetailView({ attempt, onBack }: TestDetailViewProps) {
  const formatDate = (timestamp: number) =>
    new Date(timestamp).toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })

  const formatDuration = (secs?: number) => {
    if (!secs) return '—'
    const h = Math.floor(secs / 3600)
    const m = Math.floor((secs % 3600) / 60)
    const s = secs % 60
    if (h > 0) return `${h}h ${m}m ${s}s`
    return `${m}m ${s}s`
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-card rounded-lg transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold">{attempt.subject}</h1>
          <p className="text-muted-foreground text-sm">{formatDate(attempt.timestamp)}</p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-card border border-border rounded-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div>
          <div className="text-3xl font-bold text-primary">{attempt.percentage}%</div>
          <div className="text-sm text-muted-foreground mt-1">Score</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-primary">{attempt.score}</div>
          <div className="text-sm text-muted-foreground mt-1">Correct</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-destructive">{attempt.totalQuestions - attempt.score}</div>
          <div className="text-sm text-muted-foreground mt-1">Wrong</div>
        </div>
        <div>
          <div className="text-2xl font-bold flex items-center gap-1">
            <Clock className="w-4 h-4" />{formatDuration(attempt.duration)}
          </div>
          <div className="text-sm text-muted-foreground mt-1">Time taken</div>
        </div>
      </div>

      <div className={`inline-block px-4 py-2 rounded-lg font-bold text-sm ${attempt.percentage >= 60 ? 'bg-primary/20 text-primary' : 'bg-destructive/20 text-destructive'}`}>
        {attempt.percentage >= 60 ? 'PASSED' : 'NEEDS IMPROVEMENT'}
      </div>

      {/* Answer list */}
      <div className="space-y-2">
        <h2 className="text-lg font-bold">Answer Summary</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {attempt.userAnswers.map((ua, idx) => (
            <div key={ua.questionId} className={`flex items-center gap-3 p-3 rounded-lg border text-sm ${ua.isCorrect ? 'border-primary/20 bg-primary/5' : 'border-destructive/20 bg-destructive/5'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${ua.isCorrect ? 'bg-primary text-primary-foreground' : 'bg-destructive text-destructive-foreground'}`}>
                {ua.isCorrect ? '✓' : '✗'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">Q{idx + 1}</p>
                <p className="text-xs">
                  Your: <span className="font-semibold">{ua.selectedAnswer || '—'}</span>
                  {!ua.isCorrect && <> · Correct: <span className="font-semibold text-primary">{ua.correctAnswer}</span></>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={onBack} className="px-6 py-2 rounded-lg border border-border hover:bg-card transition-colors font-medium text-sm">
        Back to History
      </button>
    </div>
  )
}
