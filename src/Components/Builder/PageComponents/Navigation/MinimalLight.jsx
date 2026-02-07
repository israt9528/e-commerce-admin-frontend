'use client'
import { Sparkles } from 'lucide-react'
import React from 'react'

const MinimalLight = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-8 flex items-center justify-between font-sans">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-teal-500" />
        <span className="font-bold text-lg text-gray-900">Brand</span>
      </div>
      <div className="flex gap-7">
        {["Home", "About", "Services", "Contact"].map((l) => (
          <span
            key={l}
            className="text-sm text-gray-600 cursor-pointer hover:text-teal-500 transition-colors">
            {l}
          </span>
        ))}
      </div>
      <button className="bg-gray-900 text-white border-none rounded px-4 py-2 text-sm cursor-pointer hover:bg-gray-800 transition-colors">
        Get Started
      </button>
    </nav>
  )
}

export default MinimalLight