import React from 'react'
import { Twitter, Linkedin, Github } from 'lucide-react';

const FourColumn = () => {
  return (
    <footer className="bg-gray-900 pt-12 px-8 pb-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-4 gap-8 mb-12">
          {["Product", "Company", "Resources", "Connect"].map((col) => (
            <div key={col}>
              <h4 className="text-gray-100 text-sm font-semibold mb-4 uppercase tracking-wider">
                {col}
              </h4>
              {["Link one", "Link two", "Link three", "Link four"].map(
                (l) => (
                  <p
                    key={l}
                    className="text-gray-400 text-xs mb-3 cursor-pointer hover:text-white transition-colors">
                    {l}
                  </p>
                ),
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6 flex items-center justify-between">
          <p className="text-gray-500 text-xs">
            © 2025 Brand Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Twitter className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <Github className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FourColumn