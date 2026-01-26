"use client";
import React, { useState, useRef } from "react";
import { HiOutlineFolderOpen, HiOutlinePhotograph } from "react-icons/hi";

const BrandMediaForm = () => {
  // 1. Create refs to target hidden file inputs
  const logoInputRef = useRef(null);
  const bannerInputRef = useRef(null);

  // 2. State to store and display the selected image previews
  const [previews, setPreviews] = useState({
    logo: null,
    banner: null,
  });

  // 3. Handle file selection
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviews((prev) => ({ ...prev, [type]: imageUrl }));
    }
  };

  return (
    <div className="w-full bg-white font-sans border border-gray-200 rounded-sm">
      {/* Header Section */}
      <div className="border-b border-gray-200 py-3 px-6">
        <h2 className="text-gray-600 text-lg font-semibold">Images</h2>
      </div>

      <div className="p-6 space-y-10">
        {/* LOGO SECTION */}
        <section className="space-y-4">
          <h3 className="text-gray-700 text-xl font-medium">Logo</h3>

          {/* Hidden File Input for Logo */}
          <input
            type="file"
            ref={logoInputRef}
            onChange={(e) => handleFileChange(e, "logo")}
            className="hidden"
            accept="image/*"
          />

          <button
            type="button"
            onClick={() => logoInputRef.current.click()} // Trigger the hidden input
            className="flex items-center gap-2 bg-[#E9ECEF] hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded text-sm transition-colors border border-gray-300"
          >
            <HiOutlineFolderOpen className="text-gray-600 text-lg" />
            Browse
          </button>

          <div className="w-36 h-36 bg-[#F8F9FA] border border-[#DEE2E6] rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="w-28 h-28 bg-white border border-[#E9ECEF] rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
              {previews.logo ? (
                <img
                  src={previews.logo}
                  alt="Logo Preview"
                  className="w-full h-full object-contain"
                />
              ) : (
                <HiOutlinePhotograph className="text-[#DEE2E6] text-6xl stroke-1" />
              )}
            </div>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* BANNER SECTION */}
        <section className="space-y-4">
          <h3 className="text-gray-700 text-xl font-medium">Banner</h3>

          {/* Hidden File Input for Banner */}
          <input
            type="file"
            ref={bannerInputRef}
            onChange={(e) => handleFileChange(e, "banner")}
            className="hidden"
            accept="image/*"
          />

          <button
            type="button"
            onClick={() => bannerInputRef.current.click()} // Trigger the hidden input
            className="flex items-center gap-2 bg-[#E9ECEF] hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded text-sm transition-colors border border-gray-300"
          >
            <HiOutlineFolderOpen className="text-gray-600 text-lg" />
            Browse
          </button>

          <div className="w-36 h-36 bg-[#F8F9FA] border border-[#DEE2E6] rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="w-28 h-28 bg-white border border-[#E9ECEF] rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
              {previews.banner ? (
                <img
                  src={previews.banner}
                  alt="Banner Preview"
                  className="w-full h-full object-contain"
                />
              ) : (
                <HiOutlinePhotograph className="text-[#DEE2E6] text-6xl stroke-1" />
              )}
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="pt-4">
          <button className="bg-[#0069D9] hover:bg-[#0056b3] text-white px-5 py-2 rounded-md font-medium transition-colors shadow-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandMediaForm;
