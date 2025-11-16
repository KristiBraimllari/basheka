'use client'

import { motion } from 'framer-motion'
import { Download, FileText, BookOpen, FileCode, Newspaper } from 'lucide-react'
import type { Resource } from '@/lib/cms-types'

interface ResourceCardProps {
  resource: Resource
  index: number
}

const iconMap = {
  brochure: FileText,
  guide: BookOpen,
  'spec-sheet': FileText,
  'cad-file': FileCode,
  article: Newspaper,
}

export default function ResourceCard({ resource, index }: ResourceCardProps) {
  const Icon = iconMap[resource.type] || FileText

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-charcoal-100"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-steel-100 rounded-lg flex items-center justify-center">
            <Icon className="text-steel-600" size={24} />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-serif text-xl font-bold text-charcoal-900">
              {resource.title}
            </h3>
            <span className="text-xs bg-charcoal-100 text-charcoal-700 px-2 py-1 rounded ml-2">
              {resource.type.replace('-', ' ')}
            </span>
          </div>
          <p className="text-charcoal-600 mb-4">{resource.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {resource.tags.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-steel-50 text-steel-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            {resource.downloadUrl && (
              <a
                href={resource.downloadUrl}
                download
                className="inline-flex items-center space-x-2 text-steel-600 hover:text-steel-700 font-semibold transition-colors"
              >
                <Download size={18} />
                <span>Download</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

