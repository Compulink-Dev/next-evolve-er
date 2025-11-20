import React from 'react'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface PricingCardProps {
  title: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
}

export function PricingCard({ title, price, period, features, highlighted }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
        highlighted
          ? 'bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-purple-400 shadow-xl shadow-purple-400/20'
          : 'bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase">
            Best Value
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3
          className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}
        >
          {title}
        </h3>
        <p className={`text-sm ${highlighted ? 'text-blue-200' : 'text-gray-600'}`}>{period}</p>
      </div>

      <div className="text-center mb-8">
        <span
          className={`text-5xl font-bold ${highlighted ? 'text-purple-300' : 'text-blue-900'}`}
        >
          ${price}
        </span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check
              className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${highlighted ? 'text-purple-300' : 'text-green-500'}`}
            />
            <span className={highlighted ? 'text-white' : 'text-gray-700'}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full ${
          highlighted
            ? 'bg-purple-500 hover:bg-purple-600 text-white'
            : 'bg-blue-900 hover:bg-blue-800 text-white'
        }`}
      >
        Buy Ticket
      </Button>
    </div>
  )
}
