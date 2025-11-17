import { getHeroSection, getServices } from '@/lib/api'
import HomeClient from './HomeClient'

// Force dynamic rendering to always fetch fresh data from Sanity
export const dynamic = 'force-dynamic'

export default async function Home() {
  const heroData = await getHeroSection()
  const services = await getServices()

  return <HomeClient heroData={heroData} services={services} />
}
