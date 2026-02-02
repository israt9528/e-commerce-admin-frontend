'use client'
import React, { useState } from "react";

const SelectionPanel = () => {
  const sections = [
    { id: "hero", label: "Hero Section", color: "border-l-blue-500", bg: "bg-blue-50" },
    { id: "features", label: "Features", color: "border-l-purple-500", bg: "bg-purple-50" },
    { id: "banner", label: "Banner", color: "border-l-amber-500", bg: "bg-amber-50" },
    { id: "content", label: "Content", color: "border-l-emerald-500", bg: "bg-emerald-50" },
    { id: "testimonials", label: "Testimonials", color: "border-l-pink-500", bg: "bg-pink-50" },
    { id: "products", label: "Products", color: "border-l-indigo-500", bg: "bg-indigo-50" },
  ];

  const [selected, setSelected] = useState(sections[0]);

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-full flex flex-col">
      {/* Header */}
      <div className="p-[22px] border-b border-gray-100">
        <h3 className="font-bold text-gray-800 text-lg">Page Sections</h3>

      </div>

      {/* Tabs */}
      <div className="p-3">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => setSelected(section)}
            className={`mb-2 p-3 rounded-lg cursor-pointer transition-all duration-200 ${selected.id === section.id
              ? `${section.bg} ${section.color} border-l-4 shadow-sm transform scale-[1.02]`
              : "hover:bg-gray-50"
              }`}
          >
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-3 ${selected.id === section.id
                ? section.color.replace("border-l-", "bg-")
                : "bg-gray-300"
                }`}></div>
              <span className={`font-medium ${selected.id === section.id ? "text-gray-900" : "text-gray-700"
                }`}>
                {section.label}
              </span>

              {selected.id === section.id && (
                <div className="ml-auto">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default SelectionPanel;