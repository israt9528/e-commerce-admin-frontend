"use client";
import React from "react";

const BrandGeneralForm = () => {
  return (
    <div className="w-full bg-white font-sans border border-gray-200 rounded-sm shadow-sm">
      {/* Header Section */}
      <div className="border-b border-gray-200 py-3 px-6">
        <h2 className="text-gray-600 text-lg font-medium">General</h2>
      </div>

      <div className="p-6 space-y-6">
        {/* Name Field */}
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-[200px] text-gray-700 text-sm font-normal mb-2 md:mb-0">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="flex-1">
            <input
              type="text"
              className="w-full border border-[#CED4DA] rounded-[4px] px-3 py-1.5 focus:outline-none focus:border-blue-400 bg-white transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Status Checkbox Field */}
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-[200px] text-gray-700 text-sm font-normal mb-2 md:mb-0">
            Status
          </label>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="enable-brand"
              className="w-4 h-4 accent-[#0069D9] border-[#CED4DA] rounded cursor-pointer"
            />
            <label
              htmlFor="enable-brand"
              className="text-gray-700 text-sm cursor-pointer"
            >
              Enable the brand
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-2">
          <button className="bg-[#0069D9] hover:bg-[#0056b3] text-white px-5 py-2 rounded-[4px] text-sm font-medium transition-colors shadow-sm">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandGeneralForm;
