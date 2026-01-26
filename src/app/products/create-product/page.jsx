"use client";
import React, { useState } from "react";
// 1. Import your Context and Hook

import AdditionalForm from "@/Components/Forms/Product/AdditionalForm";
import AttributesForm from "@/Components/Forms/Product/AttributesForm";
import GeneralForm from "@/Components/Forms/Product/GeneralForm";
import InventoryForm from "@/Components/Forms/Product/InventoryForm";
import LinkedProductsForm from "@/Components/Forms/Product/LinkedProductsForm";
import MediaForm from "@/Components/Forms/Product/MediaForm";
import PricingForm from "@/Components/Forms/Product/PricingForm";
import SeoForm from "@/Components/Forms/Product/SeoForm";
import VariationsForm from "@/Components/Forms/Product/VariationsForm";
import TabbedLayout from "@/Components/Layout/TabbedLayout";
import { FormProvider, useFormState } from "@/Components/Context/FormContext";

// Create a wrapper component to access the context hook
const CreateProductContent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 2. Access the global form data from context
  const { formData } = useFormState();

  const nextTab = () => {
    setSelectedIndex((prev) => prev + 1);
  };

  // 3. Final Save Function
  const handleSaveProduct = () => {
    console.log("--- FINAL PRODUCT DATA ---");
    console.log(formData);
    // You can now see: formData.general, formData.media, formData.pricing, etc.
  };

  const productTabs = [
    { label: "General", component: <GeneralForm onNext={nextTab} /> },
    { label: "Media", component: <MediaForm onNext={nextTab} /> },
    { label: "Attributes", component: <AttributesForm onNext={nextTab} /> },
    { label: "Variations", component: <VariationsForm onNext={nextTab} /> },
    { label: "Pricing", component: <PricingForm onNext={nextTab} /> },
    { label: "Inventory", component: <InventoryForm onNext={nextTab} /> },
    { label: "SEO", component: <SeoForm onNext={nextTab} /> },
    { label: "Additional", component: <AdditionalForm onNext={nextTab} /> },
    { label: "Linked Products", component: <LinkedProductsForm /> },
  ];

  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl text-primary font-bold">Add New Product</h1>
        <div>
          {/* 4. Attach the save function */}
          <button
            type="button"
            onClick={handleSaveProduct}
            className="btn btn-primary btn-outline"
          >
            Save Product
          </button>
        </div>
      </div>
      <TabbedLayout
        tabs={productTabs}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      />
    </div>
  );
};

// 5. Main export must be wrapped in the Provider
export default function CreateProduct() {
  return (
    <FormProvider>
      <CreateProductContent />
    </FormProvider>
  );
}
