import { Sparkles } from 'lucide-react'
import React from 'react'

const SimpleDark = () => {
  return (
    <footer className="bg-gray-900 py-8 px-8 text-center font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-teal-400" />
          <span className="text-white font-bold text-lg">Brand</span>
        </div>
        <p className="text-gray-400 text-xs mb-4">
          © 2025 Brand. All rights reserved.
        </p>
        <div className="flex gap-6 justify-center text-gray-500 text-xs">
          <span className="cursor-pointer hover:text-white transition-colors">
            Privacy
          </span>
          <span className="cursor-pointer hover:text-white transition-colors">
            Terms
          </span>
          <span className="cursor-pointer hover:text-white transition-colors">
            Cookies
          </span>
        </div>
      </div>
    </footer>
  )
}

export default SimpleDark