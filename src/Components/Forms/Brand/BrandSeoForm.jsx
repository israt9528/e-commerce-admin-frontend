"use client";
import React from "react";

const BrandSeoForm = () => {
  return (
    <div className="w-full bg-white font-sans border border-gray-200 rounded-sm shadow-sm">
      {/* Header Section */}
      <div className="border-b border-gray-200 py-3 px-6">
        <h2 className="text-gray-600 text-lg font-medium">SEO</h2>
      </div>

      <div className="p-6 space-y-6">
        {/* Meta Title Field */}
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-[200px] text-gray-700 text-sm font-normal mb-2 md:mb-0">
            Meta Title
          </label>
          <div className="flex-1">
            <input
              type="text"
              className="w-full border border-[#CED4DA] rounded-[4px] px-3 py-1.5 focus:outline-none focus:border-blue-400 bg-white transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Meta Description Field */}
        <div className="flex flex-col md:flex-row">
          <label className="md:w-[200px] text-gray-700 text-sm font-normal mt-2 mb-2 md:mb-0">
            Meta Description
          </label>
          <div className="flex-1">
            <textarea
              rows={10}
              className="w-full border border-[#CED4DA] rounded-[4px] px-3 py-2 focus:outline-none focus:border-blue-400 bg-white transition-all shadow-inner resize-y"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-2">
          <button className="bg-[#0069D9] hover:bg-[#0056b3] text-white px-5 py-2 rounded-[4px] text-sm font-medium transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandSeoForm;
