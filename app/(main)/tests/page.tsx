'use client'

import { useState } from 'react'
import { MCQPage } from '@/components/mcq/mcq-page'
import { ResultsPage } from '@/components/mcq/results-page'
import { TestStatistics } from '@/components/mcq/test-statistics'
import { TestDetailView } from '@/components/mcq/test-detail-view'
import { TestAttempt } from '@/hooks/use-test-history'
import { BarChart3, ExternalLink, Clock, FileText, BookOpen, Zap, Clipboard } from 'lucide-react'
import { predefinedTests, testSubjects } from '@/lib/predefinedTests'
import { testSeriesList, getTestDuration } from '@/lib/questions/index'

type PageType = 'select' | 'mcq' | 'results' | 'history' | 'detail'

interface TestResults {
  seriesId: string
  seriesName: string
  score: number
  totalQuestions: number
  answers: { questionId: string; selected: string; correct: string }[]
  duration: number
}

const subjectColors: Record<string, string> = {
  Biology: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Chemistry: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  Physics: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  English: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  'Logical Reasoning': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
}

function getIcon(iconName: string) {
  const icons: Record<string, typeof Clipboard> = {
    'clipboard': Clipboard,
  }
  const Icon = icons[iconName] || Clipboard
  return <Icon className="w-6 h-6" />
}

export default function TestsPage() {
  const [currentPage, setCurrentPage] = useState<PageType>('select')
  const [testResults, setTestResults] = useState<TestResults | null>(null)
  const [activeSeries, setActiveSeries] = useState(testSeriesList[0])
  const [selectedAttempt, setSelectedAttempt] = useState<TestAttempt | null>(null)
  const [paperFilter, setPaperFilter] = useState('All')

  const filteredPapers = paperFilter === 'All'
    ? predefinedTests
    : predefinedTests.filter((t) => t.subject === paperFilter)

  const handleStartSeries = (seriesId: string) => {
    const series = testSeriesList.find((s) => s.id === seriesId)
    if (series) {
      setActiveSeries(series)
      setCurrentPage('mcq')
    }
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Select screen ── */}
        {currentPage === 'select' && (
          <div className="space-y-12">

            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h1 className="text-4xl font-bold">Tests</h1>
                <p className="text-muted-foreground">Practice with test series or take MDCAT past papers</p>
              </div>
              <button
                onClick={() => setCurrentPage('history')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors font-medium text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                View History
              </button>
            </div>

            {/* Test Series */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">Test Series</h2>
                <p className="text-sm text-muted-foreground mt-1">Full-length timed mock tests</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {testSeriesList.map((series) => {
                  const qCount = series.questions.length
                  const duration = getTestDuration(qCount)
                  const subjects = [...new Set(series.questions.map((q) => q.subject))]

                  return (
                    <div
                      key={series.id}
                      className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all group"
                    >
                      <div className="mb-4 text-primary">
                        {getIcon(series.icon)}
                      </div>

                      <h3 className="text-xl font-semibold mb-1">{series.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{series.description}</p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <FileText className="w-4 h-4" />
                          {qCount} questions
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {duration}
                        </span>
                      </div>

                      {/* Subject tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {subjects.map((s) => (
                          <span key={s} className={`text-xs px-2 py-0.5 rounded-full font-medium ${subjectColors[s] ?? 'bg-muted text-muted-foreground'}`}>
                            {s}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleStartSeries(series.id)}
                        className="w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        Start Test
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* MDCAT Practice Papers */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">MDCAT Practice Papers</h2>
                <p className="text-sm text-muted-foreground mt-1">Official past papers — opens in a new tab</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {testSubjects.map((s) => (
                  <button
                    key={s}
                    onClick={() => setPaperFilter(s)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      paperFilter === s ? 'bg-primary text-primary-foreground' : 'bg-card border border-border hover:border-primary'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredPapers.map((paper) => (
                  <a
                    key={paper.id}
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between bg-card border border-border rounded-lg px-4 py-3 hover:border-primary hover:shadow-sm transition-all"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">{paper.title}</p>
                      <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${subjectColors[paper.subject] ?? 'bg-muted text-muted-foreground'}`}>
                        {paper.subject}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── MCQ screen ── */}
        {currentPage === 'mcq' && (
          <MCQPage
            seriesId={activeSeries.id}
            seriesName={activeSeries.name}
            questions={activeSeries.questions}
            totalMinutes={activeSeries.questions.length} // 1 min per question
            onComplete={(results) => { setTestResults(results); setCurrentPage('results') }}
            onCancel={() => setCurrentPage('select')}
          />
        )}

        {/* ── Results screen ── */}
        {currentPage === 'results' && testResults && (
          <ResultsPage
            results={testResults}
            questions={activeSeries.questions}
            onBackHome={() => setCurrentPage('select')}
            onRetake={() => setCurrentPage('mcq')}
          />
        )}

        {/* ── History screen ── */}
        {currentPage === 'history' && (
          <div className="space-y-4">
            <button
              onClick={() => setCurrentPage('select')}
              className="px-4 py-2 rounded-lg border border-border hover:bg-card transition-colors font-medium text-sm"
            >
              ← Back to Tests
            </button>
            <TestStatistics
              onViewAttempt={(attempt) => { setSelectedAttempt(attempt); setCurrentPage('detail') }}
            />
          </div>
        )}

        {/* ── Detail screen ── */}
        {currentPage === 'detail' && selectedAttempt && (
          <TestDetailView
            attempt={selectedAttempt}
            onBack={() => setCurrentPage('history')}
          />
        )}
      </div>
    </div>
  )
}
