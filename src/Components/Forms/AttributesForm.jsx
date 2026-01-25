"use client";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { HiOutlineTrash, HiDotsVertical } from "react-icons/hi";
import { useFormState } from "../Context/FormContext";

const AttributesForm = ({ onNext }) => {
  // 1. Pull global state and save function from context
  const { formData, saveTabData } = useFormState();

  // 2. Initialize Hook Form
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      // Load existing attributes from the bucket or start with one empty row
      attributes:
        formData.attributes?.length > 0
          ? formData.attributes
          : [{ name: "", values: "" }],
    },
  });

  // 3. useFieldArray replaces manual state mapping and handleInputChange
  const { fields, append, remove } = useFieldArray({
    control,
    name: "attributes",
  });

  // 4. Save to the 'attributes' bucket and move to next tab
  const onSubmit = (data) => {
    saveTabData("attributes", data.attributes);
    onNext();
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-gray-700 font-medium">Attributes</h2>
        <HiDotsVertical className="text-gray-400 cursor-pointer" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm font-normal border-b border-gray-100">
              <th className="pb-3 w-10"></th>
              <th className="pb-3 font-normal">Attribute</th>
              <th className="pb-3 font-normal">Values</th>
              <th className="pb-3 w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {fields.map((field, index) => (
              <tr key={field.id} className="group">
                <td className="py-3">
                  <div className="flex gap-0.5 text-gray-300">
                    <HiDotsVertical />
                    <HiDotsVertical className="-ml-3" />
                  </div>
                </td>
                <td className="py-3 pr-4">
                  <select
                    {...register(`attributes.${index}.name`)}
                    className="select select-bordered w-full h-10 min-h-0 font-normal focus:outline-teal-500 bg-white"
                  >
                    <option value="">Please Select</option>
                    <option value="color">Color</option>
                    <option value="size">Size</option>
                  </select>
                </td>
                <td className="py-3">
                  <input
                    type="text"
                    {...register(`attributes.${index}.values`)}
                    className="input input-bordered w-full h-10 focus:outline-teal-500"
                    placeholder="e.g. Red, Blue, XL"
                  />
                </td>
                <td className="py-3 text-right">
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <HiOutlineTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          type="button"
          onClick={() => append({ name: "", values: "" })}
          className="btn btn-sm mt-4 bg-gray-100 border-none text-gray-700 hover:bg-gray-200 capitalize"
        >
          Add Attribute
        </button>

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

export default AttributesForm;
