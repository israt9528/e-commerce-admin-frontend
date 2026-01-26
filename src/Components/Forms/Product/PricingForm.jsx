"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineCalendar, HiOutlineViewGrid } from "react-icons/hi";
import { useFormState } from "../../Context/FormContext";

const PricingForm = ({ onNext }) => {
  // 1. Access the global context
  const { formData, saveTabData } = useFormState();

  // 2. Initialize Hook Form with values from the pricing bucket
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData.pricing || {
      price: "",
      specialPrice: "",
      type: "",
      start: "",
      end: "",
    },
  });

  // 3. Save to the pricing section and move to next tab
  const onSubmit = (data) => {
    saveTabData("pricing", data);
    onNext();
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-gray-700 font-medium">Pricing</h2>
        <HiOutlineViewGrid className="text-gray-400" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
        {/* Price Input with Validation */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Price <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              $
            </span>
            <input
              type="number"
              step="0.01"
              {...register("price", { required: "Price is required" })}
              className={`input input-bordered rounded-l-none w-full h-10 focus:outline-teal-500 ${
                errors.price ? "border-red-500" : ""
              }`}
            />
          </div>
          {errors.price && (
            <span className="text-red-500 text-xs mt-1">
              {errors.price.message}
            </span>
          )}
        </div>

        {/* Special Price */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Special Price
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              $
            </span>
            <input
              type="number"
              step="0.01"
              {...register("specialPrice")}
              className="input input-bordered rounded-l-none w-full h-10 focus:outline-teal-500"
            />
          </div>
        </div>

        {/* Special Price Type */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Special Price Type
          </label>
          <select
            {...register("type")}
            className="select select-bordered w-full h-10 min-h-0 font-normal focus:outline-teal-500"
          >
            <option value="Fixed">Fixed</option>
            <option value="Percentage">Percentage</option>
          </select>
        </div>

        {/* Date Ranges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label-text mb-2 text-gray-600 font-medium">
              Special Price Start
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                <HiOutlineCalendar />
              </span>
              <input
                type="date"
                {...register("start")}
                className="input input-bordered rounded-l-none w-full h-10 focus:outline-teal-500"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label-text mb-2 text-gray-600 font-medium">
              Special Price End
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                <HiOutlineCalendar />
              </span>
              <input
                type="date"
                {...register("end")}
                className="input input-bordered rounded-l-none w-full h-10 focus:outline-teal-500"
              />
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
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

export default PricingForm;
