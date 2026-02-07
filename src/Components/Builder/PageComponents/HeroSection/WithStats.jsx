import { Clock, Star, TrendingUp, Users } from 'lucide-react'
import React from 'react'

const WithStats = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-white text-4xl font-bold mb-4">
              Data-Driven Results
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Analytics platform that delivers real-time insights for
              growing businesses.
            </p>
            <button className="bg-white text-blue-600 border-none rounded-lg py-3.5 px-9 text-base font-semibold cursor-pointer hover:shadow-lg transition-all">
              Start Free Trial
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-6">
            {[
              {
                label: "Active Users",
                value: "10K+",
                icon: <Users className="w-5 h-5" />,
              },
              {
                label: "Growth",
                value: "48%",
                icon: <TrendingUp className="w-5 h-5" />,
              },
              {
                label: "Uptime",
                value: "99.9%",
                icon: <Clock className="w-5 h-5" />,
              },
              {
                label: "Satisfaction",
                value: "4.9",
                icon: <Star className="w-5 h-5" />,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-2 text-white/80 mb-1">
                  {stat.icon}
                  <span className="text-xs">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithStats