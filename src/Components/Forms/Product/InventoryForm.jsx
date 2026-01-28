"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineViewGrid } from "react-icons/hi";
import { useFormState } from "../../Context/FormContext";

const InventoryForm = ({ onNext }) => {
  const { formData, saveTabData } = useFormState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData.inventory || {
      sku: "",
      management: "",
      stock: "",
    },
  });

  const onSubmit = (data) => {
    saveTabData("inventory", data);
    onNext();
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center bg-white">
        <h2 className="text-gray-700 font-medium">Inventory</h2>
        <HiOutlineViewGrid className="text-gray-400" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-3">
        {/* SKU Input */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            SKU
          </label>
          <input
            type="text"
            {...register("sku")}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
          />
        </div>

        {/* Quantity */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Quantity
          </label>
          <input
            type="number"
            {...register("quantity")}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
          />
        </div>

        {/* Stock Availability Dropdown */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Stock Availability
          </label>
          <select
            {...register("stock")}
            className="select select-bordered w-full h-10 min-h-0 font-normal focus:outline-teal-500"
          >
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
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

export default InventoryForm;
