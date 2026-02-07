import { Briefcase, Code, LucideBarChart3, Star, User } from 'lucide-react';
import React from 'react'

const CardRaw = () => {
  const items = [
    {
      name: "Sarah K.",
      role: "Product Manager",
      company: "TechCorp",
      text: "Absolutely game-changing. Our launch time dropped by 60%.",
      rating: 5,
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      name: "James L.",
      role: "CTO",
      company: "StartupXYZ",
      text: "The cleanest builder I've ever used. No bloat, just results.",
      rating: 5,
      icon: <Code className="w-4 h-4" />,
    },
    {
      name: "Maria S.",
      role: "Marketing Director",
      company: "BrandCo",
      text: "Our conversion rates improved dramatically. Highly recommended!",
      rating: 5,
      icon: <LucideBarChart3 className="w-4 h-4" />,
    },
  ];
  return (
    <div className="bg-gray-50 py-16 px-8 font-sans">
      <div className="text-center mb-12">
        <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
        <h2 className="text-gray-900 text-2xl font-bold mb-3">
          What People Say
        </h2>
        <p className="text-gray-500 text-base max-w-lg mx-auto">
          Trusted by thousands of teams worldwide
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm italic mb-6">
              {t.text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <User className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-800 font-semibold text-sm">
                    {t.name}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400">
                    {t.icon}
                    <span className="text-xs">{t.role}</span>
                  </div>
                </div>
                <span className="text-gray-400 text-xs">
                  {t.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardRaw