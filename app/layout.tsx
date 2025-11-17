import type { Metadata } from 'next'
import { Teko } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getSiteSettings } from '@/lib/api'

const teko = Teko({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-teko',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Steel & Iron Fabrication | Transforming Blueprints into Structures',
  description: 'Professional steel and iron fabrication services including laser cutting, heavy structural fabrication, and end-to-end project delivery. Trusted by industry leaders.',
  keywords: 'steel fabrication, iron fabrication, laser cutting, structural steel, metal fabrication',
  openGraph: {
    title: 'Steel & Iron Fabrication Company',
    description: 'Transforming steel into structures with precision and craftsmanship',
    type: 'website',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const siteSettings = await getSiteSettings()

  return (
    <html lang="en" className={`scroll-smooth ${teko.variable}`}>
      <body className={GeistSans.className}>
        <Navigation />
        <main className="relative">{children}</main>
        <Footer 
          companyName={siteSettings.companyName}
          tagline={siteSettings.tagline}
          contactInfo={siteSettings.contactInfo}
        />
      </body>
    </html>
  )
}

