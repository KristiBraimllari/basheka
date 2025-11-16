'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CustomDropdownProps {
  label: string
  value: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
  placeholder?: string
}

export default function CustomDropdown({
  label,
  value,
  options,
  onChange,
  placeholder = 'Select an option',
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const selectedOption = options.find((opt) => opt.value === value) || options[0]

  return (
    <div className="flex-1 min-w-[200px]" ref={dropdownRef}>
      <label className="block text-xs font-medium text-apple-gray-500 uppercase tracking-wider mb-2 px-1">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-5 py-3.5 bg-white/90 backdrop-blur-sm border border-apple-gray-200 rounded-full text-sm font-medium text-apple-gray-700 focus:ring-2 focus:ring-apple-gray-700 focus:border-apple-gray-700 focus:outline-none transition-all hover:bg-white hover:border-apple-gray-300 shadow-sm flex items-center justify-between cursor-pointer"
        >
          <span>{selectedOption?.label || placeholder}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} className="text-apple-gray-500" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
              />

              {/* Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="absolute z-20 w-full mt-2 bg-white/95 backdrop-blur-xl border border-apple-gray-200 rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="py-2 max-h-64 overflow-y-auto">
                  {options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        onChange(option.value)
                        setIsOpen(false)
                      }}
                      className={`w-full px-5 py-3 text-left text-sm font-medium transition-colors ${
                        value === option.value
                          ? 'bg-apple-gray-50 text-apple-gray-700'
                          : 'text-apple-gray-700 hover:bg-apple-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.label}</span>
                        {value === option.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-1.5 h-1.5 bg-apple-gray-700 rounded-full"
                          />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

