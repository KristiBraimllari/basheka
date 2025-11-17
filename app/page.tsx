import { getHeroSection, getServices, getSiteSettings, getTrustSignals } from '@/lib/api'
import HomePageClient from '@/components/HomePageClient'

export default async function Home() {
  const [heroData, services, siteSettings, trustSignals] = await Promise.all([
    getHeroSection(),
    getServices(),
    getSiteSettings(),
    getTrustSignals(),
  ])

  return (
    <HomePageClient 
      heroData={heroData}
      services={services}
      siteSettings={siteSettings}
      trustSignals={trustSignals}
    />
  )
}
