import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

interface FooterProps {
  companyName?: string
  tagline?: string
  contactInfo?: {
    phone?: string
    email?: string
    address?: {
      street?: string
      city?: string
      state?: string
      zipCode?: string
    }
  }
}

export default function Footer({ 
  companyName = 'SteelWorks',
  tagline = 'Transforming steel into structures with precision, craftsmanship, and innovation.',
  contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'info@steelworks.com',
    address: {
      street: '123 Industrial Blvd',
      city: 'Manufacturing City',
      state: 'ST',
      zipCode: '12345',
    },
  },
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { href: '/services/laser-cutting', label: 'Laser Cutting' },
      { href: '/services/structural-fabrication', label: 'Structural Fabrication' },
      { href: '/services/metal-finishing', label: 'Metal Finishing' },
      { href: '/services/project-management', label: 'Project Management' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/resources', label: 'Resources' },
      { href: '/contact', label: 'Contact' },
    ],
  }

  return (
    <footer className="bg-apple-gray-50 border-t border-apple-gray-200">
      <div className="max-w-[1024px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-semibold text-apple-gray-700 mb-4">
              {companyName}
            </div>
            <p className="text-apple-gray-500 text-sm leading-relaxed mb-6">
              {tagline}
            </p>
            <div className="space-y-3">
              {contactInfo.phone && (
                <div className="flex items-start space-x-3">
                  <Phone size={16} className="text-apple-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-apple-gray-500 text-sm">{contactInfo.phone}</span>
                </div>
              )}
              {contactInfo.email && (
                <div className="flex items-start space-x-3">
                  <Mail size={16} className="text-apple-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-apple-gray-500 text-sm">{contactInfo.email}</span>
                </div>
              )}
              {contactInfo.address && (
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-apple-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-apple-gray-500 text-sm">
                    {contactInfo.address.street && <>{contactInfo.address.street}<br /></>}
                    {contactInfo.address.city && contactInfo.address.state && (
                      <>{contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}</>
                    )}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-apple-gray-700 mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-apple-gray-500 hover:text-apple-gray-700 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-apple-gray-700 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-apple-gray-500 hover:text-apple-gray-700 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-apple-gray-700 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-apple-gray-500 hover:text-apple-gray-700 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-apple-gray-500 hover:text-apple-gray-700 text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="text-apple-gray-500 hover:text-apple-gray-700 text-sm transition-colors"
                >
                  Safety Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-apple-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-apple-gray-400 text-sm">
              © {currentYear} {companyName}. All rights reserved.
            </p>
            <p className="text-apple-gray-400 text-sm">
              Made with precision and care
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
