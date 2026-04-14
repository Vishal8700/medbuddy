'use client'

import { useState, useMemo } from 'react'
import { Play, Search, ExternalLink, ListVideo } from 'lucide-react'
import { videos } from '@/lib/videos'

// Derive subject categories from the first tag of each video
const SUBJECTS = [
  'All',
  'XI Chemistry',
  'XII Chemistry',
  'XI Physics',
  'XII Physics',
]

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/)
  return match ? match[1] : null
}

function isPlaylist(url: string) {
  return url.includes('playlist')
}

function getSubject(tags: string[]): string {
  for (const s of SUBJECTS.slice(1)) {
    if (tags.includes(s)) return s
  }
  return tags[0] ?? 'Other'
}

const subjectColors: Record<string, string> = {
  'XI Chemistry':  'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  'XII Chemistry': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  'XI Physics':    'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'XII Physics':   'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
}

export function VideosPage() {
  const [search, setSearch] = useState('')
  const [subject, setSubject] = useState('All')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return videos.filter((v) => {
      const matchSearch =
        !q ||
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.tags.some((t) => t.toLowerCase().includes(q))
      const matchSubject = subject === 'All' || v.tags.includes(subject)
      return matchSearch && matchSubject
    })
  }, [search, subject])

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-10 space-y-2">
          <h1 className="text-4xl font-bold">Learning Videos</h1>
          <p className="text-muted-foreground">
            Curated tricks, tips and explanations for MDCAT Chemistry and Physics
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search by title, topic or tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>

        {/* Subject filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SUBJECTS.map((s) => (
            <button
              key={s}
              onClick={() => setSubject(s)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                subject === s
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:border-primary'
              }`}
            >
              {s}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground self-center">
            {filtered.length} video{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((video, idx) => {
              const playlist = isPlaylist(video.url)
              const ytId = getYouTubeId(video.url)
              const thumb = video.thumbnailUrl || (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : null)
              const sub = getSubject(video.tags)
              const tagColor = subjectColors[sub] ?? 'bg-muted text-muted-foreground'

              return (
                <a
                  key={idx}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl overflow-hidden bg-card border border-border hover:border-primary/60 hover:shadow-md transition-all duration-200"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    {thumb ? (
                      <img
                        src={thumb}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10">
                        <ListVideo className="w-10 h-10 text-primary/40" />
                      </div>
                    )}

                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      {playlist
                        ? <ListVideo className="w-12 h-12 text-white" />
                        : <Play className="w-12 h-12 text-white fill-white" />
                      }
                    </div>

                    {/* Playlist badge */}
                    {playlist && (
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                        <ListVideo className="w-3 h-3" />
                        Playlist
                      </div>
                    )}

                    {/* Subject badge */}
                    <div className="absolute top-2 right-2">
                      <span className={`text-xs px-2 py-0.5 rounded font-medium ${tagColor}`}>
                        {sub}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-3 gap-2">
                    <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                      {video.title}
                    </h3>

                    <p className="text-xs text-muted-foreground line-clamp-2 flex-1">
                      {video.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-1">
                      {video.tags.slice(1, 4).map((tag) => (
                        <span key={tag} className="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
                      <span className="text-xs text-muted-foreground">
                        {playlist ? 'Full Playlist' : 'YouTube'}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <Play className="w-12 h-12 mx-auto mb-3 opacity-20" />
            <p>No videos found. Try a different search or filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
