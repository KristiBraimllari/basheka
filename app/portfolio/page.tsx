import { getProjects, getServices } from '@/lib/api'
import PortfolioPageClient from '@/components/PortfolioPageClient'

export default async function PortfolioPage() {
  const [projects, services] = await Promise.all([
    getProjects(),
    getServices(),
  ])

  return <PortfolioPageClient projects={projects} services={services} />
}
