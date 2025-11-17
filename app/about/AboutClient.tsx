'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Wrench, Target, Zap } from 'lucide-react'
import Timeline from '@/components/Timeline'
import TeamSection from '@/components/TeamSection'
import SustainabilityMetrics from '@/components/SustainabilityMetrics'
import type { TimelineEvent, TeamMember, SustainabilityMetric } from '@/lib/cms-types'
import BackButton from '@/components/BackButton'

interface AboutClientProps {
  timelineEvents: TimelineEvent[]
  teamMembers: TeamMember[]
  sustainabilityMetrics: SustainabilityMetric[]
}

export default function AboutClient({
  timelineEvents,
  teamMembers,
  sustainabilityMetrics,
}: AboutClientProps) {
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
                  Our Story
                </motion.div>
              </div>
              <h1 className="text-apple-hero md:text-[100px] text-[64px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05]">
                Three Decades of Excellence
              </h1>
              <p className="text-[24px] text-apple-gray-500 leading-relaxed max-w-lg">
                Transforming steel into structures, building trust through excellence, and innovating for the future.
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
                  href="/portfolio"
                  className="px-8 py-4 text-apple-gray-700 text-lg font-medium hover:text-apple-gray-500 transition-colors underline decoration-2 underline-offset-4"
                >
                  View Our Work
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

      {/* Why Choose Us - Feature Blocks */}
      <section className="py-32 bg-apple-gray-50">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-apple-gray-700 mb-6">
              Why Choose Us
            </div>
            <h2 className="text-apple-title md:text-[80px] text-[56px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05] mb-6">
              Our Values
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
                  className="bg-white rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-apple-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Timeline Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-20"
          >
            <div className="inline-block px-4 py-2 bg-apple-gray-50 rounded-full text-sm font-medium text-apple-gray-700 mb-6">
              Our Journey
            </div>
            <h2 className="text-apple-title md:text-[80px] text-[56px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05] mb-6">
              Milestones
            </h2>
          </motion.div>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <TeamSection members={teamMembers} />
      <SustainabilityMetrics metrics={sustainabilityMetrics} />

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
              Join Our Team
            </h2>
            <p className="text-[21px] text-white/80 mb-12">
              We&apos;re always looking for talented individuals who share our passion for excellence and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-block px-8 py-4 bg-white text-apple-gray-700 rounded-full text-lg font-medium hover:bg-apple-gray-100 transition-all"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-white text-lg font-medium hover:text-white/80 transition-colors underline decoration-2 underline-offset-4"
              >
                View Careers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

