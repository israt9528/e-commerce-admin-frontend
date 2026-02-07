"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

const RightPanel = ({
  selectedSection,
  selectedInstanceId,
  setSelectedInstanceId,
  sections,
  handleVariationSelect,
  useHomeSections,
  isCollapsed,
  setIsCollapsed,
}) => {
  const currentSection = useHomeSections[selectedSection];
  const currentVariations = currentSection?.variations || [];

  const sectionInstances = sections.filter(
    (s) => s.sectionId === selectedSection,
  );

  const currentInstance = sections.find(
    (s) => s.instanceId === selectedInstanceId,
  );

  return (
    <>
      {/* Collapsed State - Thin Bar */}
      {isCollapsed ? (
        <div className="w-12 bg-white border-l border-gray-200 flex flex-col items-center py-4 shadow-sm">
          <button
            onClick={() => setIsCollapsed(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mb-4"
            title="Expand panel"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 transform rotate-180" />
          </button>

          {/* Vertical Text */}
          <div className="flex-1 flex items-center justify-center">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider transform -rotate-90 whitespace-nowrap">
              Variations
            </span>
          </div>
        </div>
      ) : (
        /* Expanded State - Full Panel */
        <div className="w-full bg-white border-l border-gray-200 flex flex-col shrink-0 shadow-sm">
          {/* Header */}
          <div className="p-5 border-b border-gray-200 flex items-center justify-between">
            <div className="flex-1">
              <p className="text-gray-800 text-sm font-semibold flex items-center gap-2">
                  <span className="text-[#088178]">
                  {currentSection?.icon}
                </span>
                {currentSection?.label}
              </p>
            </div>
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                title="Collapse panel"
              >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Variations List */}
          <div className="flex-1 overflow-y-auto p-3">
            {sectionInstances.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <p className="text-sm text-center">
                  No instances of this section on the page
                </p>
                <p className="text-xs text-center mt-2">Click + to add one</p>
              </div>
            ) : (
                  <>
                {currentVariations.map((variation) => {
                  const isActive =
                    currentInstance?.variationId === variation.id;
                  const PreviewComp = variation.Component;

                  return (
                    <div
                      key={variation.id}
                      className={`rounded-xl mb-3 overflow-hidden cursor-pointer transition-all duration-200 ${isActive
                        ? "border-2 border-[#088178] bg-[#088178]/10 shadow-sm"
                        : "border border-gray-300 hover:border-gray-400 bg-white"
                        }`}
                      onClick={() => {
                        if (selectedInstanceId) {
                          handleVariationSelect(
                            selectedInstanceId,
                            variation.id,
                          );
                        }
                      }}
                    >
                      {/* Preview Container with Better Visibility */}
                      <div className="relative h-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                        {/* Scaled Preview */}
                        <div className="absolute inset-0 scale-[0.28] origin-top-left pointer-events-none">
                          <div className="w-[357%] h-[357%]">
                            <PreviewComp />
                          </div>
                        </div>

                        {/* Overlay for better separation */}
                        <div className="absolute inset-0 pointer-events-none border-b border-gray-200/50" />

                        {/* Optional: Subtle vignette effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Variation Footer */}
                      <div
                        className={`p-2.5 flex items-center justify-between border-t ${isActive
                          ? "border-[#088178]/20"
                          : "border-gray-200"
                          }`}
                      >
                        <span
                          className={`text-xs font-medium ${isActive
                            ? "font-semibold text-[#088178]"
                            : "text-gray-700"
                            }`}
                        >
                          {variation.name}
                        </span>

                        {/* Active Indicator */}
                        {isActive ? (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#088178]" />
                        ) : (
                          <svg
                            className="w-3 h-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>


        </div>
      )}
    </>
  );
};

export default RightPanel;