import { getSiteSettings } from '@/lib/api'
import QuotePageClient from '@/components/QuotePageClient'

export default async function QuotePage() {
  const siteSettings = await getSiteSettings()

  return <QuotePageClient siteSettings={siteSettings} />
}
