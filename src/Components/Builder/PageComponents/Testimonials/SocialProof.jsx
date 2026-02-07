import { Facebook, Heart, Linkedin, MessageCircle, Twitter } from 'lucide-react'
import React from 'react'

const SocialProof = () => {
  return (
    <div className="bg-white py-16 px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-gray-900 text-2xl font-bold mb-2">
              Loved by the Community
            </h2>
            <p className="text-gray-500">Real feedback from real users</p>
          </div>
          <div className="flex items-center gap-4">
            <Twitter className="w-5 h-5 text-blue-400" />
            <Linkedin className="w-5 h-5 text-blue-600" />
            <Facebook className="w-5 h-5 text-blue-800" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              platform: "Twitter",
              handle: "@designer",
              text: "Best tool for rapid prototyping!",
              likes: "2.4K",
            },
            {
              platform: "LinkedIn",
              handle: "Product Lead",
              text: "Our team's productivity doubled",
              likes: "856",
            },
          ].map((item) => (
            <div
              key={item.platform}
              className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {item.platform}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.handle}
                    </div>
                  </div>
                </div>
                <Heart className="w-4 h-4 text-red-500" />
              </div>
              <p className="text-gray-600 text-sm mb-3">{item.text}</p>
              <div className="text-xs text-gray-400">
                {item.likes} likes
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialProof