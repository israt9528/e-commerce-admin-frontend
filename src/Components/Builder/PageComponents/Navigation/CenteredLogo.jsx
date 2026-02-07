import { Crown } from 'lucide-react'
import React from 'react'

const CenteredLogo = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-8 flex flex-col items-center font-sans">
      <div className="flex items-center gap-2 mb-4">
        <Crown className="w-6 h-6 text-amber-500" />
        <span className="font-bold text-xl text-gray-900">
          PremiumBrand
        </span>
      </div>
      <div className="flex gap-8">
        {["Home", "Features", "Pricing", "Blog", "Contact"].map((l) => (
          <span
            key={l}
            className="text-sm text-gray-600 cursor-pointer hover:text-teal-500 transition-colors">
            {l}
          </span>
        ))}
      </div>
    </nav>
  )
}

export default CenteredLogo