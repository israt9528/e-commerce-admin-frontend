import { Quote } from 'lucide-react'
import React from 'react'

const QuoteSlider = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black py-20 px-8 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="w-12 h-12 text-gray-400 mx-auto mb-8" />
        <h2 className="text-white text-2xl font-bold mb-6 italic">
          This platform transformed how we build products. The speed and
          quality are unmatched.
        </h2>
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500" />
          <div>
            <div className="text-white font-semibold">Alex Johnson</div>
            <div className="text-gray-400 text-sm">CEO, InnovateCo</div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full ${dot === 1 ? "bg-white" : "bg-gray-700"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuoteSlider