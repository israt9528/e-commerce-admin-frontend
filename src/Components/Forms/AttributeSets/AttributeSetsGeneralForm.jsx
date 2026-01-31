"use client";

import React, { useState } from "react";

const GeneralForm = () => {
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
            <label className="md:w-[200px] text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
              Campaign Name <span className="text-red-500">*</span>
            </label>
            <div className="flex-1">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-[#CED4DA] rounded-[4px] px-3 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white transition-all shadow-inner"
                placeholder="Enter name"
                required
              />
            </div>
          </div>

          {/* Save Button - Expert Alignment */}
          <div className="flex flex-col md:flex-row md:items-start">
            {/* Empty div to match the label width (creates the 2nd row alignment) */}
            <div className="md:w-[200px] hidden md:block"></div>

            {/* Button container aligned with input field */}
            <div className="flex-1">
              <button
                type="submit"
                className="bg-[#088178] hover:bg-[#066a62] text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all duration-200">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GeneralForm;
