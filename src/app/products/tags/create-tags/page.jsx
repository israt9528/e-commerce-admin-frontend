import React from "react";

import TabbedLayout from "@/Components/Layout/TabbedLayout";
import TagsGeneralForm from "@/Components/Forms/Tags/TagsGeneralForm";

const CreateTags = () => {
  const tagTabs = [{ label: "General", component: <TagsGeneralForm /> }];
  return (
    <div>
      <h1 className="text-primary text-3xl font-bold mb-5">Create Tags</h1>
      <TabbedLayout tabs={tagTabs}></TabbedLayout>
    </div>
  );
};

export default CreateTags;
