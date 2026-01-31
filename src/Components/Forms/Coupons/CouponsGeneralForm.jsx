"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";

const CouponsGeneralForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    discountType: "Fixed",
    value: "",
    freeShipping: false,
    startDate: "",
    endDate: "",
    status: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full bg-white font-sans border border-gray-200 rounded-sm shadow-sm">
      {/* Header Section */}
      <div className="border-b border-gray-200 py-3 px-6">
        <h2 className="text-gray-600 text-lg font-medium">General</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="p-6 space-y-6">
          {/* Name Field */}
          <div className="flex flex-col md:flex-row md:items-start">
            <label className="md:w-50 text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full max-w-md border border-[#CED4DA] rounded-sm px-3 py-2 focus:outline-none focus:border-blue-400 bg-white transition-all shadow-inner"
                placeholder="Enter coupon name"
                required
              />
            </div>
          </div>

          {/* Code Field */}
          <div className="flex flex-col md:flex-row md:items-start">
            <label className="md:w-50 text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
              Code <span className="text-red-500">*</span>
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="w-full max-w-md border border-[#CED4DA] rounded-sm px-3 py-2 focus:outline-none focus:border-blue-400 bg-white transition-all shadow-inner"
                placeholder="Enter coupon code"
                required
              />
            </div>
          </div>

          {/* Discount Type Field */}
          <div className="flex flex-col md:flex-row md:items-start">
            <label className="md:w-50 text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
              Discount Type
            </label>
            <div className="flex-1">
              <select
                name="discountType"
                value={formData.discountType}
                onChange={handleChange}
                className="w-full max-w-md border border-[#CED4DA] rounded-sm px-3 py-2 focus:outline-none focus:border-blue-400 bg-white transition-all shadow-inner">
                <option value="Fixed">Fixed</option>
                <option value="Percentage">Percentage</option>
              </select>
            </div>
          </div>

          {/* Value Field (Conditional based on Discount Type) */}
          {formData.discountType !== "Free Shipping" && (
            <div className="flex flex-col md:flex-row md:items-start">
              <label className="md:w-50 text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
                Value
              </label>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    name="value"
                    value={formData.value}
                    onChange={handleChange}
                    className="w-32 border border-[#CED4DA] rounded-sm px-3 py-2 focus:outline-none focus:border-blue-400 bg-white transition-all shadow-inner"
                    placeholder={
                      formData.discountType === "Fixed" ? "$0.00" : "0%"
                    }
                  />
                  {formData.discountType === "Fixed" && (
                    <span className="text-gray-500 text-sm">USD</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Free Shipping Checkbox (Conditional based on Discount Type) */}
          {formData.discountType !== "Free Shipping" && (
            <div className="flex flex-col md:flex-row md:items-start">
              <label className="md:w-50 text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
                {/* Empty label for alignment */}
              </label>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="freeShipping"
                    id="freeShipping"
                    checked={formData.freeShipping}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#0069D9] border-[#CED4DA] rounded cursor-pointer"
                  />
                  <label
                    htmlFor="freeShipping"
                    className="text-gray-700 text-sm cursor-pointer">
                    Allow free shipping
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Start Date Field */}
          <div className="flex flex-col md:flex-row md:items-start">
            <label className="md:w-50 text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
              Start date
            </label>
            <div className="flex-1">
              <div className="relative w-48">
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  min={today}
                  className="w-full border border-[#CED4DA] rounded-sm px-3 py-2 pr-9 focus:outline-none focus:border-blue-400 bg-white transition-all shadow-inner cursor-pointer"
                />
                <Calendar
                  size={16}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* End Date Field */}
          <div className="flex flex-col md:flex-row md:items-start">
            <label className="md:w-50 text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
              End date
            </label>
            <div className="flex-1">
              <div className="relative w-48">
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  min={formData.startDate || today}
                  className="w-full border border-[#CED4DA] rounded-sm px-3 py-2 pr-9 focus:outline-none focus:border-blue-400 bg-white transition-all shadow-inner cursor-pointer"
                />
                <Calendar
                  size={16}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Status Checkbox */}
          <div className="flex flex-col md:flex-row md:items-start">
            <label className="md:w-50 text-gray-700 text-sm font-normal mb-2 md:mb-0 pt-1">
              Status
            </label>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="status"
                  id="status"
                  checked={formData.status}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[#0069D9] border-[#CED4DA] rounded cursor-pointer"
                />
                <label
                  htmlFor="status"
                  className="text-gray-700 text-sm cursor-pointer">
                  Enable the coupon
                </label>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex flex-col md:flex-row md:items-start pt-4">
            <div className="md:w-50 hidden md:block"></div>
            <div className="flex-1">
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#088178] text-white rounded-lg hover:bg-[#066a62] transition-colors text-sm font-semibold shadow-sm">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CouponsGeneralForm;
