"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useFormState } from "../Context/FormContext";

const MediaForm = ({ onNext }) => {
  // 1. Pull global state and save function from context
  const { formData, saveTabData } = useFormState();

  // 2. Local state for image preview
  // Initialize with existing context image if available
  const [imagePreview, setImagePreview] = useState(
    formData.media?.preview || null,
  );

  // 3. Initialize Hook Form
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: formData.media,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      // 4. Manually update Hook Form values
      setValue("imageFile", file); // Store the actual file for upload
      setValue("preview", previewUrl); // Store preview string for persistence
    }
  };

  // 5. Save to the 'media' section and move next
  const onSubmit = (data) => {
    saveTabData("media", { ...data, preview: imagePreview });
    onNext();
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-gray-700 font-medium">Media</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6">
        <div className="flex flex-wrap gap-4">
          {/* Upload Box */}
          <label className="w-40 h-40 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative overflow-hidden">
            {/* 6. Register input but keep custom onChange */}
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                handleImageChange(e);
                // Registering field for RHF tracking
                register("imageFile").onChange(e);
              }}
            />

            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-300 flex flex-col items-center">
                <HiOutlinePhotograph size={64} strokeWidth={1} />
              </div>
            )}
          </label>
        </div>

        <div className="flex justify-end mt-8 pt-4 border-t border-gray-100">
          <button
            type="submit"
            className="btn bg-primary hover:bg-teal-700 text-white border-none px-8 capitalize"
          >
            Continue to next
          </button>
        </div>
      </form>
    </div>
  );
};

export default MediaForm;
