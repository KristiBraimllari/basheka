import { getTimelineEvents, getTeamMembers, getSustainabilityMetrics } from '@/lib/api'
import AboutClient from './AboutClient'

// Force dynamic rendering to always fetch fresh data from Sanity
export const dynamic = 'force-dynamic'

export default async function AboutPage() {
  const timelineEvents = await getTimelineEvents()
  const teamMembers = await getTeamMembers()
  const sustainabilityMetrics = await getSustainabilityMetrics()

  return (
    <AboutClient
      timelineEvents={timelineEvents}
      teamMembers={teamMembers}
      sustainabilityMetrics={sustainabilityMetrics}
    />
  )
}
