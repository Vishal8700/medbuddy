'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { PdfViewerLayout } from '@/components/pdf-viewer/pdf-viewer-layout'

function PdfViewerContent() {
  const params = useSearchParams()
  const file = params.get('file') ?? ''
  const title = params.get('title') ?? 'Document'
  return <PdfViewerLayout file={file} title={title} />
}

export default function PdfViewerPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen text-muted-foreground">Loading...</div>}>
      <PdfViewerContent />
    </Suspense>
  )
}
