"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, DollarSign } from "lucide-react";

const CouponsUsageRestrictionForm = () => {
  const categoryData = [
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Sports",
    "Beauty",
    "Books",
    "Toys",
    "Automotive",
    "Health",
    "Office",
  ];

  const [form, setForm] = useState({
    minSpend: "",
    maxSpend: "",
    products: "",
    excludeProducts: "",
    categories: [],
    excludeCategories: [],
  });

  const [dropdowns, setDropdowns] = useState({
    categories: false,
    excludeCategories: false,
  });

  const catRef = useRef(null);
  const exCatRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (catRef.current && !catRef.current.contains(e.target)) {
        setDropdowns((prev) => ({ ...prev, categories: false }));
      }
      if (exCatRef.current && !exCatRef.current.contains(e.target)) {
        setDropdowns((prev) => ({ ...prev, excludeCategories: false }));
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const toggleCategory = (category, field) => {
    const current = form[field];
    if (current.includes(category)) {
      setForm((prev) => ({
        ...prev,
        [field]: prev[field].filter((c) => c !== category),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [field]: [...prev[field], category],
      }));
    }
  };

  const removeCat = (category, field, e) => {
    e.stopPropagation();
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].filter((c) => c !== category),
    }));
  };

  const clearCats = (field) => {
    setForm((prev) => ({ ...prev, [field]: [] }));
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-sm shadow-sm">
      <div className="border-b border-gray-200 py-3 px-6">
        <h2 className="text-gray-600 text-lg font-medium">
          Usage Restrictions
        </h2>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(form);
        }}
        className="p-6">
        <div className="space-y-6">
          {/* Spend Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Minimum Spend
              </label>
              <div className="relative">
                <DollarSign
                  size={14}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={form.minSpend}
                  onChange={(e) =>
                    setForm({ ...form, minSpend: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 pl-9 text-sm"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Maximum Spend
              </label>
              <div className="relative">
                <DollarSign
                  size={14}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={form.maxSpend}
                  onChange={(e) =>
                    setForm({ ...form, maxSpend: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 pl-9 text-sm"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          {/* Products Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Products
              </label>
              <input
                type="text"
                value={form.products}
                onChange={(e) => setForm({ ...form, products: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                placeholder="Product IDs, separated by commas"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Exclude Products
              </label>
              <input
                type="text"
                value={form.excludeProducts}
                onChange={(e) =>
                  setForm({ ...form, excludeProducts: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                placeholder="Product IDs to exclude"
              />
            </div>
          </div>

          {/* Categories - Multi-select */}
          <div ref={catRef}>
            <label className="block text-gray-700 text-sm mb-2">
              Categories
            </label>
            <div className="relative">
              <div
                className="min-h-[40px] border border-gray-300 rounded px-3 py-2 cursor-pointer flex flex-wrap gap-1 items-center"
                onClick={() =>
                  setDropdowns({
                    ...dropdowns,
                    categories: !dropdowns.categories,
                  })
                }>
                {form.categories.length === 0 ? (
                  <span className="text-gray-400 text-sm">
                    Select categories
                  </span>
                ) : (
                  form.categories.map((cat) => (
                    <div
                      key={cat}
                      className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {cat}
                      <button
                        type="button"
                        onClick={(e) => removeCat(cat, "categories", e)}
                        className="ml-1 text-blue-600 hover:text-blue-800">
                        <X size={10} />
                      </button>
                    </div>
                  ))
                )}
                {form.categories.length > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      clearCats("categories");
                    }}
                    className="ml-auto text-xs text-gray-500 hover:text-red-500">
                    Clear
                  </button>
                )}
              </div>

              {dropdowns.categories && (
                <div className="absolute z-10 w-full mt-1 border border-gray-300 rounded bg-white shadow-lg max-h-48 overflow-y-auto">
                  {categoryData.map((cat) => (
                    <div
                      key={cat}
                      className="px-3 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
                      onClick={() => toggleCategory(cat, "categories")}>
                      <input
                        type="checkbox"
                        checked={form.categories.includes(cat)}
                        readOnly
                        className="mr-2"
                      />
                      <span className="text-sm">{cat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Exclude Categories - Multi-select */}
          <div ref={exCatRef}>
            <label className="block text-gray-700 text-sm mb-2">
              Exclude Categories
            </label>
            <div className="relative">
              <div
                className="min-h-[40px] border border-gray-300 rounded px-3 py-2 cursor-pointer flex flex-wrap gap-1 items-center"
                onClick={() =>
                  setDropdowns({
                    ...dropdowns,
                    excludeCategories: !dropdowns.excludeCategories,
                  })
                }>
                {form.excludeCategories.length === 0 ? (
                  <span className="text-gray-400 text-sm">
                    Select categories to exclude
                  </span>
                ) : (
                  form.excludeCategories.map((cat) => (
                    <div
                      key={cat}
                      className="flex items-center bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                      {cat}
                      <button
                        type="button"
                        onClick={(e) => removeCat(cat, "excludeCategories", e)}
                        className="ml-1 text-red-600 hover:text-red-800">
                        <X size={10} />
                      </button>
                    </div>
                  ))
                )}
                {form.excludeCategories.length > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      clearCats("excludeCategories");
                    }}
                    className="ml-auto text-xs text-gray-500 hover:text-red-500">
                    Clear
                  </button>
                )}
              </div>

              {dropdowns.excludeCategories && (
                <div className="absolute z-10 w-full mt-1 border border-gray-300 rounded bg-white shadow-lg max-h-48 overflow-y-auto">
                  {categoryData.map((cat) => (
                    <div
                      key={cat}
                      className="px-3 py-2 hover:bg-red-50 cursor-pointer flex items-center"
                      onClick={() => toggleCategory(cat, "excludeCategories")}>
                      <input
                        type="checkbox"
                        checked={form.excludeCategories.includes(cat)}
                        readOnly
                        className="mr-2"
                      />
                      <span className="text-sm">{cat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#088178] text-white rounded hover:bg-[#066a62] text-sm font-semibold">
              Save Restrictions
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CouponsUsageRestrictionForm;
