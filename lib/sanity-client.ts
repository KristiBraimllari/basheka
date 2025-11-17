// Sanity Client Configuration
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Get environment variables with fallbacks
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-11-16'

// Only create client if Sanity is configured
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      useCdn: false, // Disabled for immediate updates - set to true for better performance
      apiVersion,
      token: process.env.SANITY_API_TOKEN, // Optional, for private datasets
    })
  : null as any // Will be handled by fallback in api.ts

// Log Sanity configuration status
if (projectId) {
  console.log(`[Sanity] Client initialized - Project: ${projectId}, Dataset: ${dataset}, CDN: disabled`)
} else {
  console.warn('[Sanity] Client not initialized - Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
}

// Image URL builder for Sanity images
let builder: ReturnType<typeof imageUrlBuilder> | null = null

if (projectId && client) {
  builder = imageUrlBuilder(client)
}

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    throw new Error('Sanity client not configured. Please set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local')
  }
  return builder.image(source)
}

// Helper to get image URL from Sanity image reference
export function getImageUrl(image: any, width?: number): string | undefined {
  if (!image) return undefined
  if (typeof image === 'string') return image
  if (!projectId || !builder) return undefined
  
  try {
    const url = urlFor(image)
    if (width) {
      return url.width(width).url()
    }
    return url.url()
  } catch (error) {
    console.error('Error building image URL:', error)
    return undefined
  }
}

// Helper to get file URL from Sanity file reference
export function getFileUrl(file: any): string | undefined {
  if (!file?.asset?._ref || !projectId) return undefined
  const ref = file.asset._ref
  const [, id, extension] = ref.split('-')
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`
}

