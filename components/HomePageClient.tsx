'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { HeroSection, Service } from '@/lib/cms-types'
import IntroNarrative from './IntroNarrative'
import TrustSignals from './TrustSignals'
import { getTrustSignals } from '@/lib/api'

interface HomePageClientProps {
  heroData: HeroSection
  services: Service[]
  siteSettings: any
  trustSignals: any[]
}

export default function HomePageClient({ heroData, services, siteSettings, trustSignals }: HomePageClientProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <>
      {/* Hero Section - Full Screen Split */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center bg-white relative overflow-hidden">
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-apple-gray-50 rounded-full text-sm font-medium text-apple-gray-700 mb-4"
              >
                {siteSettings.heroBadge || 'Precision Fabrication Since 1995'}
              </motion.div>
              <h1 className="text-apple-hero md:text-[100px] text-[64px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05]">
                {heroData.title}
              </h1>
              <p className="text-[24px] text-apple-gray-500 leading-relaxed max-w-lg">
                {heroData.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={heroData.ctaPrimary.link}
                  className="group px-8 py-4 bg-apple-gray-700 text-white rounded-full text-lg font-medium hover:bg-apple-gray-600 transition-all flex items-center justify-center space-x-2"
                >
                  <span>{heroData.ctaPrimary.label}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                {heroData.ctaSecondary && (
                  <Link
                    href={heroData.ctaSecondary.link || '#'}
                    className="px-8 py-4 text-apple-gray-700 text-lg font-medium hover:text-apple-gray-500 transition-colors underline decoration-2 underline-offset-4"
                  >
                    {heroData.ctaSecondary.label}
                  </Link>
                )}
              </div>
            </motion.div>

            {/* Right: Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative h-[600px] lg:h-[700px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-apple-gray-100 to-apple-gray-200 rounded-3xl overflow-hidden">
                {heroData.imageUrl && (
                  <div
                    className="w-full h-full bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${heroData.imageUrl})` }}
                  />
                )}
              </div>
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl font-semibold text-apple-gray-700 mb-1">30+</div>
                <div className="text-sm text-apple-gray-500">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl font-semibold text-apple-gray-700 mb-1">500+</div>
                <div className="text-sm text-apple-gray-500">Projects Completed</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Narrative Section */}
      <IntroNarrative />

      {/* Services Section - Asymmetric Grid */}
      <section id="services" className="py-32 bg-apple-gray-50">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-20"
          >
            <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-apple-gray-700 mb-6">
              Our Services
            </div>
            <h2 className="text-apple-title md:text-[80px] text-[56px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05] mb-6">
              What We Do
            </h2>
            <p className="text-[21px] text-apple-gray-500 max-w-2xl">
              Comprehensive steel and iron fabrication services for every project need
            </p>
          </motion.div>

          {/* Asymmetric Grid Layout */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="h-[400px] bg-apple-gray-200 rounded-3xl overflow-hidden">
                    {index === 0 && service.imageUrl ? (
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={service.imageUrl} type="video/mp4" />
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${service.imageUrl})`,
                            backgroundColor: '#e8e8ed',
                          }}
                        />
                      </video>
                    ) : (
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${service.imageUrl})`,
                          backgroundColor: '#e8e8ed',
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="space-y-6">
                    <div className="text-5xl font-semibold text-apple-gray-700 tracking-tight">
                      {service.title}
                    </div>
                    <p className="text-[21px] text-apple-gray-500 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center space-x-2 text-apple-gray-700 hover:text-apple-gray-500 transition-colors text-lg font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals trustSignals={trustSignals} />

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="py-32 bg-white">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-20"
          >
            <div className="inline-block px-4 py-2 bg-apple-gray-50 rounded-full text-sm font-medium text-apple-gray-700 mb-6">
              Our Work
            </div>
            <h2 className="text-apple-title md:text-[80px] text-[56px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05] mb-6">
              Featured Projects
            </h2>
            <p className="text-[21px] text-apple-gray-500 max-w-2xl">
              Explore our portfolio of successful steel fabrication projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-apple-gray-700 text-white rounded-full text-lg font-medium hover:bg-apple-gray-600 transition-all"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-apple-gray-700 text-white">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <h2 className="text-apple-title md:text-[80px] text-[56px] font-semibold tracking-tight leading-[1.05]">
              Ready to Start Your Project?
            </h2>
            <p className="text-[24px] text-white/80 max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your vision to life with precision and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/quote"
                className="group px-8 py-4 bg-white text-apple-gray-700 rounded-full text-lg font-medium hover:bg-apple-gray-100 transition-all flex items-center justify-center space-x-2"
              >
                <span>Get a Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 text-white text-lg font-medium hover:text-white/80 transition-colors underline decoration-2 underline-offset-4"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

