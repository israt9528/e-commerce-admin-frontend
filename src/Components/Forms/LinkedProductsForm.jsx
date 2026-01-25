"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineViewGrid } from "react-icons/hi";
import { useFormState } from "../Context/FormContext";

const LinkedProductsForm = () => {
  // 1. Access the global context
  const { formData, saveTabData } = useFormState();

  // 2. Initialize Hook Form with current context values
  const { register, handleSubmit } = useForm({
    defaultValues: formData.linkedProducts || {
      upSells: "",
      crossSells: "",
      related: "",
    },
  });

  // 3. Save to the context
  // Since this is the last tab, you can call saveTabData on change or via a final local button
  const onSubmit = (data) => {
    saveTabData("linkedProducts", data);
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center bg-white">
        <h2 className="text-gray-700 font-medium">Linked Products</h2>
        <HiOutlineViewGrid className="text-gray-400" />
      </div>

      {/* We use onChange on the inputs to ensure the global state is always up to date 
         even without a 'Continue' button on the last tab.
      */}
      <form onBlur={handleSubmit(onSubmit)} className="p-6 space-y-5">
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Up-Sells
          </label>
          <input
            type="text"
            {...register("upSells")}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
          />
        </div>

        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Cross-Sells
          </label>
          <input
            type="text"
            {...register("crossSells")}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
          />
        </div>

        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Related Products
          </label>
          <input
            type="text"
            {...register("related")}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
          />
        </div>

        <p className="text-xs text-gray-400 italic mt-4">
          Data is saved automatically when you leave a field.
        </p>
      </form>
    </div>
  );
};

export default LinkedProductsForm;
