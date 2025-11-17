import { getSiteSettings } from '@/lib/api'
import ContactPageClient from '@/components/ContactPageClient'

export default async function ContactPage() {
  const siteSettings = await getSiteSettings()

  return <ContactPageClient siteSettings={siteSettings} />
}
