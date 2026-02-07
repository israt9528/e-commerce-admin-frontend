import { Zap } from 'lucide-react'
import React from 'react'

const FullBanner = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 py-16 px-8 text-center font-sans">
      <div className="max-w-3xl mx-auto">
        <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
        <h2 className="text-white text-3xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of teams already using our platform to build
          faster and smarter.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-cyan-400 text-gray-900 border-none rounded-lg py-3.5 px-10 text-base font-bold cursor-pointer hover:bg-cyan-300 transition-colors">
            Start Free Trial
          </button>
          <button className="bg-transparent text-white border border-gray-600 rounded-lg py-3.5 px-10 text-base cursor-pointer hover:border-gray-500 transition-colors">
            Schedule Demo
          </button>
        </div>
        <p className="text-gray-400 text-sm mt-6">
          No credit card required • 14-day free trial
        </p>
      </div>
    </div>
  )
}

export default FullBanner