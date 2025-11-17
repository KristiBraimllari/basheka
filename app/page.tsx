import { getHeroSection, getServices } from '@/lib/api'
import HomeClient from './HomeClient'

export default async function Home() {
  const heroData = await getHeroSection()
  const services = await getServices()

  return <HomeClient heroData={heroData} services={services} />
}
