'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Users, Calendar } from 'lucide-react'

const iconMap: Record<string, typeof Award> = {
  award: Award,
  shield: Shield,
  users: Users,
  calendar: Calendar,
}

interface TrustSignal {
  label: string
  value: string
  icon: string
}

interface TrustSignalsProps {
  trustSignals?: TrustSignal[]
  title?: string
  subtitle?: string
}

export default function TrustSignals({ 
  trustSignals = [
    { label: 'Certified Quality', value: 'ISO 9001', icon: 'award' },
    { label: 'Safety Standards', value: 'OSHA Compliant', icon: 'shield' },
    { label: 'Satisfied Clients', value: '500+', icon: 'users' },
    { label: 'Years of Experience', value: '30+', icon: 'calendar' },
  ],
  title = 'Trusted by Industry Leaders',
  subtitle = 'Our commitment to quality, safety, and excellence has earned the trust of clients across industries.',
}: TrustSignalsProps) {
  return (
    <section className="py-32 bg-apple-gray-50">
      <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-apple-title md:text-[56px] text-[40px] font-semibold text-apple-gray-700 mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-[21px] text-apple-gray-500 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustSignals.map((item, index) => {
            const Icon = iconMap[item.icon] || Award
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-apple-gray-50 rounded-full flex items-center justify-center">
                    <Icon className="text-apple-gray-700" size={32} />
                  </div>
                </div>
                <div className="text-4xl font-semibold text-apple-gray-700 mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-apple-gray-500">{item.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
