'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Service } from '@/lib/cms-types'

interface ServiceCardProps {
  service: Service
  index: number
  variant?: 'default' | 'compact'
}

export default function ServiceCard({ service, index, variant = 'default' }: ServiceCardProps) {
  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl p-6 border border-apple-gray-200 hover:border-apple-gray-300 transition-colors"
      >
        <h3 className="text-2xl font-semibold text-apple-gray-700 mb-3 tracking-tight">
          {service.title}
        </h3>
        <p className="text-apple-gray-500 mb-4 leading-relaxed">
          {service.shortDescription}
        </p>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center space-x-2 text-apple-gray-700 font-medium group"
        >
          <span>Learn more</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer"
    >
      <div className="relative h-[400px] overflow-hidden bg-apple-gray-50">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${service.imageUrl})`,
              backgroundColor: '#f5f5f7',
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-8">
        <motion.h3
          animate={{ y: 0 }}
          className="text-3xl font-semibold text-apple-gray-700 mb-3 tracking-tight"
        >
          {service.title}
        </motion.h3>
        <p className="text-apple-gray-400 text-lg mb-6 leading-relaxed">
          {service.shortDescription}
        </p>
        
        <div className="space-y-2 mb-8">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center text-apple-gray-500 text-sm"
            >
              <span className="w-1.5 h-1.5 bg-apple-gray-700 rounded-full mr-3" />
              {feature}
            </div>
          ))}
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center space-x-2 text-apple-gray-700 font-medium group-hover:text-apple-gray-700 transition-colors"
        >
          <span>Learn more</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  )
}
