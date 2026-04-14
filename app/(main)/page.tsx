'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  BookOpen, Play, FileText, Clock, Flame, Zap,
  ExternalLink, Eye, ChevronRight, BarChart3, ListVideo, Clipboard,
} from 'lucide-react'
import { useActivityTracker, useActivityData, buildHeatmap } from '@/hooks/use-activity-tracker'
import { testSeriesList, getTestDuration } from '@/lib/questions/index'
import { videos } from '@/lib/videos'

interface Book { id: string; title: string; subject: string; description: string; file: string }
const previewBooks: Book[] = [
  { id: 'book_001', title: 'MDCAT Past Papers (Chapterwise)', subject: 'MDCAT', description: 'Chapterwise collection of MDCAT past paper questions.', file: '/books/chapterwise-past-papers-of-mdcat_compress.pdf' },
  { id: 'book_002', title: 'MDCAT Complete Guide', subject: 'MDCAT', description: 'Comprehensive MDCAT preparation material.', file: '/books/mdcat_compress.pdf' },
  { id: 'pyq_008', title: 'UHS MDCAT 2024 (with Answer Key)', subject: 'PYQ Papers', description: 'UHS MDCAT 2024 original paper with answer key.', file: '/pyq/2455-UHS MDCAT 2024 Original Paper with Answer Key PDF-by-Admin-(taleem360.com).pdf' },
  { id: 'pyq_012', title: 'UHS MDCAT 2025 (with Answer Key)', subject: 'PYQ Papers', description: 'UHS MDCAT 2025 original paper with answer key.', file: '/pyq/2764-UHS MDCAT 2025 Original Paper with Answer Key PDF-(taleem360.com).pdf' },
]

// ─── helpers ────────────────────────────────────────────────────────────────

function getIcon(iconName: string) {
  const icons: Record<string, typeof Clipboard> = {
    'clipboard': Clipboard,
  }
  const Icon = icons[iconName] || Clipboard
  return <Icon className="w-5 h-5" />
}

function fmtTime(secs: number) {
  const h = Math.floor(secs / 3600)
  const m = Math.floor((secs % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

// last 15 weeks = 105 days for the heatmap — now imported from hook

function heatColor(secs: number) {
  if (secs === 0) return 'bg-muted'
  if (secs < 300) return 'bg-primary/20'
  if (secs < 900) return 'bg-primary/40'
  if (secs < 1800) return 'bg-primary/70'
  return 'bg-primary'
}

// ─── Activity Dashboard ──────────────────────────────────────────────────────

function ActivityDashboard() {
  const activity = useActivityData()

  const todaySecs = activity.days.find(d => d.date === todayStr())?.seconds ?? 0
  const heatmap = buildHeatmap(activity.days)

  // group into weeks for the grid
  const weeks: { date: string; secs: number }[][] = []
  for (let i = 0; i < heatmap.length; i += 7) {
    weeks.push(heatmap.slice(i, i + 7))
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" /> Study Activity
        </h2>
        <span className="text-xs text-muted-foreground">Last 15 weeks</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Current Streak', value: `${activity.currentStreak} days`, icon: <Flame className="w-4 h-4 text-orange-500" /> },
          { label: 'Longest Streak', value: `${activity.longestStreak} days`, icon: <Zap className="w-4 h-4 text-yellow-500" /> },
          { label: 'Today', value: fmtTime(todaySecs), icon: <Clock className="w-4 h-4 text-primary" /> },
          { label: 'Total Time', value: fmtTime(activity.totalSeconds), icon: <BarChart3 className="w-4 h-4 text-primary" /> },
        ].map(s => (
          <div key={s.label} className="bg-background rounded-lg p-3 border border-border">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">{s.icon}{s.label}</div>
            <div className="text-xl font-bold">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Heatmap */}
      <div className="overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map(cell => (
                <div
                  key={cell.date}
                  title={`${cell.date}: ${fmtTime(cell.secs)}`}
                  className={`w-3 h-3 rounded-sm ${heatColor(cell.secs)} transition-colors`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span>Less</span>
        {['bg-muted', 'bg-primary/20', 'bg-primary/40', 'bg-primary/70', 'bg-primary'].map(c => (
          <div key={c} className={`w-3 h-3 rounded-sm ${c}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}

// ─── Home Page ───────────────────────────────────────────────────────────────

export default function Home() {
  useActivityTracker()

  const recentVideos = videos.slice(0, 4)
  const recentBooks = previewBooks

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* ── Hero ── */}
        <div className="text-center space-y-4 py-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-2">
            <Zap className="w-4 h-4" /> MDCAT Preparation Platform
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to MedStudy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master medical sciences with test series, curated videos, a full resource library, and AI assistance.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Link href="/tests" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start a Test
            </Link>
            <Link href="/library" className="border border-border px-6 py-2.5 rounded-lg font-medium hover:border-primary transition-colors">
              Browse Library
            </Link>
          </div>
        </div>

        {/* ── Activity Dashboard ── */}
        <ActivityDashboard />

        {/* ── Quick Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Test Series', value: testSeriesList.length, icon: <FileText className="w-5 h-5 text-primary" />, href: '/tests' },
            { label: 'Books & PDFs', value: 25, icon: <BookOpen className="w-5 h-5 text-primary" />, href: '/library' },
            { label: 'Videos', value: videos.length, icon: <Play className="w-5 h-5 text-primary" />, href: '/videos' },
            { label: 'Questions', value: testSeriesList.reduce((s, t) => s + t.questions.length, 0), icon: <BarChart3 className="w-5 h-5 text-primary" />, href: '/tests' },
          ].map(s => (
            <Link key={s.label} href={s.href} className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <div className="flex items-center justify-between mb-2">
                {s.icon}
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </Link>
          ))}
        </div>

        {/* ── Test Series Preview ── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Test Series</h2>
            <Link href="/tests" className="text-sm text-primary hover:underline flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testSeriesList.map(series => {
              const qCount = series.questions.length
              const subjects = [...new Set(series.questions.map(q => q.subject))]
              return (
                <Link key={series.id} href="/tests" className="group bg-card border border-border rounded-xl p-5 hover:border-primary hover:shadow-sm transition-all">
                  <div className="mb-3 text-primary">{getIcon(series.icon)}</div>
                  <h3 className="font-semibold mb-1">{series.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{series.description}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" />{qCount} Qs</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{getTestDuration(qCount)}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {subjects.slice(0, 3).map(s => (
                      <span key={s} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{s}</span>
                    ))}
                    {subjects.length > 3 && <span className="text-xs text-muted-foreground">+{subjects.length - 3}</span>}
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── Library Preview ── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Resource Library</h2>
            <Link href="/library" className="text-sm text-primary hover:underline flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentBooks.map((book) => (
              <div key={book.id} className="bg-card border border-border rounded-xl p-4 hover:border-primary hover:shadow-sm transition-all">
                <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold line-clamp-2 mb-1">{book.title}</h3>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{book.subject}</span>
                <div className="flex gap-2 mt-3">
                  <a
                    href={`/pdf-viewer?file=${encodeURIComponent(book.file)}&title=${encodeURIComponent(book.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs bg-primary text-primary-foreground py-1.5 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3 h-3" /> View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Videos Preview ── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Learning Videos</h2>
            <Link href="/videos" className="text-sm text-primary hover:underline flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentVideos.map((video, i) => {
              const isPlaylist = video.url.includes('playlist')
              return (
                <a
                  key={i}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-sm transition-all"
                >
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    {video.thumbnailUrl ? (
                      <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ListVideo className="w-8 h-8 text-muted-foreground/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      {isPlaylist ? <ListVideo className="w-10 h-10 text-white" /> : <Play className="w-10 h-10 text-white fill-white" />}
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">{video.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{video.tags[0]}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        {/* ── Sera AI CTA ── */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 rounded-2xl p-8 text-center space-y-4">
          <div className="text-4xl">🤖</div>
          <h2 className="text-2xl font-bold">Need help understanding a concept?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sera AI is your personal MDCAT study assistant — ask anything about Biology, Chemistry, Physics, or English.
          </p>
          <a
            href="https://seraai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            Open Sera AI <ExternalLink className="w-4 h-4" />
          </a>
        </section>

      </div>
    </div>
  )
}
