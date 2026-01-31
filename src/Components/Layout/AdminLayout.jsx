"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiHome,
  FiShoppingBag,
  FiShoppingCart,
  FiUsers,
  FiPlusSquare,
  FiDollarSign,
  FiUser,
  FiMessageSquare,
  FiStar,
  FiPieChart,
  FiSettings,
  FiTag,
  FiMenu,
  FiBell,
  FiMoon,
  FiCast,
  FiGlobe,
  FiChevronDown,
  FiSearch,
} from "react-icons/fi";
import { RiFlashlightLine, RiCouponLine } from "react-icons/ri";
import { LuLayoutGrid } from "react-icons/lu";
import Logo from "../Buttons/Logo";
import { usePathname } from "next/navigation";
import NavLink from "../Buttons/NavLink";

const AdminLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const path = usePathname();

  const menuItems = [
    {
      icon: <FiHome size={20} />,
      label: "Dashboard",
      href: "/",
      isDropdown: false,
    },
    {
      icon: <FiShoppingBag size={20} />,
      label: "Products",
      href: "/products",
      isDropdown: true,
      subItems: [
        { label: "Create Product", href: "/products/create-product" },
        { label: "All Products", href: "/products/all-products" },
        { label: "Categories", href: "/products/categories" },
        { label: "Brands", href: "/products/brands" },
        { label: "Attributes", href: "/products/attributes" },
        { label: "Attributes Sets", href: "/products/attribute-sets" },
        { label: "Variations", href: "/products/variations" },
        { label: "Tags", href: "/products/tags" },
      ],
    },
    {
      icon: <FiShoppingCart size={20} />,
      label: "Orders",
      href: "/orders",
      isDropdown: true,
      subItems: [
        { label: "Order list", href: "/orders/order-list" },
        { label: "Order details", href: "/orders/order-details" },
        { label: "Order tracking", href: "/orders/order-tracking" },
      ],
    },
    {
      icon: <FiUsers size={20} />,
      label: "Sellers",
      href: "/sellers",
      isDropdown: true,
      subItems: [
        { label: "Seller List", href: "/sellers/sellers-list" },
        { label: "seller profile", href: "/sellers/seller-profile" },
      ],
    },

    {
      icon: <FiDollarSign size={20} />,
      label: "Transactions",
      href: "/transactions",
      isDropdown: true,
    },
    {
      icon: <FiUser size={20} />,
      label: "Account",
      href: "/account",
      isDropdown: true,
    },
    {
      icon: <FiMessageSquare size={20} />,
      label: "Reviews",
      href: "/reviews",
      isDropdown: false,
    },

    {
      icon: <FiPieChart size={20} />,
      label: "Statistics",
      href: "/statistics",
      isDropdown: false,
    },
    {
      icon: <FiPieChart size={20} />,
      label: "Media",
      href: "/media",
      isDropdown: false,
    },
    {
      icon: <FiShoppingBag size={20} />,
      label: "Product Details",
      href: "/product-details",
      isDropdown: false,
    },
    {
      icon: <RiFlashlightLine size={20} />,
      label: "Flash Sales",
      href: "/flash-sales",
      isDropdown: false,
    },
    {
      icon: <RiCouponLine size={20} />,
      label: "Coupons",
      href: "/coupons",
      isDropdown: false,
    },
  ];

  const settingItems = [
    {
      icon: <FiSettings size={20} />,
      label: "Settings",
      href: "/settings",
      isDropdown: true,
    },
    {
      icon: <FiTag size={20} />,
      label: "Starter page",
      href: "/starter",
      isDropdown: false,
    },
  ];

  return (
    <div className="drawer lg:drawer-open font-sans">
      <input id="admin-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col bg-[#f8f9fa]">
        {/* TOP NAVBAR */}
        <header className="navbar bg-white border-b border-gray-100 px-4 h-16 sticky top-0 z-20">
          <div className="flex-1 gap-2">
            <label htmlFor="admin-drawer" className="btn btn-ghost lg:hidden">
              <FiMenu size={20} />
            </label>

            <div className="hidden sm:flex items-center bg-[#f0f1f3] rounded-md px-3 py-2 w-72">
              <input
                type="text"
                placeholder="Search term"
                className="bg-transparent outline-none text-sm w-full text-gray-600"
              />
              <FiSearch className="text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="indicator cursor-pointer text-gray-500">
              <span className="indicator-item badge badge-xs bg-[#088178] border-none text-white p-1.5">
                3
              </span>
              <FiBell size={20} />
            </div>
            <FiMoon size={20} className="text-gray-500 hidden md:block" />
            <div className="flex items-center gap-1 text-gray-500">
              <FiGlobe size={20} />
              <FiChevronDown size={14} />
            </div>
            <div className="flex items-center gap-2 border-l pl-4">
              <div className="avatar">
                <div className="w-9 rounded-full">
                  <img src="https://i.pravatar.cc/150" alt="user" />
                </div>
              </div>
              <FiChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side z-100">
        <label htmlFor="admin-drawer" className="drawer-overlay"></label>

        <aside
          className={`
    ${isCollapsed ? "w-20 overflow-visible" : "w-64 overflow-x-hidden"} 
    transition-all duration-300 min-h-full bg-white border-r border-gray-100 
    flex flex-col z-40
  `}
        >
          <div className=" flex items-center w-full border-b border-gray-50">
            {!isCollapsed ? (
              <div className="flex items-center justify-between w-full px-4">
                <Logo />

                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="btn btn-ghost hidden lg:flex text-gray-400 p-2"
                >
                  <LuLayoutGrid size={22} />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full my-3">
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="btn btn-ghost hidden lg:flex text-gray-400 p-2"
                >
                  <LuLayoutGrid size={22} />
                </button>
              </div>
            )}
          </div>

          <ul
            className={`menu w-full py-5 gap-1.5 text-gray-500 font-medium overflow-visible ${isCollapsed ? "px-2 max-w-2 items-center overflow-visible" : "px-3"}`}
          >
            {menuItems.map((item, idx) => {
              const isActive = path.startsWith(item.href) && item.href !== "/";

              return (
                <li key={idx} className="w-full">
                  {item.isDropdown && !isCollapsed ? (
                    <details open={isActive}>
                      {" "}
                      {/* Automatically open if a sub-link is active */}
                      <summary
                        className={`py-3 hover:bg-transparent hover:text-primary ${
                          isActive
                            ? "text-primary bg-secondary font-medium"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {item.icon} {item.label}
                        </span>
                      </summary>
                      <ul className="pl-6 space-y-1">
                        {item.subItems?.map((sub, subIdx) => {
                          const isSubActive = path === sub.href;

                          return (
                            <li key={subIdx}>
                              <Link
                                href={sub.href}
                                className={`
                      flex items-center gap-2 py-2 bg-transparent 
                      hover:bg-transparent focus:bg-transparent 
                      active:bg-transparent hover:text-primary 
                      ${isSubActive ? "text-primary font-bold" : "text-gray-500"}
                    `}
                              >
                                <span
                                  className={`h-1.5 w-1.5 rounded-full bg-current ${isSubActive ? "opacity-100" : "opacity-30"}`}
                                ></span>
                                {sub.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  ) : (
                    <NavLink
                      href={item.href}
                      className={`flex items-center gap-3 ${isCollapsed ? "justify-center tooltip tooltip-right z-100" : ""}`}
                      data-tip={isCollapsed ? item.label : ""}
                    >
                      {item.icon}
                      {!isCollapsed && <span>{item.label}</span>}
                    </NavLink>
                  )}
                </li>
              );
            })}
            <div
              className={`divider my-2 opacity-50 ${isCollapsed ? "px-2" : "px-4"}`}
            ></div>

            {settingItems.map((item, idx) => (
              <li key={idx} className="w-full">
                <NavLink
                  href={item.href}
                  className={`flex items-center ${isCollapsed ? "justify-center tooltip tooltip-right" : ""}`}
                  data-tip={isCollapsed ? item.label : ""}
                >
                  <span className="">{item.icon}</span>
                  {!isCollapsed && <span>{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default AdminLayout;
