import { Award, Globe, Shield, TrendingUp, Zap } from 'lucide-react';
import React from 'react'

function ThreeColumnGrid() {
  const items = [
    {
      title: "Fast",
      desc: "Lightning speed built in.",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Secure",
      desc: "Enterprise-grade safety.",
      icon: <Shield className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Scalable",
      desc: "Grows with your needs.",
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Global",
      desc: "Worldwide coverage.",
      icon: <Globe className="w-6 h-6 text-purple-500" />,
    },
  ];
  return (
    <div className="bg-white py-16 px-8 font-sans">
      <div className="text-center mb-12">
        <Award className="w-12 h-12 text-teal-500 mx-auto mb-4" />
        <h2 className="text-gray-900 text-3xl font-bold mb-3">
          Why Choose Us
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Comprehensive features designed for modern businesses
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        {items.map((i) => (
          <div
            key={i.title}
            className="text-left p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-teal-300 transition-colors group">
            <div className="mb-4">{i.icon}</div>
            <h3 className="text-gray-800 text-lg font-semibold mb-2">
              {i.title}
            </h3>
            <p className="text-gray-500 text-sm">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThreeColumnGrid