import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Manual revalidation endpoint
// Call this after publishing content in Sanity to refresh the cache
// Usage: POST /api/revalidate?secret=YOUR_SECRET&path=/services
export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const secret = searchParams.get('secret')
  const path = searchParams.get('path')

  // Verify secret token (set this in your environment variables)
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    if (path) {
      // Revalidate specific path
      revalidatePath(path)
      return NextResponse.json({ 
        revalidated: true, 
        path,
        now: Date.now() 
      })
    } else {
      // Revalidate all pages
      const paths = [
        '/',
        '/services',
        '/services/[slug]',
        '/portfolio',
        '/portfolio/[slug]',
        '/about',
        '/resources',
      ]

      paths.forEach((p) => {
        revalidatePath(p)
      })

      return NextResponse.json({ 
        revalidated: true, 
        paths,
        now: Date.now() 
      })
    }
  } catch (err) {
    return NextResponse.json({ 
      message: 'Error revalidating', 
      error: err instanceof Error ? err.message : 'Unknown error' 
    }, { status: 500 })
  }
}

