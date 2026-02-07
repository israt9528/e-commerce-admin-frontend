import { Globe, Play, TrendingUp, Zap } from 'lucide-react'
import React from 'react'

const SplitLayout = () => {
  return (
    <div className="flex bg-gray-900 font-sans min-h-[400px]">
      <div className="flex-1 py-16 px-12 flex flex-col justify-center">
        <TrendingUp className="w-8 h-8 text-cyan-400 mb-3" />
        <h1 className="text-gray-100 text-3xl font-bold mb-3.5 leading-tight">
          The Future
          <br />
          Starts Here
        </h1>
        <p className="text-gray-400 text-sm mb-6 max-w-sm">
          Innovative solutions for modern teams that need speed and
          reliability.
        </p>
        <div className="flex gap-3">
          <button className="bg-cyan-400 text-gray-900 border-none rounded-lg py-3 px-7 text-sm font-semibold cursor-pointer hover:bg-cyan-300 transition-colors">
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Learn More
            </div>
          </button>
          <button className="bg-transparent text-gray-100 border border-gray-700 rounded-lg py-3 px-7 text-sm cursor-pointer hover:border-gray-600 transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
        <div className="relative">
          <div className="w-44 h-44 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 opacity-60" />
          <Globe className="w-16 h-16 text-white absolute inset-0 m-auto" />
        </div>
      </div>
    </div>
  )
}

export default SplitLayout