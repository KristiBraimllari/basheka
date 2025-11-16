'use client'

import { motion } from 'framer-motion'
import type { TimelineEvent } from '@/lib/cms-types'

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-apple-gray-200 hidden md:block" />

      <div className="space-y-16">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex items-start space-x-8 md:space-x-12"
          >
            {/* Year Badge */}
            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 md:w-20 md:h-20 bg-apple-gray-700 rounded-full flex items-center justify-center text-white font-semibold text-lg md:text-xl shadow-lg relative z-10"
              >
                {event.year}
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-2">
              <h3 className="text-3xl md:text-4xl font-semibold text-apple-gray-700 mb-3 tracking-tight">
                {event.title}
              </h3>
              <p className="text-[19px] text-apple-gray-500 leading-relaxed">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
