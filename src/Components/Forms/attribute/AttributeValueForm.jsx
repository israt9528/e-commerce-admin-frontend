"use client";

import React, { useState } from "react";

const AttributeValuesForm = () => {
  // Use deterministic IDs to avoid hydration mismatch
  const initialValues = [
    { id: "value-1", value: "" },
    { id: "value-2", value: "" },
    { id: "value-3", value: "" },
  ];

  const [values, setValues] = useState(initialValues);

  const addNewValue = () => {
    const newId = `value-${values.length + 1}`;
    setValues([...values, { id: newId, value: "" }]);
  };

  const removeValue = (id) => {
    if (values.length > 1) {
      setValues(values.filter((value) => value.id !== id));
    }
  };

  const updateValue = (id, newValue) => {
    setValues(
      values.map((value) =>
        value.id === id ? { ...value, value: newValue } : value,
      ),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted values:", values);
  };

  return (
    <div className="w-full bg-white font-sans border border-gray-200 rounded-sm shadow-sm">
      <div className="border-b border-gray-200 py-3 px-6">
        <h2 className="text-gray-600 text-lg font-medium">Values</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            {values.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center gap-3">
                <label className="md:w-[200px] text-gray-700 text-sm font-normal mb-1 md:mb-0">
                  Value {index + 1}
                </label>
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={item.value}
                    onChange={(e) => updateValue(item.id, e.target.value)}
                    className="flex-1 border border-[#CED4DA] rounded-[4px] px-3 py-1.5 focus:outline-none focus:border-blue-400 bg-white transition-all shadow-inner"
                    placeholder={`Enter value ${index + 1}`}
                  />
                  {values.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeValue(item.id)}
                      className="flex items-center justify-center w-10 h-10 border border-red-200 rounded-[4px] text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                      title="Remove value">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Add Button */}
          <div className="pt-4 flex justify-center">
            <button
              type="button"
              onClick={addNewValue}
              className="flex items-center gap-2 px-4 py-2 bg-[#088178] text-white rounded-md hover:bg-[#066b63] active:bg-[#055a54] transition-all duration-200 shadow-sm hover:shadow">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-white">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>

              <span className="text-sm font-medium">Add another value</span>
            </button>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-gradient-to-r bg-[#088178] text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all duration-200">
              Save Values
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AttributeValuesForm;
