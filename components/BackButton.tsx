'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

interface BackButtonProps {
  href?: string
  label?: string
  variant?: 'light' | 'dark'
}

export default function BackButton({ href, label = 'Back', variant = 'light' }: BackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  const textColor = variant === 'dark' 
    ? 'text-white/80 hover:text-white' 
    : 'text-apple-gray-500 hover:text-apple-gray-700'

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      onClick={handleClick}
      className={`inline-flex items-center space-x-2 ${textColor} transition-colors group`}
    >
      <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
      <span className="text-sm font-medium">{label}</span>
    </motion.button>
  )
}

