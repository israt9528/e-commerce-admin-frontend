import { Target } from 'lucide-react'
import React from 'react'

const MinimalWhite = () => {
  return (

    <div className="bg-gradient-to-br from-gray-50 to-white py-24 px-8 text-center font-sans border-b border-gray-200">
      <Target className="w-12 h-12 text-gray-700 mx-auto mb-4" />
      <h1 className="text-gray-900 text-5xl font-extrabold mb-3">
        Hello, World.
      </h1>
      <p className="text-gray-500 text-base mx-auto mb-8 max-w-md">
        Simple. Clean. Effective. The page you have been waiting to build.
      </p>
      <button className="bg-gray-900 text-white border-none rounded-lg py-3.5 px-10 text-sm font-semibold cursor-pointer hover:bg-gray-800 transition-colors">
        Explore
      </button>
    </div>

  )
}

export default MinimalWhite