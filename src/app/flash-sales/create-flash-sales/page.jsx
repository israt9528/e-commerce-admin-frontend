import TabbedLayout from "@/Components/Layout/TabbedLayout";
import BrandMediaForm from "@/Components/Forms/Brand/BrandMediaForm";
import React from "react";
import FlashSaleProductForm from "@/Components/Forms/FlashSales/FlashSalesProductForm";
import FlashSalesSettingsForm from "@/Components/Forms/FlashSales/FlashSalesSettingsForm";

const CreateFlashSales = () => {
  const salesTabs = [
    { label: "Product", component: <FlashSaleProductForm /> },
    { label: "Settings", component: <FlashSalesSettingsForm /> },
  ];
  return (
    <div>
      <h1 className="text-primary text-3xl font-bold mb-5">
        Create Flash Sale
      </h1>
      <TabbedLayout tabs={salesTabs}></TabbedLayout>
    </div>
  );
};

export default CreateFlashSales;
