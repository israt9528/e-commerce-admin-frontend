import TabbedLayout from "@/Components/Layout/TabbedLayout";
import BrandMediaForm from "@/Components/Forms/Brand/BrandMediaForm";
import React from "react";


import CouponGeneralForm from "@/Components/Forms/Coupons/CouponsGeneralForm";
import CouponsUsageRestrictionForm from "@/Components/Forms/Coupons/CouponsUsageRestrictionForm";
import CouponsUsageLimitForm from "@/Components/Forms/Coupons/CouponsUsageLimitForm";
const CreateCoupon = () => {
  const couponsTabs = [
    { label: "General", component: <CouponGeneralForm /> },
    { label: "Usage Restrictions", component: <CouponsUsageRestrictionForm /> },
    { label: "Usage Limit", component: <CouponsUsageLimitForm /> },
  ];
  return (
    <div>
      <h1 className="text-primary text-3xl font-bold mb-5">Create Coupon</h1>
      <TabbedLayout tabs={couponsTabs}></TabbedLayout>
    </div>
  );
};

export default CreateCoupon;
