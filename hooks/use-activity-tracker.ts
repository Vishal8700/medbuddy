'use client'

import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'medstudy_activity'
const FLUSH_INTERVAL_MS = 30 * 60 * 1000 // 30 minutes as requested

export interface DayActivity {
  date: string    // 'YYYY-MM-DD'
  seconds: number
}

export interface ActivityData {
  days: DayActivity[]
  currentStreak: number
  longestStreak: number
  totalSeconds: number
}

const EMPTY: ActivityData = { days: [], currentStreak: 0, longestStreak: 0, totalSeconds: 0 }

// ─── pure helpers ─────────────────────────────────────────────────────────────

function todayStr() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function computeStreaks(days: DayActivity[]): { current: number; longest: number } {
  // Any day with >= 1 second counts
  const dateSet = new Set(days.filter(d => d.seconds >= 1).map(d => d.date))

  // Current streak: walk backwards from today
  let current = 0
  const cursor = new Date()
  while (true) {
    const s = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, '0')}-${String(cursor.getDate()).padStart(2, '0')}`
    if (dateSet.has(s)) {
      current++
      cursor.setDate(cursor.getDate() - 1)
    } else {
      break
    }
  }

  // Longest streak
  let longest = 0, run = 0
  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date))
  for (const d of sorted) {
    if (d.seconds >= 1) { run++; longest = Math.max(longest, run) }
    else run = 0
  }

  return { current, longest }
}

function buildData(days: DayActivity[]): ActivityData {
  const trimmed = days.slice(-365)
  const { current, longest } = computeStreaks(trimmed)
  const totalSeconds = trimmed.reduce((s, d) => s + d.seconds, 0)
  return { days: trimmed, currentStreak: current, longestStreak: longest, totalSeconds }
}

// ─── localStorage I/O ─────────────────────────────────────────────────────────

export function loadActivity(): ActivityData {
  if (typeof window === 'undefined') return EMPTY
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as ActivityData
      // Re-compute streaks fresh every load (in case date changed)
      return buildData(parsed.days ?? [])
    }
  } catch { /* ignore */ }
  return EMPTY
}

function persistSeconds(extraSeconds: number): ActivityData {
  const today = todayStr()
  const existing = loadActivity()
  const days = [...existing.days]
  const idx = days.findIndex(d => d.date === today)

  if (idx >= 0) {
    days[idx] = { ...days[idx], seconds: days[idx].seconds + extraSeconds }
  } else {
    // First visit today — add with extraSeconds (at least 1)
    days.push({ date: today, seconds: Math.max(extraSeconds, 1) })
  }

  const updated = buildData(days)
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)) } catch { /* ignore */ }
  return updated
}

// ─── Shared reactive state so all consumers stay in sync ─────────────────────

type Listener = (data: ActivityData) => void
const listeners = new Set<Listener>()
let cachedData: ActivityData | null = null

function notify(data: ActivityData) {
  cachedData = data
  listeners.forEach(fn => fn(data))
}

function subscribe(fn: Listener) {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

// ─── Tracker hook (call once, anywhere in the tree) ──────────────────────────

export function useActivityTracker() {
  const pendingRef = useRef(0)
  const lastTickRef = useRef(Date.now())
  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    // Immediately record today's visit (1 second) so streak shows on first open
    // This also ensures after reload the stored value is read + today is marked
    const initial = persistSeconds(1)
    notify(initial)
    pendingRef.current = 0

    const flush = () => {
      const secs = Math.floor(pendingRef.current)
      if (secs <= 0) return
      pendingRef.current = 0
      const updated = persistSeconds(secs)
      notify(updated)
    }

    const tick = () => {
      if (document.visibilityState !== 'visible') {
        lastTickRef.current = Date.now()
        return
      }
      const now = Date.now()
      const delta = Math.min((now - lastTickRef.current) / 1000, 10)
      pendingRef.current += delta
      lastTickRef.current = now
    }

    const tickId = setInterval(tick, 1000)
    // Flush every 30 minutes as requested
    const flushId = setInterval(flush, FLUSH_INTERVAL_MS)
    // Also flush every 60 seconds so the UI stays fresh
    const uiFlushId = setInterval(flush, 60_000)

    const onVisibility = () => { lastTickRef.current = Date.now() }
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('beforeunload', flush)

    return () => {
      clearInterval(tickId)
      clearInterval(flushId)
      clearInterval(uiFlushId)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('beforeunload', flush)
      flush()
    }
  }, [])
}

// ─── Consumer hook — reactive, updates whenever tracker flushes ──────────────

export function useActivityData(): ActivityData {
  const [data, setData] = useState<ActivityData>(EMPTY)

  useEffect(() => {
    // Always read fresh from localStorage on mount (handles page reload)
    const latest = loadActivity()
    setData(latest)
    // Keep in sync with in-memory cache for live updates
    if (cachedData) setData(cachedData)
    return subscribe(setData)
  }, [])

  return data
}

// ─── Heatmap builder (last N weeks) ──────────────────────────────────────────

export function buildHeatmap(days: DayActivity[], weeks = 15) {
  const map = new Map(days.map(d => [d.date, d.seconds]))
  const cells: { date: string; secs: number }[] = []
  const today = new Date()
  const total = weeks * 7

  for (let i = total - 1; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const s = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    cells.push({ date: s, secs: map.get(s) ?? 0 })
  }
  return cells
}
