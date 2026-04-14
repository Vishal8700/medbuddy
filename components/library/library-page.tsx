'use client'

import { useState } from 'react'
import { Search, Download, BookOpen, Eye } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { books } from '@/lib/books'
import type { Book } from '@/lib/books'

export function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState<string>('All')

  const subjects = ['All', 'MDCAT', 'PYQ', 'PYQ Papers', 'English']

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === 'All' || book.subject === selectedSubject
    return matchesSearch && matchesSubject
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Resource Library</h1>
        <p className="text-muted-foreground">
          Explore our collection of textbooks, notes, and study materials
        </p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search books by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                selectedSubject === subject
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground border border-border hover:border-primary'
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
                {book.subject}
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-3 text-pretty">{book.title}</h3>

            <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
              {book.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-border gap-2">
              <span className="text-xs text-muted-foreground uppercase">PDF</span>
              <div className="flex gap-2">
                <a
                  href={`/pdf-viewer?file=${encodeURIComponent(book.file)}&title=${encodeURIComponent(book.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View
                </a>
                <a
                  href={book.file}
                  download
                  className="border border-border hover:border-primary text-foreground px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">No books found matching your search</p>
        </div>
      )}
    </div>
  )
}
