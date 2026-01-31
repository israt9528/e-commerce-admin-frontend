import React from "react";

import TabbedLayout from "@/Components/Layout/TabbedLayout";
import AttributeGeneralForm from "@/Components/Forms/Attribute/AttributeGeneralForm";
import AttributeValuesForm from "@/Components/Forms/Attribute/AttributeValueForm";

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
