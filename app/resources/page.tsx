import { getResources } from '@/lib/api'
import ResourcesClient from './ResourcesClient'

export default async function ResourcesPage() {
  const resources = await getResources()

  return <ResourcesClient resources={resources} />
}
