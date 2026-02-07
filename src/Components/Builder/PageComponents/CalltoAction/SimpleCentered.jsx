import { Mail, Send } from 'lucide-react'
import React from 'react'

const SimpleCentered = () => {
  return (
    <div className="bg-white py-16 px-8 text-center font-sans border-t border-gray-200">
      <Mail className="w-12 h-12 text-gray-700 mx-auto mb-6" />
      <h2 className="text-gray-900 text-2xl font-bold mb-3">
        Let us work together
      </h2>
      <p className="text-gray-500 text-base mb-8 max-w-md mx-auto">
        Get in touch and we will create something amazing for your
        business.
      </p>
      <button className="bg-gray-900 text-white border-none rounded-lg py-3 px-10 text-sm font-semibold cursor-pointer hover:bg-gray-800 transition-colors">
        <div className="flex items-center gap-2">
          Contact Us
          <Send className="w-4 h-4" />
        </div>
      </button>
    </div>
  )
}

export default SimpleCentered