import { getResources } from '@/lib/api'
import ResourcesClient from './ResourcesClient'

// Force dynamic rendering to always fetch fresh data from Sanity
export const dynamic = 'force-dynamic'

export default async function ResourcesPage() {
  const resources = await getResources()

  return <ResourcesClient resources={resources} />
}
