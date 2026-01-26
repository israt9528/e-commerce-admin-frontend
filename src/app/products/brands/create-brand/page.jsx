import TabbedLayout from "@/Components/Layout/TabbedLayout";
import BrandMediaForm from "@/Components/Forms/Brand/BrandMediaForm";
import React from "react";
import BrandSeoForm from "@/Components/Forms/Brand/BrandSeoForm";
import BrandGeneralForm from "@/Components/Forms/Brand/BrandGeneralForm";

const CreateBrand = () => {
  const brandTabs = [
    { label: "General", component: <BrandGeneralForm></BrandGeneralForm> },
    { label: "Images", component: <BrandMediaForm></BrandMediaForm> },
    { label: "SEO", component: <BrandSeoForm></BrandSeoForm> },
  ];
  return (
    <div>
      <h1 className="text-primary text-4xl font-bold mb-5">Create Brand</h1>
      <TabbedLayout tabs={brandTabs}></TabbedLayout>
    </div>
  );
};

export default CreateBrand;
