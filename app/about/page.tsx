import { getSiteSettings, getTimelineEvents, getTeamMembers, getSustainabilityMetrics } from '@/lib/api'
import AboutPageClient from '@/components/AboutPageClient'

export default async function AboutPage() {
  const [siteSettings, timelineEvents, teamMembers, sustainabilityMetrics] = await Promise.all([
    getSiteSettings(),
    getTimelineEvents(),
    getTeamMembers(),
    getSustainabilityMetrics(),
  ])

  return (
    <AboutPageClient 
      siteSettings={siteSettings}
      timelineEvents={timelineEvents}
      teamMembers={teamMembers}
      sustainabilityMetrics={sustainabilityMetrics}
    />
  )
}
