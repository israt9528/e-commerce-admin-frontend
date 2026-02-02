'use client';
import React, { useState } from 'react';

const VariantsPanel = () => {
  const [activeTab, setActiveTab] = useState('modern');

  const variants = [
    {
      id: 'modern',
      name: 'Modern',
      color: 'bg-gradient-to-r from-blue-500 to-cyan-400',
      preview: (
        <div className="bg-gray-900 text-white p-3 rounded">
          <div className="flex justify-between items-center">
            <div className="font-bold">Logo</div>
            <div className="flex space-x-4 text-sm">
              <span>Home</span>
              <span>About</span>
              <span>Contact</span>
            </div>
            <button className="bg-blue-500 px-3 py-1 rounded text-sm">Sign Up</button>
          </div>
        </div>
      )
    },
    {
      id: 'minimal',
      name: 'Minimal',
      color: 'bg-gradient-to-r from-gray-100 to-white',
      preview: (
        <div className="bg-white border border-gray-200 p-3 rounded">
          <div className="flex justify-between items-center">
            <div className="font-medium text-gray-800">Brand</div>
            <div className="flex space-x-4 text-gray-600 text-sm">
              <span>Products</span>
              <span>Pricing</span>
              <span>Blog</span>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      )
    },
    {
      id: 'bold',
      name: 'Bold',
      color: 'bg-gradient-to-r from-purple-600 to-pink-500',
      preview: (
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">SITE</div>
            <div className="flex space-x-6 font-medium">
              <span>Explore</span>
              <span>Features</span>
              <span>Pricing</span>
            </div>
            <button className="bg-white text-purple-700 px-4 py-1 rounded-full font-bold text-sm">
              Try Now
            </button>
          </div>
        </div>
      )
    }
  ];

  const activeVariant = variants.find(v => v.id === activeTab);

  return (
    <div className="flex h-full border-l border-gray-200">
      {/* Vertical Tabs */}
      <div className="w-full bg-white border-r border-gray-200">
        <div className="p-[24px] border-b border-gray-200">
          <h3 className="font-bold text-gray-800">Coponents Varients</h3>
        </div>

        <div className="p-2">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setActiveTab(variant.id)}
              className={`
                w-full flex items-center space-x-3 p-3 rounded-lg mb-2
                transition-all duration-200
                ${activeTab === variant.id
                  ? 'bg-blue-50 text-blue-600 border border-blue-200'
                  : 'text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              <div className={`w-3 h-3 rounded-full ${variant.color.split(' ')[0]}`}></div>
              <span className="font-medium">{variant.name}</span>
              {activeTab === variant.id && (
                <div className="ml-auto">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariantsPanel;