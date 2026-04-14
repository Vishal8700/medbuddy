'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              Made with <span className="text-red-500">❤</span> by <span className="font-semibold text-foreground">Vishal</span> for <span className="font-semibold text-primary">Rabii</span>
            </p>
          </div>
          <div className="text-xs text-muted-foreground">
            &copy; {currentYear} MedStudy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
