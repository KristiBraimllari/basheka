'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'
import BackButton from '@/components/BackButton'

interface ContactPageClientProps {
  siteSettings: any
}

export default function ContactPageClient({ siteSettings }: ContactPageClientProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = siteSettings.contactInfo || {}

  return (
    <>
      {/* Hero Section - Split Screen */}
      <section ref={heroRef} className="min-h-screen flex items-center bg-white relative overflow-hidden">
        <div className="w-full max-w-[1024px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
            {/* Left: Text Content */}
            <motion.div
              style={{ opacity, scale }}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-8"
            >
              <div className="flex flex-col items-start space-y-4">
                <BackButton href="/" label="Home" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="px-4 py-2 bg-apple-gray-50 rounded-full text-sm font-medium text-apple-gray-700"
                >
                  Get in Touch
                </motion.div>
              </div>
              <h1 className="text-apple-hero md:text-[100px] text-[64px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05]">
                {siteSettings.contactHeroTitle || 'Let&apos;s Talk'}
              </h1>
              <p className="text-[24px] text-apple-gray-500 leading-relaxed max-w-lg">
                {siteSettings.contactHeroDescription || 'Get in touch with our team to discuss your project needs'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/services"
                  className="group px-8 py-4 bg-apple-gray-700 text-white rounded-full text-lg font-medium hover:bg-apple-gray-600 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Our Services</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/quote"
                  className="px-8 py-4 text-apple-gray-700 text-lg font-medium hover:text-apple-gray-500 transition-colors underline decoration-2 underline-offset-4"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>

            {/* Right: Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative h-[600px] lg:h-[700px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-apple-gray-100 to-apple-gray-200 rounded-3xl overflow-hidden" />
              {/* Floating Contact Info */}
              {contactInfo.phone && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-8 right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
                >
                  <Phone className="text-apple-gray-700 mb-2" size={24} />
                  <div className="text-sm font-semibold text-apple-gray-700">{contactInfo.phone}</div>
                  <div className="text-xs text-apple-gray-500">Mon-Fri, 8am-5pm</div>
                </motion.div>
              )}
              {contactInfo.email && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
                >
                  <Mail className="text-apple-gray-700 mb-2" size={24} />
                  <div className="text-sm font-semibold text-apple-gray-700">{contactInfo.email}</div>
                  <div className="text-xs text-apple-gray-500">24hr response</div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-32 bg-apple-gray-50">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-8"
            >
              <div>
                <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-apple-gray-700 mb-6">
                  Contact Information
                </div>
                <h2 className="text-5xl font-semibold text-apple-gray-700 mb-6 tracking-tight">
                  Get in Touch
                </h2>
                <p className="text-[19px] text-apple-gray-500 leading-relaxed">
                  Our team is ready to help you with your steel and iron fabrication needs. Reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Phone, title: 'Phone', value: contactInfo.phone || '+1 (555) 123-4567', desc: 'Mon-Fri, 8am-5pm EST' },
                  { icon: Mail, title: 'Email', value: contactInfo.email || 'info@steelworks.com', desc: 'We respond within 24 hours' },
                  { icon: MapPin, title: 'Address', value: contactInfo.address?.street || '123 Industrial Blvd', desc: contactInfo.address ? `${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zipCode}` : 'Manufacturing City, ST 12345' },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-6 bg-white rounded-2xl"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-apple-gray-50 rounded-full flex items-center justify-center">
                          <Icon className="text-apple-gray-700" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-apple-gray-700 mb-1">{item.title}</h3>
                        <p className="text-apple-gray-700 font-medium">{item.value}</p>
                        <p className="text-sm text-apple-gray-500 mt-1">{item.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-4xl font-semibold text-apple-gray-700 mb-6 tracking-tight">
                  Send us a Message
                </h2>
                {isSubmitted ? (
                  <div className="bg-apple-gray-50 border border-apple-gray-200 rounded-2xl p-6 text-apple-gray-700">
                    Thank you! Your message has been sent. We&apos;ll get back to you soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-apple-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-apple-gray-50 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-gray-700 focus:border-apple-gray-700 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-apple-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-apple-gray-50 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-gray-700 focus:border-apple-gray-700 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-apple-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-apple-gray-50 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-gray-700 focus:border-apple-gray-700 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-apple-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-apple-gray-50 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-gray-700 focus:border-apple-gray-700 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-apple-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-apple-gray-50 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-gray-700 focus:border-apple-gray-700 transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-apple-gray-700 text-white px-6 py-4 rounded-full font-medium hover:bg-apple-gray-600 transition-all flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

