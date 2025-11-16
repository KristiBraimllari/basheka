import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navigation />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

