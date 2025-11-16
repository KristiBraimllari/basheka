'use client'

import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'

interface TechnicalSpecsProps {
  specs: {
    machineCapabilities?: string
    materialThickness?: string
    tolerances?: string
  }
}

export default function TechnicalSpecs({ specs }: TechnicalSpecsProps) {
  const specItems = [
    { label: 'Machine Capabilities', value: specs.machineCapabilities },
    { label: 'Material Thickness', value: specs.materialThickness },
    { label: 'Tolerances', value: specs.tolerances },
  ].filter((item) => item.value)

  return (
    <section className="py-16 bg-steel-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 flex items-center">
                <FileText className="mr-3 text-steel-600" size={32} />
                Technical Specifications
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              {specItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-charcoal-100 last:border-0"
                >
                  <span className="text-charcoal-700 font-medium text-lg">
                    {item.label}:
                  </span>
                  <span className="text-charcoal-900 font-semibold text-lg">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/resources"
              className="inline-flex items-center space-x-2 bg-steel-600 text-white px-6 py-3 rounded-lg hover:bg-steel-700 transition-colors"
            >
              <Download size={20} />
              <span>Download Full Spec Sheet</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

