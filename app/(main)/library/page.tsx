import { LibraryPage } from '@/components/library/library-page'

export const metadata = {
  title: 'Library - MedStudy',
  description: 'Browse and download medical textbooks and resources',
}

export default function LibraryRoute() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <LibraryPage />
      </div>
    </div>
  )
}
