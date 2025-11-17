'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects, services } from '@/lib/cms-data'
import type { Project } from '@/lib/cms-types'
import CustomDropdown from '@/components/CustomDropdown'
import BackButton from '@/components/BackButton'

export default function PortfolioPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all')
  const [selectedService, setSelectedService] = useState<string>('all')
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const industries = Array.from(new Set(projects.map((p) => p.industry)))
  const filteredProjects = projects.filter((project) => {
    const industryMatch = selectedIndustry === 'all' || project.industry === selectedIndustry
    const serviceMatch = selectedService === 'all' || project.services.includes(selectedService)
    return industryMatch && serviceMatch
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
                  Our Portfolio
                </motion.div>
              </div>
              <h1 className="text-apple-hero md:text-[100px] text-[64px] font-semibold text-apple-gray-700 tracking-tight leading-[1.05]">
                Recent Work
              </h1>
              <p className="text-[24px] text-apple-gray-500 leading-relaxed max-w-lg">
                Showcasing our expertise across diverse industries and project types
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
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl font-semibold text-apple-gray-700 mb-1">{projects.length}+</div>
                <div className="text-sm text-apple-gray-500">Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl font-semibold text-apple-gray-700 mb-1">100%</div>
                <div className="text-sm text-apple-gray-500">Satisfaction</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-apple-gray-50">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-4">
            <CustomDropdown
              label="Industry"
              value={selectedIndustry}
              options={[
                { value: 'all', label: 'All Industries' },
                ...industries.map((industry) => ({
                  value: industry,
                  label: industry,
                })),
              ]}
              onChange={(value) => setSelectedIndustry(value)}
            />
            <CustomDropdown
              label="Service"
              value={selectedService}
              options={[
                { value: 'all', label: 'All Services' },
                ...services.map((service) => ({
                  value: service.id,
                  label: service.title,
                })),
              ]}
              onChange={(value) => setSelectedService(value)}
            />
          </div>
        </div>
      </section>

      {/* Projects Grid - Masonry Style */}
      <section className="pt-16 pb-32 bg-apple-gray-50">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-apple-gray-500 text-lg">
                No projects found matching your filters.
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
              Ready to Start Your Project?
            </h2>
            <p className="text-[21px] text-white/80 mb-12">
              Explore our services or get in touch to discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-4 bg-white text-apple-gray-700 rounded-full text-lg font-medium hover:bg-apple-gray-100 transition-all"
              >
                View Our Services
              </Link>
              <Link
                href="/quote"
                className="px-8 py-4 text-white text-lg font-medium hover:text-white/80 transition-colors underline decoration-2 underline-offset-4"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -8 }}
      className={`bg-white rounded-2xl overflow-hidden ${
        index === 0 ? 'md:row-span-2' : ''
      }`}
    >
      <Link href={`/portfolio/${project.slug}`}>
        <div className={`bg-apple-gray-200 ${
          index === 0 ? 'h-[600px]' : 'h-[300px]'
        }`}>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${project.images[0]})`,
              backgroundColor: '#e8e8ed',
            }}
          />
        </div>
        <div className="p-6">
          <div className="inline-block px-3 py-1 bg-apple-gray-50 rounded-full text-xs font-medium text-apple-gray-700 mb-3">
            {project.industry}
          </div>
          <h3 className="text-2xl font-semibold text-apple-gray-700 mb-2 tracking-tight">
            {project.title}
          </h3>
          <p className="text-apple-gray-500 mb-4 line-clamp-2 text-sm">
            {project.description}
          </p>
          <div className="flex items-center space-x-2 text-apple-gray-700 font-medium text-sm group">
            <span>View details</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
