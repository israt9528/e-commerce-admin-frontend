"use client";
import React from "react";

const RightPanel = ({
  selectedSection,
  selectedInstanceId,
  setSelectedInstanceId,
  sections,
  handleVariationSelect,
  useHomeSections,
}) => {
  const colors = {
    primary: "#088178",
    primaryLight: "rgba(8, 129, 120, 0.1)",
    secondary: "#cee6e4",
  };

  const currentSection = useHomeSections[selectedSection];
  const currentVariations = currentSection?.variations || [];

  // Get all instances of the selected section
  const sectionInstances = sections.filter(
    (s) => s.sectionId === selectedSection,
  );

  // Get the currently selected instance
  const currentInstance = sections.find(
    (s) => s.instanceId === selectedInstanceId,
  );

  return (
    <div className="w-full bg-white border-l border-gray-200 flex flex-col shrink-0 shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <p className="text-gray-800 text-sm font-semibold flex items-center gap-2">
          <span style={{ color: colors.primary }}>{currentSection?.icon}</span>
          {currentSection?.label}
        </p>
        <p className="text-gray-500 text-xs mt-1">
          {currentVariations.length} variation
          {currentVariations.length !== 1 ? "s" : ""} available
        </p>
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
              const isActive = currentInstance?.variationId === variation.id;
              const PreviewComp = variation.Component;

              return (
                <div
                  key={variation.id}
                  className={`rounded-xl mb-3 overflow-hidden cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "border-2 shadow-sm"
                      : "border border-gray-300 hover:border-gray-400"
                  }`}
                  style={{
                    borderColor: isActive ? colors.primary : undefined,
                    backgroundColor: isActive ? colors.primaryLight : "white",
                  }}
                  onClick={() => {
                    // Only update the currently selected instance
                    if (selectedInstanceId) {
                      handleVariationSelect(selectedInstanceId, variation.id);
                    }
                  }}>
                  {/* Preview Container */}
                  <div className="h-24 overflow-hidden scale-55 origin-top-left w-[182%] pointer-events-none relative">
                    <PreviewComp />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Variation Footer */}
                  <div
                    className="p-2.5 flex items-center justify-between border-t"
                    style={{
                      borderTopColor: isActive
                        ? `${colors.primary}20`
                        : "#e5e7eb",
                    }}>
                    <span
                      className={`text-xs font-medium ${
                        isActive ? "font-semibold" : "text-gray-700"
                      }`}
                      style={{ color: isActive ? colors.primary : undefined }}>
                      {variation.name}
                    </span>

                    {/* Active Indicator */}
                    {isActive ? (
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: colors.primary }}></div>
                    ) : (
                      <svg
                        className="w-3 h-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
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

      {/* Footer with color palette info */}
      <div className="p-3 border-t border-gray-200 text-xs text-gray-600">
        <div className="flex items-center justify-between">
          <span>Using theme:</span>
          <div className="flex items-center gap-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors.primary }}></div>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors.secondary }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
