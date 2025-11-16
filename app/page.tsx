'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Wrench, Target, Zap } from 'lucide-react'
import { heroData, services } from '@/lib/cms-data'

export default function Home() {
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
                Precision Fabrication Since 1995
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
                <Link
                  href={heroData.ctaSecondary?.link || '#'}
                  className="px-8 py-4 text-apple-gray-700 text-lg font-medium hover:text-apple-gray-500 transition-colors underline decoration-2 underline-offset-4"
                >
                  {heroData.ctaSecondary?.label}
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
          {/* CTA to Services Page */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-apple-gray-700 text-white rounded-full text-lg font-medium hover:bg-apple-gray-600 transition-all group"
            >
              <span>View All Services</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section - Feature Blocks */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-apple-title md:text-[80px] text-[56px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05] mb-6">
              Why Choose Us
            </h2>
            <p className="text-[21px] text-apple-gray-500 max-w-2xl mx-auto">
              Three decades of excellence in steel fabrication
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: 'Precision', desc: 'Tolerances measured in thousandths' },
              { icon: Wrench, title: 'Expertise', desc: '30+ years of industry experience' },
              { icon: Target, title: 'Quality', desc: 'ISO 9001 certified processes' },
              { icon: Zap, title: 'Innovation', desc: 'State-of-the-art equipment' },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-apple-gray-50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-apple-gray-700" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-apple-gray-700 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-apple-gray-500 text-sm">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Masonry Style */}
      <section id="portfolio" className="py-32 bg-apple-gray-50">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-20"
          >
            <h2 className="text-apple-title md:text-[80px] text-[56px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05] mb-6">
              Recent Work
            </h2>
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 text-apple-gray-700 font-medium group"
            >
              <span>View all projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className={`bg-apple-gray-200 rounded-2xl overflow-hidden ${
                  index === 0 ? 'md:row-span-2' : ''
                }`}
              >
                <div className={`bg-gradient-to-br from-apple-gray-300 to-apple-gray-400 ${
                  index === 0 ? 'h-[600px]' : 'h-[300px]'
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Centered */}
      <section id="contact" className="py-32 bg-apple-gray-700 text-white">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-apple-title md:text-[80px] text-[56px] font-semibold mb-8 tracking-tight leading-[1.05]">
              Ready to Start?
            </h2>
            <p className="text-[21px] text-white/80 mb-12">
              Let&apos;s discuss how we can bring your vision to life with precision and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="px-8 py-4 bg-white text-apple-gray-700 rounded-full text-lg font-medium hover:bg-apple-gray-100 transition-all"
              >
                Get a Free Quote
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
