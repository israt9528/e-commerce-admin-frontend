"use client";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { HiOutlineTrash, HiDotsVertical } from "react-icons/hi";
import { useFormState } from "../../Context/FormContext";

const VariationsForm = ({ onNext }) => {
  // 1. Pull global state and save function from your FormContext
  const { formData, saveTabData } = useFormState();

  // 2. Initialize Hook Form
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      // Load existing variations or start with one empty row
      variations:
        formData.variations?.length > 0
          ? formData.variations
          : [{ name: "", type: "" }],
    },
  });

  // 3. useFieldArray handles adding/removing rows without manual mapping
  const { fields, append, remove } = useFieldArray({
    control,
    name: "variations",
  });

  // 4. Save to 'variations' bucket and move to next tab
  const onSubmit = (data) => {
    saveTabData("variations", data.variations);
    onNext();
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-gray-700 font-medium">Variations</h2>
        <div className="flex gap-3 text-gray-400">
          <HiDotsVertical className="cursor-pointer" />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="border border-gray-100 rounded-md">
            <div className="bg-gray-50/50 px-4 py-2 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>New Variation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <HiOutlineTrash
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => remove(index)}
                />
              </div>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label-text mb-2 text-gray-600 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  {...register(`variations.${index}.name`)}
                  className="input input-bordered h-10 w-full focus:outline-teal-500"
                />
              </div>
              <div className="form-control">
                <label className="label-text mb-2 text-gray-600 font-medium">
                  Type
                </label>
                <select
                  {...register(`variations.${index}.type`)}
                  className="select select-bordered h-10 min-h-0 w-full focus:outline-teal-500 font-normal"
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option value="Physical">Physical</option>
                  <option value="Digital">Digital</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center pt-2">
          <button
            type="button"
            onClick={() => append({ name: "", type: "" })}
            className="btn btn-sm bg-gray-100 border-none text-gray-700 hover:bg-gray-200 capitalize"
          >
            Add Variation
          </button>
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

export default VariationsForm;
