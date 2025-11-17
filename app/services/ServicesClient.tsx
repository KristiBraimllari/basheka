'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/cms-types'
import BackButton from '@/components/BackButton'

interface ServicesClientProps {
  services: Service[]
}

export default function ServicesClient({ services }: ServicesClientProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

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
                  Our Services
                </motion.div>
              </div>
              <h1 className="text-apple-hero md:text-[100px] text-[64px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05]">
                What We Do
              </h1>
              <p className="text-[24px] text-apple-gray-500 leading-relaxed max-w-lg">
                Comprehensive steel and iron fabrication services for every project need
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/quote"
                  className="group px-8 py-4 bg-apple-gray-700 text-white rounded-full text-lg font-medium hover:bg-apple-gray-600 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 text-apple-gray-700 text-lg font-medium hover:text-apple-gray-500 transition-colors underline decoration-2 underline-offset-4"
                >
                  Contact Us
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
              <div className="absolute inset-0 bg-gradient-to-br from-apple-gray-100 to-apple-gray-200 rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-cover bg-center opacity-20" />
              </div>
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl font-semibold text-apple-gray-700 mb-1">{services.length}</div>
                <div className="text-sm text-apple-gray-500">Services</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl font-semibold text-apple-gray-700 mb-1">100%</div>
                <div className="text-sm text-apple-gray-500">Quality</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - Asymmetric Grid */}
      <section className="py-32 bg-apple-gray-50">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-20"
          >
            <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-apple-gray-700 mb-6">
              All Services
            </div>
            <h2 className="text-apple-title md:text-[80px] text-[56px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05] mb-6">
              Our Capabilities
            </h2>
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
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${service.imageUrl})`,
                        backgroundColor: '#e8e8ed',
                      }}
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="space-y-6">
                    <div className="text-5xl font-semibold text-apple-gray-700 tracking-tight">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-4xl font-semibold text-apple-gray-700 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[19px] text-apple-gray-500 leading-relaxed">
                      {service.fullDescription || service.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white rounded-full text-sm text-apple-gray-700 border border-apple-gray-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center space-x-2 text-apple-gray-700 font-medium group"
                    >
                      <span>Learn more</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-apple-gray-700 text-white">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-apple-title md:text-[80px] text-[56px] font-semibold mb-8 tracking-tight leading-[1.05]">
              Need a Custom Solution?
            </h2>
            <p className="text-[21px] text-white/80 mb-12">
              Our team can work with you to develop a tailored approach for your specific project requirements.
            </p>
            <Link
              href="/quote"
              className="inline-block px-8 py-4 bg-white text-apple-gray-700 rounded-full text-lg font-medium hover:bg-apple-gray-100 transition-all"
            >
              Request a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

