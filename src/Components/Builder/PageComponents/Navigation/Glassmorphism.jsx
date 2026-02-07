import { Globe } from 'lucide-react'
import React from 'react'

const Glassmorphism = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-700 to-emerald-800 backdrop-blur-md border border-teal-500 py-3.5 px-8 flex items-center justify-between font-sans">
      <div className="flex items-center gap-2">
        <Globe className="w-5 h-5 text-teal-200" />
        <span className="font-bold text-lg text-teal-50">
          GradientBrand
        </span>
      </div>
      <div className="flex gap-7">
        {["Home", "About", "Services", "Contact"].map((l) => (
          <span
            key={l}
            className="text-sm text-teal-300 cursor-pointer hover:text-teal-100 transition-colors">
            {l}
          </span>
        ))}
      </div>
      <button className="bg-teal-600 text-teal-50 border border-teal-400 rounded px-4 py-2 text-sm cursor-pointer hover:bg-teal-500 transition-colors">
        Login
      </button>
    </nav>
  )
}

export default Glassmorphism