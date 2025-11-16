'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function IntroNarrative() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
        <motion.div
          style={{ opacity, y }}
          className="text-center mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-apple-title md:text-[72px] text-[48px] font-semibold text-apple-gray-700 mb-8 tracking-tight leading-[1.05]"
          >
            Craftsmanship Meets Innovation
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            <p className="text-[21px] text-apple-gray-500 leading-relaxed">
              For over three decades, we've been transforming raw steel into monumental structures that define skylines and connect communities.
            </p>
            <p className="text-[21px] text-apple-gray-500 leading-relaxed">
              Today, we combine time-tested craftsmanship with cutting-edge technology—from advanced fiber laser cutting systems to sophisticated project management tools—ensuring every project meets the highest standards of excellence.
            </p>
            <p className="text-[21px] text-apple-gray-500 leading-relaxed">
              We don't just fabricate steel; we build partnerships, solve complex challenges, and deliver results that stand the test of time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { title: 'Precision', value: '±0.005"', desc: 'Tolerance' },
              { title: 'Experience', value: '30+', desc: 'Years' },
              { title: 'Quality', value: 'ISO 9001', desc: 'Certified' },
              { title: 'Innovation', value: 'State-of-the-art', desc: 'Equipment' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-apple-gray-50 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-semibold text-apple-gray-700 mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-apple-gray-500 mb-1">{item.title}</div>
                <div className="text-xs text-apple-gray-400">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
