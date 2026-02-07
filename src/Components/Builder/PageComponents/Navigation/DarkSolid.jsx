import { Shield } from 'lucide-react'
import React from 'react'

const DarkSolid = () => {
  return (
    <nav className="bg-gray-900 py-3.5 px-8 flex items-center justify-between font-sans">
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-red-400" />
        <span className="font-bold text-lg text-white">SecureBrand</span>
      </div>
      <div className="flex gap-7">
        {["Home", "About", "Services", "Contact"].map((l) => (
          <span
            key={l}
            className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors">
            {l}
          </span>
        ))}
      </div>
      <button className="bg-red-500 text-white border-none rounded px-4 py-2 text-sm cursor-pointer hover:bg-red-600 transition-colors">
        Sign Up
      </button>
    </nav>
  )
}

export default DarkSolid