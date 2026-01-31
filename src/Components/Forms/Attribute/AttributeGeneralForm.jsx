"use client";

import React, { useState, useRef, useEffect } from "react";

const AttributeGeneralForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Home & Kitchen" },
    { id: 4, name: "Sports & Outdoors" },
    { id: 5, name: "Beauty & Personal Care" },
    { id: 6, name: "Books" },
    { id: 7, name: "Toys & Games" },
    { id: 8, name: "Automotive" },
    { id: 9, name: "Health & Wellness" },
    { id: 10, name: "Office Supplies" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryToggle = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId),
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const removeCategory = (categoryId, e) => {
    e.stopPropagation(); // Prevent dropdown from toggling when removing category
    setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
  };

  return (
    <div className="w-full bg-white font-sans border border-gray-200 rounded-sm shadow-sm">
      {/* Header Section */}
      <div className="border-b border-gray-200 py-3 px-6">
        <h2 className="text-gray-600 text-lg font-medium">General</h2>
      </div>

      <div className="p-6 space-y-6">
        {/* Attribute Set Dropdown Field */}
        <div className="flex flex-col md:flex-row md:items-start">
          <label className="md:w-[200px] text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
            Attribute Set <span className="text-red-500">*</span>
          </label>
          <div className="flex-1">
            <select className="w-full border border-[#CED4DA] rounded-[4px] px-3 py-2 focus:outline-none focus:border-blue-400 bg-white transition-all shadow-inner appearance-none">
              <option value="">Please Select</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
              <option value="home">Home & Kitchen</option>
            </select>
          </div>
        </div>

        {/* Name Field */}
        <div className="flex flex-col md:flex-row md:items-start">
          <label className="md:w-[200px] text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="flex-1">
            <input
              type="text"
              className="w-full border border-[#CED4DA] rounded-[4px] px-3 py-1.5 focus:outline-none focus:border-blue-400 bg-white transition-all shadow-inner"
              placeholder="Enter attribute name"
            />
          </div>
        </div>

        {/* Categories Custom Dropdown Field */}
        <div className="flex flex-col md:flex-row md:items-start">
          <label className="md:w-[200px] text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
            Categories
          </label>
          <div className="flex-1 relative" ref={dropdownRef}>
            {/* Dropdown trigger with selected categories inside */}
            <div
              className="w-full min-h-[42px] border border-[#CED4DA] rounded-[4px] px-3 py-2 focus:outline-none focus:border-blue-400 bg-white cursor-pointer shadow-inner flex items-center flex-wrap gap-1"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {/* Display selected categories as tags inside the input */}
              {selectedCategories.length === 0 ? (
                <span className="text-gray-400 text-sm">Select categories</span>
              ) : (
                selectedCategories.map((categoryId) => {
                  const category = categories.find(
                    (c) => c.id.toString() === categoryId,
                  );
                  return (
                    <div
                      key={categoryId}
                      className="inline-flex items-center gap-1 bg-blue-50 border border-blue-200 rounded px-2 py-1 text-xs text-blue-700"
                      onClick={(e) => e.stopPropagation()}>
                      <span>{category?.name}</span>
                      <button
                        type="button"
                        onClick={(e) => removeCategory(categoryId, e)}
                        className="text-blue-500 hover:text-blue-700 ml-1 text-sm font-bold">
                        ×
                      </button>
                    </div>
                  );
                })
              )}

              {/* Clear all button when categories are selected */}
              {selectedCategories.length > 0 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCategories([]);
                  }}
                  className="ml-auto text-xs text-gray-500 hover:text-red-500 px-2 py-1"
                  title="Clear all">
                  Clear
                </button>
              )}

              {/* Dropdown arrow */}
              <svg
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""} ${selectedCategories.length > 0 ? "ml-2" : "ml-auto"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown content */}
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 border border-[#CED4DA] rounded-[4px] bg-white shadow-lg max-h-60 overflow-y-auto">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center px-3 py-2 hover:bg-blue-50 cursor-pointer"
                    onClick={() =>
                      handleCategoryToggle(category.id.toString())
                    }>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(
                        category.id.toString(),
                      )}
                      onChange={() => {}}
                      className="w-4 h-4 accent-[#0069D9] border-[#CED4DA] rounded cursor-pointer"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {category.name}
                    </span>
                  </div>
                ))}

                {/* Clear all option inside dropdown */}
                {selectedCategories.length > 0 && (
                  <div className="border-t border-gray-100 px-3 py-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategories([]);
                      }}
                      className="w-full text-left text-red-600 hover:text-red-800 text-sm py-1">
                      Clear all selections
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Filterable Checkbox Field */}
        <div className="flex flex-col md:flex-row md:items-start">
          <label className="md:w-[200px] text-gray-700 text-sm font-normal mb-2 md:mb-0">
            Filterable
          </label>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="filterable"
                className="w-4 h-4 accent-[#0069D9] border-[#CED4DA] rounded cursor-pointer"
              />
              <label
                htmlFor="filterable"
                className="text-gray-700 text-sm cursor-pointer">
                Use this attribute for filtering products
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-gradient-to-r bg-[#088178] text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all duration-200">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttributeGeneralForm;
