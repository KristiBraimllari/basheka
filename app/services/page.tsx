import { getServices } from '@/lib/api'
import ServicesPageClient from '@/components/ServicesPageClient'

export default async function ServicesPage() {
  const services = await getServices()

  return <ServicesPageClient services={services} />
}
