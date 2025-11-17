import { getServices } from '@/lib/api'
import ServicesClient from './ServicesClient'

// Force dynamic rendering to always fetch fresh data from Sanity
export const dynamic = 'force-dynamic'

export default async function ServicesPage() {
  const services = await getServices()

  return <ServicesClient services={services} />
}
