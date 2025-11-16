'use client'

import { useState } from 'react'
import { Calculator } from 'lucide-react'

export default function WeightCalculator() {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [thickness, setThickness] = useState('')
  const [density, setDensity] = useState('7850') // Steel density in kg/m³
  const [result, setResult] = useState<number | null>(null)

  const calculateWeight = () => {
    const l = parseFloat(length)
    const w = parseFloat(width)
    const t = parseFloat(thickness)
    const d = parseFloat(density)

    if (l > 0 && w > 0 && t > 0 && d > 0) {
      // Convert to meters and calculate volume, then weight
      const volume = (l / 1000) * (w / 1000) * (t / 1000) // Convert mm to m
      const weight = volume * d
      setResult(weight)
    } else {
      setResult(null)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-charcoal-100">
      <div className="flex items-center mb-6">
        <Calculator className="text-steel-600 mr-3" size={32} />
        <h3 className="font-serif text-2xl font-bold text-charcoal-900">
          Steel Weight Calculator
        </h3>
      </div>
      <p className="text-charcoal-600 mb-6">
        Calculate the weight of steel plates based on dimensions and material density.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Length (mm)
          </label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
            placeholder="Enter length"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Width (mm)
          </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
            placeholder="Enter width"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Thickness (mm)
          </label>
          <input
            type="number"
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
            className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
            placeholder="Enter thickness"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Density (kg/m³)
          </label>
          <input
            type="number"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
            className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-steel-500 focus:border-steel-500"
            placeholder="7850 (default for steel)"
          />
        </div>
        <button
          onClick={calculateWeight}
          className="w-full bg-steel-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-steel-700 transition-colors"
        >
          Calculate Weight
        </button>

        {result !== null && (
          <div className="mt-6 p-4 bg-steel-50 rounded-lg">
            <div className="text-sm text-charcoal-600 mb-1">Estimated Weight</div>
            <div className="text-3xl font-bold text-steel-600">
              {result.toFixed(2)} kg
            </div>
            <div className="text-sm text-charcoal-600 mt-1">
              ({((result * 2.20462) / 1000).toFixed(2)} tons)
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

