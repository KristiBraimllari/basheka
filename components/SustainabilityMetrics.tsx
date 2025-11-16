'use client'

import { motion } from 'framer-motion'
import { Recycle, Leaf, Zap } from 'lucide-react'
import type { SustainabilityMetric } from '@/lib/cms-types'

interface SustainabilityMetricsProps {
  metrics: SustainabilityMetric[]
}

const iconMap = {
  'Recycled Material': Recycle,
  'Carbon Reduction': Leaf,
  'Renewable Energy': Zap,
}

export default function SustainabilityMetrics({ metrics }: SustainabilityMetricsProps) {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-apple-title md:text-[72px] text-[48px] font-semibold text-apple-gray-700 mb-6 tracking-tight leading-[1.05]">
            Our Commitment to Sustainability
          </h2>
          <p className="text-[21px] text-apple-gray-500 max-w-2xl mx-auto">
            We&apos;re dedicated to environmental responsibility while maintaining the highest standards of quality and performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = iconMap[metric.label as keyof typeof iconMap] || Leaf
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-apple-gray-50 rounded-3xl p-10 text-center"
              >
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Icon className="text-apple-gray-700" size={40} />
                  </div>
                </div>
                <div className="text-6xl font-semibold text-apple-gray-700 mb-2 tracking-tight">
                  {metric.value}
                  <span className="text-3xl text-apple-gray-500 ml-1">{metric.unit}</span>
                </div>
                <h3 className="text-xl font-semibold text-apple-gray-700 mb-2">
                  {metric.label}
                </h3>
                {metric.description && (
                  <p className="text-apple-gray-500 text-sm">{metric.description}</p>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
