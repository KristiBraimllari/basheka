import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal-50">
      <div className="text-center px-4">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-charcoal-900 mb-4">
          404
        </h1>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-charcoal-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-steel-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-steel-700 transition-colors"
        >
          <Home size={20} />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  )
}

