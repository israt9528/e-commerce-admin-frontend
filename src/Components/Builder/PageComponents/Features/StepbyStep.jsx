import { Edit, Rocket, TrendingUp, User } from 'lucide-react'
import React from 'react'

function StepbyStep() {



  return (<div className="bg-white py-16 px-8 font-sans border-t border-gray-200">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-center text-gray-900 text-2xl font-bold mb-12">
        How It Works
      </h2>
      <div className="flex justify-between relative">
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />
        {[
          {
            step: 1,
            title: "Sign Up",
            desc: "Create your account",
            icon: <User className="w-6 h-6" />,
          },
          {
            step: 2,
            title: "Customize",
            desc: "Design your pages",
            icon: <Edit className="w-6 h-6" />,
          },
          {
            step: 3,
            title: "Launch",
            desc: "Go live instantly",
            icon: <Rocket className="w-6 h-6" />,
          },
          {
            step: 4,
            title: "Grow",
            desc: "Scale your business",
            icon: <TrendingUp className="w-6 h-6" />,
          },
        ].map((step) => (
          <div
            key={step.step}
            className="flex flex-col items-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold mb-3">
              {step.icon}
            </div>
            <h3 className="text-gray-800 font-semibold mb-1">
              {step.title}
            </h3>
            <p className="text-gray-500 text-xs text-center">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>)

}

export default StepbyStep