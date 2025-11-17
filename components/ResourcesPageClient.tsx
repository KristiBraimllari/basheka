'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ResourceCard from '@/components/ResourceCard'
import WeightCalculator from '@/components/WeightCalculator'
import BackButton from '@/components/BackButton'
import type { Resource } from '@/lib/cms-types'

interface ResourcesPageClientProps {
  resources: Resource[]
}

export default function ResourcesPageClient({ resources }: ResourcesPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const categories = Array.from(new Set(resources.map((r) => r.category)))
  const types = Array.from(new Set(resources.map((r) => r.type)))

  const filteredResources = resources.filter((resource) => {
    const categoryMatch = selectedCategory === 'all' || resource.category === selectedCategory
    const typeMatch = selectedType === 'all' || resource.type === selectedType
    return categoryMatch && typeMatch
  })

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
                  Resources
                </motion.div>
              </div>
              <h1 className="text-apple-hero md:text-[100px] text-[64px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05]">
                Resource Hub
              </h1>
              <p className="text-[24px] text-apple-gray-500 leading-relaxed max-w-lg">
                Access technical guides, specifications, calculators, and educational resources
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
              <div className="absolute inset-0 bg-gradient-to-br from-apple-gray-100 to-apple-gray-200 rounded-3xl overflow-hidden" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="py-32 bg-apple-gray-50">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-12"
          >
            <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-apple-gray-700 mb-6">
              Tools & Calculators
            </div>
            <h2 className="text-apple-title md:text-[64px] text-[48px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05] mb-6">
              Calculate & Estimate
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <WeightCalculator />
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-apple-gray-200">
              <h3 className="text-2xl font-semibold text-apple-gray-700 mb-4 tracking-tight">
                More Calculators Coming Soon
              </h3>
              <p className="text-apple-gray-500 leading-relaxed">
                We&apos;re continuously adding new tools to help you with your projects. Check back soon for cost estimators, material selectors, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-12"
          >
            <div className="inline-block px-4 py-2 bg-apple-gray-50 rounded-full text-sm font-medium text-apple-gray-700 mb-6">
              Resources & Downloads
            </div>
            <h2 className="text-apple-title md:text-[64px] text-[48px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05] mb-6">
              Knowledge Center
            </h2>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex-1 min-w-[200px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-apple-gray-50 border border-apple-gray-200 rounded-full text-sm font-medium text-apple-gray-700 focus:ring-2 focus:ring-apple-gray-700 focus:border-apple-gray-700"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-apple-gray-50 border border-apple-gray-200 rounded-full text-sm font-medium text-apple-gray-700 focus:ring-2 focus:ring-apple-gray-700 focus:border-apple-gray-700"
              >
                <option value="all">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type.replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Resources Grid */}
          {filteredResources.length > 0 ? (
            <div className="space-y-4">
              {filteredResources.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-apple-gray-500 text-lg">
                No resources found matching your filters.
              </p>
            </div>
          )}
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
              Need More Information?
            </h2>
            <p className="text-[21px] text-white/80 mb-12">
              Explore our services or contact us for personalized assistance with your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-4 bg-white text-apple-gray-700 rounded-full text-lg font-medium hover:bg-apple-gray-100 transition-all"
              >
                View Our Services
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

