"use client";

import React, { useState } from "react";
import { X, Calendar, Plus, DollarSign } from "lucide-react";

const FlashSalesProductForm = () => {
  const [products, setProducts] = useState([
    { product: "", endDate: "", price: "", quantity: "" },
  ]);

  const addProduct = () => {
    setProducts([
      ...products,
      { product: "", endDate: "", price: "", quantity: "" },
    ]);
  };

  const removeProduct = (index) => {
    if (products.length > 1) {
      setProducts(products.filter((_, i) => i !== index));
    }
  };

  const updateField = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(products);
  };

  return (
    <div className="w-full bg-white font-sans border border-gray-200 rounded-sm shadow-sm">
      <div className="border-b border-gray-200 py-3 px-6">
        <h2 className="text-gray-600 text-lg font-medium">
          {" "}
          Flash Sale Product
        </h2>
      </div>

      <form onSubmit={submitForm} className="p-6">
        {/* Product Sets Container */}
        <div className="space-y-6">
          {products.map((product, index) => (
            <div key={index} className="relative group">
              {/* Product Set Container with subtle border */}
              <div className="space-y-4 p-4 border border-gray-100 rounded hover:border-gray-200 transition-colors">
                {/* Product Header with Delete Button */}
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    Product Set {index + 1}
                  </div>

                  {products.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeProduct(index)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded"
                      title="Delete product set">
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Full Width Product Field */}
                <div>
                  <label className="text-gray-700 text-sm font-normal mb-1.5 block">
                    Product <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={product.product}
                    onChange={(e) =>
                      updateField(index, "product", e.target.value)
                    }
                    className="w-full border border-[#CED4DA] rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400 bg-white"
                    placeholder="Enter product name"
                  />
                </div>

                {/* Compact Three-in-a-Row Fields */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Compact Date Field */}
                  <div>
                    <label className="text-gray-700 text-sm font-normal mb-1.5 block">
                      End Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={product.endDate}
                        onChange={(e) =>
                          updateField(index, "endDate", e.target.value)
                        }
                        className="w-full border border-[#CED4DA] rounded px-2 py-1.5 text-sm pl-8 focus:outline-none focus:border-blue-400 bg-white cursor-pointer"
                      />
                      <Calendar
                        size={14}
                        className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Compact Price Field */}
                  <div>
                    <label className="text-gray-700 text-sm font-normal mb-1.5 block">
                      Price <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={product.price}
                        onChange={(e) =>
                          updateField(index, "price", e.target.value)
                        }
                        className="w-full border border-[#CED4DA] rounded px-2 py-1.5 text-sm pl-7 focus:outline-none focus:border-blue-400 bg-white"
                        placeholder="0.00"
                      />
                      <DollarSign
                        size={14}
                        className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Compact Quantity Field */}
                  <div>
                    <label className="text-gray-700 text-sm font-normal mb-1.5 block">
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        updateField(index, "quantity", e.target.value)
                      }
                      className="w-full border border-[#CED4DA] rounded px-2 py-1.5 text-sm focus:outline-none focus:border-blue-400 bg-white"
                      placeholder="0"
                      min="1"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={addProduct}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[#0069D9] hover:text-[#0056b3] text-sm font-medium">
              <Plus size={14} />
              <span>Add Product</span>
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-[#088178] text-white rounded hover:bg-[#066b63] transition-colors text-sm font-semibold">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FlashSalesProductForm;
