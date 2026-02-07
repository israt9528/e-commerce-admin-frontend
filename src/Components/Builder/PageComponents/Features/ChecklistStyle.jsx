import { Check, CheckSquare } from 'lucide-react';
import React from 'react'

const ChecklistStyle = () => {
  const items = [
    "Unlimited projects & pages",
    "Real-time collaboration tools",
    "Custom domain support",
    "Advanced analytics dashboard",
    "24/7 priority support",
    "Monthly performance reports",
  ];
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black py-16 px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <CheckSquare className="w-8 h-8 text-cyan-400" />
          <h2 className="text-gray-100 text-2xl font-bold">
            Everything You Need
          </h2>
        </div>
        <p className="text-gray-400 text-sm mb-10 max-w-2xl">
          A complete toolkit in one place for your success.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3.5 py-3.5">
              <Check className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>)
}

export default ChecklistStyle