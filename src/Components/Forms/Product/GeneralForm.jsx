"use client";
import React from "react";
import { useForm } from "react-hook-form";
import DescriptionEditor from "./DescriptionEditor";
import { useFormState } from "../../Context/FormContext";

const GeneralForm = ({ onNext }) => {
  const { formData, saveTabData } = useFormState();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: formData.general,
  });

  const description = watch("description", "");

  const wordCount = description
    ? description
        .replace(/<[^>]*>/g, "")
        .trim()
        .split(/\s+/)
        .filter(Boolean).length
    : 0;

  const onSubmit = (data) => {
    saveTabData("general", data);
    onNext();
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">
              Name <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Product name is required" })}
            className={`input input-bordered w-full h-11 focus:outline-teal-500 ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-1">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">
              Description <span className="text-red-500">*</span>
            </span>
          </label>
          <div className="border border-gray-300 rounded-md overflow-hidden">
            <DescriptionEditor
              value={description}
              onChange={(val) => setValue("description", val)}
            />
            <div className="bg-gray-50 border-t border-gray-200 px-4 py-1.5 flex justify-between items-center text-[11px] text-gray-500 uppercase">
              <span>p »</span>
              <span>
                {wordCount} {wordCount === 1 ? "WORD" : "WORDS"}
              </span>
            </div>
          </div>
        </div>

        {/* Brand Dropdown */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">
              Brand
            </span>
          </label>
          <select
            {...register("brand")}
            className="select select-bordered w-full h-11 focus:outline-teal-500 font-normal"
          >
            <option value="">Please Select</option>
            <option value="brand1">Brand One</option>
            <option value="brand2">Brand Two</option>
          </select>
        </div>

        {/* Categories */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">
              Categories
            </span>
          </label>
          <input
            type="text"
            {...register("categories")}
            className="input input-bordered w-full h-11 focus:outline-teal-500"
          />
        </div>

        {/* Tags */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">Tags</span>
          </label>
          <input
            type="text"
            {...register("tags")}
            className="input input-bordered w-full h-11 focus:outline-teal-500"
          />
        </div>

        {/* Tax Class */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">
              Tax Class
            </span>
          </label>
          <select
            {...register("taxClass")}
            className="select select-bordered w-full h-11 focus:outline-teal-500 font-normal"
          >
            <option value="">Please Select</option>
            <option value="standard">Standard Tax</option>
            <option value="exempt">Tax Exempt</option>
          </select>
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

export default GeneralForm;
