import TabbedLayout from '@/Components/Layout/TabbedLayout';
import React from 'react'
import FlashSaleProductForm from '@/Components/Forms/FlashSales/FlashSalesProductForm';
import FlashSalesSettingsForm from './../../../Components/Forms/FlashSales/FlashSalesSettingsForm';

const HomePage = () => {
  const homePageTabs = [
    { label: "Product", component: <FlashSaleProductForm /> },
    { label: "Settings", component: <FlashSalesSettingsForm /> },
  ];
  return (
    <div>
      <h1 className="text-primary text-3xl font-bold mb-5">
        home Page
      </h1>
      <TabbedLayout tabs={homePageTabs}></TabbedLayout>
    </div>
  )
}

export default HomePage


