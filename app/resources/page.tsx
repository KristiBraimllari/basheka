import { getResources } from '@/lib/api'
import ResourcesPageClient from '@/components/ResourcesPageClient'

export default async function ResourcesPage() {
  const resources = await getResources()

  return <ResourcesPageClient resources={resources} />
}
