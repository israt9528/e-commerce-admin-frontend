"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineViewGrid } from "react-icons/hi";
import { useFormState } from "../Context/FormContext";

const SeoForm = ({ onNext }) => {
  // 1. Pull global state and save function from context
  const { formData, saveTabData } = useFormState();

  // 2. Initialize Hook Form with current context values for the 'seo' section
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData.seo || {
      url: "",
      metaTitle: "",
      metaDescription: "",
    },
  });

  // 3. Save to the 'seo' section and move next
  const onSubmit = (data) => {
    saveTabData("seo", data); // Merges these fields into formData.seo
    onNext();
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center bg-white">
        <h2 className="text-gray-700 font-medium">SEO</h2>
        <HiOutlineViewGrid className="text-gray-400" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
        {/* URL Input */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            URL
          </label>
          <input
            type="text"
            {...register("url")}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
            placeholder="product-slug-example"
          />
        </div>

        {/* Meta Title Input */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Meta Title
          </label>
          <input
            type="text"
            {...register("metaTitle")}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
          />
        </div>

        {/* Meta Description Input */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Meta Description
          </label>
          <textarea
            {...register("metaDescription")}
            className="textarea textarea-bordered w-full h-32 focus:outline-teal-500"
          ></textarea>
        </div>

        {/* Navigation Button */}
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

export default SeoForm;
