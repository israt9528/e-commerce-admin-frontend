"use client";
import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  // Initialize with empty objects for each tab's bucket
  const [formData, setFormData] = useState({
    general: {},
    media: {},
    attributes: [],
    variations: [],
    pricing: {},
    inventory: {},
    seo: {},
    additional: {},
    linkedProducts: {},
  });

  // Save data into a specific section bucket
  const saveTabData = (section, newData) => {
    setFormData((prev) => ({
      ...prev,
      [section]: newData,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, saveTabData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormState = () => useContext(FormContext);
