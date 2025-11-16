'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { HeroSection as HeroSectionType } from '@/lib/cms-types'

interface HeroSectionProps {
  data: HeroSectionType
}

export default function HeroSection({ data }: HeroSectionProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background with Parallax */}
      {data.videoUrl && (
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[120%] object-cover"
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src={data.videoUrl} type="video/mp4" />
          </video>
          {/* Fallback gradient overlay */}
          {data.imageUrl && !isVideoLoaded && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${data.imageUrl})` }}
            />
          )}
        </motion.div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-[1024px] mx-auto px-6 lg:px-12 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="text-apple-hero md:text-[120px] text-[64px] font-semibold text-white mb-6 tracking-tight leading-[1.05]">
            {data.title}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-apple-subtitle md:text-[32px] text-[24px] text-white/90 mb-12 font-light tracking-tight"
          >
            {data.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href={data.ctaPrimary.link}
              className="group relative px-8 py-3.5 bg-white text-apple-gray-700 rounded-full text-lg font-medium hover:bg-apple-gray-100 transition-all duration-300 flex items-center space-x-2 overflow-hidden"
            >
              <span className="relative z-10">{data.ctaPrimary.label}</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white to-apple-gray-50"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            {data.ctaSecondary && (
              <Link
                href={data.ctaSecondary.link}
                className="px-8 py-3.5 text-white text-lg font-medium hover:text-white/80 transition-colors underline decoration-2 underline-offset-4"
              >
                {data.ctaSecondary.label}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
