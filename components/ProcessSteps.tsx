'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
  title: string
  description: string
  imageUrl?: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            A step-by-step approach ensuring quality and precision at every stage
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-steel-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-charcoal-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-charcoal-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="flex-1">
                {step.imageUrl ? (
                  <div
                    className="w-full h-64 md:h-80 rounded-xl bg-cover bg-center shadow-lg"
                    style={{ backgroundImage: `url(${step.imageUrl})` }}
                  />
                ) : (
                  <div className="w-full h-64 md:h-80 rounded-xl bg-steel-200 flex items-center justify-center">
                    <span className="text-steel-600 text-lg">Process Image</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

