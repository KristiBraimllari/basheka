import { getProjects, getServices } from '@/lib/api'
import PortfolioClient from './PortfolioClient'

// Force dynamic rendering to always fetch fresh data from Sanity
export const dynamic = 'force-dynamic'

export default async function PortfolioPage() {
  const projects = await getProjects()
  const services = await getServices()

  return <PortfolioClient projects={projects} services={services} />
}
