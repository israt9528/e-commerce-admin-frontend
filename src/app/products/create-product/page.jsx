"use client";
import React, { useState } from "react";

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
import ProductDetails from "@/Components/Products/ProductDetails";
import { FormProvider, useFormState } from "@/Components/Context/FormContext";


const CreateProductContent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { formData } = useFormState();

  const nextTab = () => {
    setSelectedIndex((prev) => prev + 1);
  };

  const handleSaveProduct = () => {
    console.log("--- FINAL PRODUCT DATA ---");
    console.log(formData);
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
    { label: "Preview Products", component: <ProductDetails /> },
  ];

  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl text-primary font-bold">Add New Product</h1>
        <div>
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

export default function CreateProduct() {
  return (
    <FormProvider>
      <CreateProductContent />
    </FormProvider>
  );
}
