'use client'

import { useTestHistory, TestAttempt } from '@/hooks/use-test-history'
import { Download, Trash2, Eye } from 'lucide-react'
import { useState } from 'react'

interface TestStatisticsProps {
  onViewAttempt?: (attempt: TestAttempt) => void
}

export function TestStatistics({ onViewAttempt }: TestStatisticsProps) {
  const { history, getStats, clearHistory, deleteAttempt, exportHistory, isLoaded } = useTestHistory()
  const stats = getStats()
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  if (!isLoaded) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-primary" />
      </div>
    )
  }

  if (history.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-12 text-center">
        <div className="text-4xl mb-4">📝</div>
        <h3 className="text-xl font-semibold mb-2">No Test History Yet</h3>
        <p className="text-muted-foreground">
          Complete your first MCQ test to see your statistics and history here.
        </p>
      </div>
    )
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="space-y-8">
      {/* Overall Statistics */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Your Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-card/50 rounded-lg p-4 border border-border">
            <div className="text-3xl font-bold text-primary">{stats.totalAttempts}</div>
            <div className="text-sm text-muted-foreground mt-1">Total Tests Taken</div>
          </div>
          <div className="bg-card/50 rounded-lg p-4 border border-border">
            <div className="text-3xl font-bold text-secondary">
              {Math.round(stats.bestScore)}%
            </div>
            <div className="text-sm text-muted-foreground mt-1">Best Score</div>
          </div>
          <div className="bg-card/50 rounded-lg p-4 border border-border">
            <div className="text-3xl font-bold text-primary">
              {Math.round(stats.averageScore)}%
            </div>
            <div className="text-sm text-muted-foreground mt-1">Average Score</div>
          </div>
          <div className="bg-card/50 rounded-lg p-4 border border-border">
            <div className="text-3xl font-bold text-accent">
              {Object.keys(stats.bySubject).length}
            </div>
            <div className="text-sm text-muted-foreground mt-1">Subjects Tested</div>
          </div>
        </div>
      </div>

      {/* Subject-wise Statistics */}
      <div>
        <h3 className="text-xl font-bold mb-4">Performance by Subject</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(stats.bySubject).map(([subject, subjectStats]) => (
            <div key={subject} className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-3 capitalize">{subject}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Attempts:</span>
                  <span className="font-semibold">{subjectStats.attempts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Best Score:</span>
                  <span className="font-semibold text-primary">
                    {Math.round(subjectStats.bestScore)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Average:</span>
                  <span className="font-semibold text-secondary">
                    {Math.round(subjectStats.averageScore)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Test History Table */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Test History</h3>
          <div className="flex gap-2">
            <button
              onClick={exportHistory}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            {history.length > 0 && (
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors text-sm font-medium"
              >
                <Trash2 className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card/50">
                  <th className="px-4 py-3 text-left font-semibold">Date & Time</th>
                  <th className="px-4 py-3 text-left font-semibold">Subject</th>
                  <th className="px-4 py-3 text-left font-semibold">Score</th>
                  <th className="px-4 py-3 text-left font-semibold">Result</th>
                  <th className="px-4 py-3 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {history.map((attempt) => (
                  <tr
                    key={attempt.id}
                    className="border-b border-border/50 hover:bg-card/50 transition-colors"
                  >
                    <td className="px-4 py-3 text-foreground/80">{formatDate(attempt.timestamp)}</td>
                    <td className="px-4 py-3">
                      <span className="capitalize font-medium">{attempt.subject}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold">{attempt.score}/{attempt.totalQuestions}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          attempt.percentage >= 60
                            ? 'bg-primary/20 text-primary'
                            : 'bg-destructive/20 text-destructive'
                        }`}
                      >
                        {Math.round(attempt.percentage)}%
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center gap-2">
                        {onViewAttempt && (
                          <button
                            onClick={() => onViewAttempt(attempt)}
                            className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                            title="View details"
                          >
                            <Eye className="w-4 h-4 text-primary" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteAttempt(attempt.id)}
                          className="p-2 hover:bg-destructive/10 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card border border-border rounded-lg p-6 max-w-sm">
            <h4 className="text-lg font-bold mb-2">Clear All History?</h4>
            <p className="text-muted-foreground mb-6">
              This action cannot be undone. All test records will be permanently deleted.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 rounded-lg border border-border hover:bg-card/50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  clearHistory()
                  setShowDeleteConfirm(false)
                }}
                className="px-4 py-2 rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors font-medium"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
