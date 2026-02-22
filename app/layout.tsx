import type { Metadata } from 'next'
import '../styles/globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Public Works — Mission Control',
  description: 'Brand operations hub for Public Works outdoor gear',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-sky-50">
        <Nav />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
