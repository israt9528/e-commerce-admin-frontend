import TabbedLayout from "@/Components/Layout/TabbedLayout";
import BrandMediaForm from "@/Components/Forms/Brand/BrandMediaForm";
import React from "react";
import AttributeSetsGeneralForm from "@/Components/Forms/attribute-sets/AttributeSetsGeneralForm";
import CreateAttribute from "./../../attributes/create-attribute/page";

const CreateAttributeSet = () => {
  const attributeSetsTabs = [
    { label: "General", component: <AttributeSetsGeneralForm /> },
  ];
  return (
    <div>
      <h1 className="text-primary text-3xl font-bold mb-5">
        Create Attribute Set
      </h1>
      <TabbedLayout tabs={attributeSetsTabs}></TabbedLayout>
    </div>
  );
};

export default CreateAttributeSet;
