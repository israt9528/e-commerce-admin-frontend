import TabbedLayout from "@/Components/Layout/TabbedLayout";
import BrandMediaForm from "@/Components/Forms/Brand/BrandMediaForm";
import React from "react";
import AttributeGeneralForm from "@/Components/Forms/attribute/AttributeGeneralForm";
import AttributeValuesForm from "@/Components/Forms/attribute/AttributeValueForm";

const CreateAttribute = () => {
  const attributeTabs = [
    { label: "General", component: <AttributeGeneralForm /> },
    { label: "Value", component: <AttributeValuesForm /> },
  ];
  return (
    <div>
      <h1 className="text-primary text-3xl font-bold mb-5">Create Attribute</h1>
      <TabbedLayout tabs={attributeTabs}></TabbedLayout>
    </div>
  );
};

export default CreateAttribute;
