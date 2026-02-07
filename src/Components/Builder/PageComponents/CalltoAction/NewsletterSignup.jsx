import { Bell } from 'lucide-react'
import React from 'react'

const NewsletterSignup = () => {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 py-16 px-8 text-center font-sans">
      <div className="max-w-xl mx-auto">
        <Bell className="w-12 h-12 text-white mx-auto mb-6" />
        <h2 className="text-white text-2xl font-bold mb-3">
          Stay Updated
        </h2>
        <p className="text-white/90 text-base mb-8">
          Subscribe to our newsletter for the latest updates and tips.
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-none outline-none"
          />
          <button className="bg-white text-purple-600 border-none rounded-lg px-6 py-3 font-semibold cursor-pointer hover:shadow-lg transition-all">
            Subscribe
          </button>
        </div>
        <p className="text-white/70 text-xs mt-4">
          No spam ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}

export default NewsletterSignup