'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData {
  // Step 1: Basic Info
  name: string
  email: string
  phone: string
  company: string

  // Step 2: Project Details
  projectType: string
  serviceNeeded: string
  timeline: string
  budget: string

  // Step 3: Specifications
  dimensions: string
  material: string
  quantity: string
  additionalNotes: string
}

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    serviceNeeded: '',
    timeline: '',
    budget: '',
    dimensions: '',
    material: '',
    quantity: '',
    additionalNotes: '',
  })

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend/CRM
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-lg p-12 text-center"
      >
        <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
        <h2 className="font-serif text-3xl font-bold text-charcoal-900 mb-4">
          Thank You!
        </h2>
        <p className="text-lg text-charcoal-600 mb-6">
          We've received your quote request. Our team will review your project details and get back to you within 24 hours.
        </p>
        <a
          href="/"
          className="inline-block bg-steel-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-steel-700 transition-colors"
        >
          Return to Home
        </a>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  currentStep >= step
                    ? 'bg-steel-600 text-white'
                    : 'bg-charcoal-200 text-charcoal-600'
                }`}
              >
                {currentStep > step ? <CheckCircle size={20} /> : step}
              </div>
              {step < 3 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    currentStep > step ? 'bg-steel-600' : 'bg-charcoal-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-charcoal-600">
          <span>Basic Info</span>
          <span>Project Details</span>
          <span>Specifications</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl font-bold text-charcoal-900 mb-6">
              Contact Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateFormData('company', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Project Details */}
        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl font-bold text-charcoal-900 mb-6">
              Project Details
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Project Type *
                </label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => updateFormData('projectType', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
                >
                  <option value="">Select project type</option>
                  <option value="structural">Structural Fabrication</option>
                  <option value="architectural">Architectural Elements</option>
                  <option value="industrial">Industrial Equipment</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Service Needed *
                </label>
                <select
                  required
                  value={formData.serviceNeeded}
                  onChange={(e) => updateFormData('serviceNeeded', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
                >
                  <option value="">Select service</option>
                  <option value="laser-cutting">Laser Cutting</option>
                  <option value="fabrication">Structural Fabrication</option>
                  <option value="finishing">Metal Finishing</option>
                  <option value="full-service">Full Project Management</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Timeline *
                  </label>
                  <select
                    required
                    value={formData.timeline}
                    onChange={(e) => updateFormData('timeline', e.target.value)}
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="standard">Standard (3-4 weeks)</option>
                    <option value="flexible">Flexible (1-3 months)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Specifications */}
        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl font-bold text-charcoal-900 mb-6">
              Project Specifications
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Dimensions
                </label>
                <input
                  type="text"
                  value={formData.dimensions}
                  onChange={(e) => updateFormData('dimensions', e.target.value)}
                  placeholder="e.g., 10ft x 5ft x 2ft"
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Material Type
                  </label>
                  <input
                    type="text"
                    value={formData.material}
                    onChange={(e) => updateFormData('material', e.target.value)}
                    placeholder="e.g., A36 Steel, Stainless Steel"
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Quantity
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => updateFormData('quantity', e.target.value)}
                    placeholder="e.g., 50 units"
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                  rows={5}
                  placeholder="Tell us more about your project requirements..."
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t border-charcoal-200">
        <button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
            currentStep === 1
              ? 'bg-charcoal-100 text-charcoal-400 cursor-not-allowed'
              : 'bg-charcoal-200 text-charcoal-700 hover:bg-charcoal-300'
          }`}
        >
          <ArrowLeft size={20} />
          <span>Previous</span>
        </button>
        {currentStep < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="flex items-center space-x-2 bg-steel-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-steel-700 transition-colors"
          >
            <span>Next</span>
            <ArrowRight size={20} />
          </button>
        ) : (
          <button
            type="submit"
            className="flex items-center space-x-2 bg-copper-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-copper-700 transition-colors"
          >
            <span>Submit Request</span>
            <ArrowRight size={20} />
          </button>
        )}
      </div>
    </form>
  )
}

