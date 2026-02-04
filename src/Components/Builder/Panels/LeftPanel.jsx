"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight, Plus, ChevronLeft } from "lucide-react";

const LeftPanel = ({
  selectedSection,
  setSelectedSection,
  selectedInstanceId,
  setSelectedInstanceId,
  sections,
  addSection,
  useHomeSections,
  getGroupedSections,
  isCollapsed,
  setIsCollapsed,
}) => {
  const [expandedCategories, setExpandedCategories] = useState({
    Navigation: true,
    Content: true,
  });

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const groupedSections = getGroupedSections();

  return (
    <>
      {/* Collapsed State - Thin Bar */}
      {isCollapsed ? (
        <div className="w-12 bg-white border-r border-gray-100 flex flex-col items-center py-4 shadow-sm">
          <button
            onClick={() => setIsCollapsed(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mb-4"
            title="Expand panel">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Vertical Text */}
          <div className="flex-1 flex items-center justify-center">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider transform -rotate-90 whitespace-nowrap">
              Sections
            </span>
          </div>
        </div>
      ) : (
        /* Expanded State - Full Panel */
        <div className="w-full bg-white border-r border-gray-100 flex flex-col shrink-0 shadow-sm">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex-1">
              <p className="text-gray-800 text-sm font-semibold uppercase tracking-wide">
                Add Sections
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Click + to add to page
              </p>
            </div>
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              title="Collapse panel">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3">
            {Object.entries(groupedSections).map(
              ([category, categorySections]) => (
                <div key={category} className="mb-4">
                  {/* Category Header */}
                  <div
                    onClick={() => toggleCategory(category)}
                    className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-2">
                      {expandedCategories[category] ? (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                      <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        {category}
                      </span>
                    </div>
                  </div>

                  {/* Category Sections */}
                  {expandedCategories[category] && (
                    <div className="ml-2 mt-2 space-y-2">
                      {categorySections.map((sec) => {
                        const isSelected = selectedSection === sec.id;
                        const instanceCount = sections.filter(
                          (s) => s.sectionId === sec.id,
                        ).length;

                        return (
                          <div
                            key={sec.id}
                            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer mb-2 transition-all duration-200 ${
                              isSelected
                                ? "bg-gradient-to-r from-blue-50 to-blue-25 border border-blue-200 shadow-sm"
                                : "bg-transparent border border-transparent hover:bg-gray-50"
                            }`}
                            onClick={() => setSelectedSection(sec.id)}>
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-lg text-base transition-all duration-200 ${
                                isSelected
                                  ? "bg-cyan-500 text-white shadow-sm"
                                  : "bg-gray-100 text-gray-600"
                              }`}>
                              {sec.icon}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div
                                className={`text-sm font-medium transition-colors duration-200 ${
                                  isSelected ? "text-cyan-600" : "text-gray-500"
                                }`}>
                                {sec.label}
                              </div>
                              {instanceCount > 0 && (
                                <span className="text-xs text-gray-400">
                                  {instanceCount} on page
                                </span>
                              )}
                            </div>

                            {/* Add Button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                addSection(sec.id);
                              }}
                              className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${
                                isSelected
                                  ? "bg-cyan-500 text-white hover:bg-cyan-600"
                                  : "bg-gray-200 text-gray-600 hover:bg-cyan-500 hover:text-white"
                              }`}>
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LeftPanel;
