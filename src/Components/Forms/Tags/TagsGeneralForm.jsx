"use client";
import React, { useState } from "react";

const TagsGeneralForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with name:", name);
    // Handle form submission logic here
  };

  return (
    <div className="w-full bg-white font-sans border border-gray-200 rounded-sm shadow-sm">
      {/* Header Section */}
      <div className="border-b border-gray-200 py-3 px-6">
        <h2 className="text-gray-600 text-lg font-medium">General</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="p-6">
          {/* Name Field */}
          <div className="flex flex-col md:flex-row md:items-start mb-6">
            <label className="md:w-50 text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex-1">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-[#CED4DA] rounded-sm px-3 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white transition-all shadow-inner"
                placeholder="Enter name"
                required
              />
              <p className="text-gray-500 text-xs mt-2">
                Enter tags for this item
              </p>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-[#088178] hover:bg-[#066a62] text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all duration-200">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TagsGeneralForm;
