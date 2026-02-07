import { Globe } from 'lucide-react'
import React from 'react'

const ModernWithLogo = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black py-12 px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-teal-400" />
              <span className="text-white font-bold text-xl">
                GlobalBrand
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Building the future of web development, one component at a
              time.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {["Solutions", "Support", "Legal"].map((col) => (
              <div key={col}>
                <h5 className="text-white text-sm font-semibold mb-4">
                  {col}
                </h5>
                {["Pricing", "Documentation", "Contact"].map((link) => (
                  <div
                    key={link}
                    className="text-gray-400 text-sm mb-2 cursor-pointer hover:text-white transition-colors">
                    {link}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
          Designed with ❤️ for developers worldwide
        </div>
      </div>
    </footer>
  )
}

export default ModernWithLogo