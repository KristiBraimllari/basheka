// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
// Note: Live content API is not available in next-sanity@7.x, using fallback
import { client } from './client'

// Fallback for next-sanity@7.x compatibility
export const sanityFetch = async <T,>(query: string, params = {}) => {
  return await client.fetch<T>(query, params)
}

export const SanityLive = () => null
