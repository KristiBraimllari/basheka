import { getProjects, getServices } from '@/lib/api'
import PortfolioClient from './PortfolioClient'

export default async function PortfolioPage() {
  const projects = await getProjects()
  const services = await getServices()

  return <PortfolioClient projects={projects} services={services} />
}
