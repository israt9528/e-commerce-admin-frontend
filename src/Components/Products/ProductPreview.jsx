"use client";

import React, { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Check,
  Star,
  Share2,
  Facebook,
  Twitter,
  Minus,
  Plus,
} from "lucide-react";

// =============================
// MAIN PRODUCT COMPONENT
// =============================
export default function ProductPreviewPage() {
  const [mainImage, setMainImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("m");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Product Data - Generic for any product
  const productData = {
    id: "PROD001",
    name: "Premium Leather Backpack",
    category: "Bags & Luggage",
    brand: "Luxury Goods",
    description:
      "Experience unparalleled quality with our premium leather backpack. Crafted from genuine full-grain leather and designed for both style and functionality, this backpack combines timeless elegance with modern convenience.",
    shortDescription: "Premium genuine leather backpack with modern design",
    sku: "BAG-2024-001",

    price: {
      current: 249.99,
      original: 349.99,
      currency: "$",
      discount: 29,
    },

    rating: 4.7,
    reviewCount: 128,
    inStock: true,
    stockCount: 15,

    tags: ["Premium", "Leather", "Backpack", "Waterproof", "Laptop Compatible"],

    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=1200&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80&auto=format&fit=crop&crop=center&h=800",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&q=80",
    ],

    colors: [
      { id: "red", name: "Burgundy", hex: "#7C2D12", available: true },
      { id: "brown", name: "Chestnut Brown", hex: "#92400E", available: true },
      { id: "black", name: "Jet Black", hex: "#1F2937", available: true },
      { id: "tan", name: "Saddle Tan", hex: "#B45309", available: false },
    ],

    sizes: [
      { id: "s", value: "Small", price: 0 },
      { id: "m", value: "Medium", price: 0 },
      { id: "l", value: "Large", price: 20 },
      { id: "xl", value: "Extra Large", price: 40 },
    ],
  };

  const selectedColorData = productData.colors.find(
    (c) => c.id === selectedColor,
  );
  const selectedSizeData = productData.sizes.find((s) => s.id === selectedSize);

  // Calculate total price
  const basePrice = productData.price.current;
  const sizePrice = selectedSizeData?.price || 0;
  const totalPrice = (basePrice + sizePrice) * quantity;
  const savings = productData.price.original - basePrice;

  // Image navigation
  const nextImage = () => {
    setMainImage((prev) => (prev + 1) % productData.images.length);
  };

  const prevImage = () => {
    setMainImage(
      (prev) =>
        (prev - 1 + productData.images.length) % productData.images.length,
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Layout First */}
      <div className="lg:hidden">
        {/* Mobile Image Gallery */}
        <div className="relative bg-gray-50">
          <div className="aspect-square relative overflow-hidden">
            <img
              src={productData.images[mainImage]}
              alt={productData.name}
              className="w-full h-full object-cover"
            />
            {/* Discount Badge */}
            {productData.price.discount > 0 && (
              <div className="absolute top-4 left-4 bg-[#088178] text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                -{productData.price.discount}% OFF
              </div>
            )}
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 p-4 overflow-x-auto">
            {productData.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(idx)}
                className={`shrink-0 w-16 h-16 rounded border overflow-hidden ${
                  mainImage === idx
                    ? "border-[#088178] ring-2 ring-[#088178]/20"
                    : "border-gray-300"
                }`}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Product Details */}
        <div className="px-4 py-6">
          {/* Product Header */}
          <div className="mb-4">
            <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              {productData.category}
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mt-1 mb-2">
              {productData.name}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(productData.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({productData.reviewCount} reviews)
                </span>
              </div>

              {/* Professional Wishlist Button - Mobile */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  isWishlisted
                    ? "bg-[#cee6e4] border-[#088178] text-[#088178]"
                    : "border-gray-300 text-gray-600 hover:border-[#088178] hover:text-[#088178]"
                }`}>
                <Heart
                  className={`w-4 h-4 ${isWishlisted ? "fill-[#088178]" : ""}`}
                />
                <span className="text-xs font-medium">
                  {isWishlisted ? "Saved" : "Save"}
                </span>
              </button>
            </div>
          </div>

          {/* Price Section */}
          <div className="mb-6">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-bold text-gray-900">
                {productData.price.currency}
                {totalPrice.toFixed(2)}
              </span>
              {productData.price.original && (
                <span className="text-lg text-gray-400 line-through">
                  {productData.price.currency}
                  {productData.price.original}
                </span>
              )}
              {savings > 0 && (
                <span className="bg-[#cee6e4] text-[#088178] px-2 py-1 rounded text-sm font-bold">
                  Save {productData.price.currency}
                  {savings.toFixed(2)}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className={`w-2 h-2 rounded-full ${
                  productData.inStock ? "bg-green-500" : "bg-red-500"
                }`}></div>
              <span
                className={`font-medium ${
                  productData.inStock ? "text-green-600" : "text-red-600"
                }`}>
                {productData.inStock
                  ? `In Stock · ${productData.stockCount} left`
                  : "Out of Stock"}
              </span>
            </div>
          </div>

          {/* SKU and Tags */}
          <div className="space-y-3 mb-6 py-4 border-y border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">SKU</span>
              <span className="font-medium text-gray-900">
                {productData.sku}
              </span>
            </div>

            <div>
              <span className="text-gray-600 block mb-2">Tags</span>
              <div className="flex flex-wrap gap-2">
                {productData.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Color Selection */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Color</h3>
              <span className="text-sm text-gray-600">
                {selectedColorData?.name}
              </span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {productData.colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  disabled={!color.available}
                  className={`relative flex flex-col items-center group ${
                    !color.available ? "opacity-50 cursor-not-allowed" : ""
                  }`}>
                  <div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      selectedColor === color.id
                        ? "border-[#088178] ring-2 ring-[#088178]/30 scale-110"
                        : "border-gray-300 group-hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.hex }}>
                    {selectedColor === color.id && (
                      <Check className="w-5 h-5 text-white drop-shadow-md" />
                    )}
                  </div>
                  <span className="text-xs mt-2 text-gray-600">
                    {color.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              Select Size
            </h3>

            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {productData.sizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`
          px-3 py-1.5 text-sm rounded-md border 
          font-medium transition-all duration-200
          shrink-0 select-none
          ${
            selectedSize === size.id
              ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-sm"
              : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
          }
        `}>
                  <span>{size.value}</span>

                  {size.price > 0 && (
                    <span className="ml-1 text-[10px] text-gray-500">
                      +{productData.price.currency}
                      {size.price}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart - Combined Section */}
          <div className="mb-8">
            <div className="space-y-4">
              {/* Quantity and Price Row */}
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                <div>
                  <span className="text-sm text-gray-600">Quantity</span>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-lg">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold text-gray-900">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-lg">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {productData.price.currency}
                        {totalPrice.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-600">Total</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                disabled={!productData.inStock}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-md ${
                  productData.inStock
                    ? "bg-[#088178] hover:bg-[#076b65] text-white hover:shadow-lg"
                    : "bg-gray-300 cursor-not-allowed text-gray-500"
                }`}>
                <ShoppingCart className="w-5 h-5" />
                {productData.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-2 gap-12">
            {/* LEFT: Image Gallery */}
            <div>
              <div className="relative bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                <div className="aspect-square relative">
                  <img
                    src={productData.images[mainImage]}
                    alt={productData.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Discount Badge */}
                  {productData.price.discount > 0 && (
                    <div className="absolute top-6 left-6 bg-[#088178] text-white px-4 py-2 rounded-lg text-sm font-bold shadow-xl">
                      -{productData.price.discount}% OFF
                    </div>
                  )}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 mt-6">
                {productData.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(idx)}
                    className={`flex-1 h-24 rounded-lg border overflow-hidden transition-all ${
                      mainImage === idx
                        ? "border-[#088178] ring-2 ring-[#088178]/20 scale-105"
                        : "border-gray-300 hover:border-gray-400"
                    }`}>
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              {/* Share Section */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Share this product</span>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Product Details with fixed height container */}
            <div className="h-full overflow-y-auto pr-4">
              <div className="space-y-6">
                {/* Product Header */}
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                    {productData.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">
                    {productData.name}
                  </h1>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(productData.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600">
                        {productData.rating}/5 · ({productData.reviewCount}{" "}
                        reviews)
                      </span>
                    </div>

                    {/* Professional Wishlist Button - Desktop */}
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                        isWishlisted
                          ? "bg-[#cee6e4] border-[#088178] text-[#088178]"
                          : "border-gray-300 hover:border-[#088178] text-gray-600 hover:text-[#088178]"
                      }`}>
                      <Heart
                        className={`w-5 h-5 ${isWishlisted ? "fill-[#088178]" : ""}`}
                      />
                      <span className="font-medium text-sm">
                        {isWishlisted
                          ? "Saved to Wishlist"
                          : "Save to Wishlist"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Price Section */}
                <div className="space-y-3">
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {productData.price.currency}
                      {totalPrice.toFixed(2)}
                    </span>
                    {productData.price.original && (
                      <span className="text-xl text-gray-400 line-through">
                        {productData.price.currency}
                        {productData.price.original}
                      </span>
                    )}
                    {savings > 0 && (
                      <span className="bg-[#cee6e4] text-[#088178] px-4 py-2 rounded-full text-sm font-bold">
                        Save {productData.price.currency}
                        {savings.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        productData.inStock ? "bg-green-500" : "bg-red-500"
                      }`}></div>
                    <span
                      className={`font-medium ${
                        productData.inStock ? "text-green-600" : "text-red-600"
                      }`}>
                      {productData.inStock
                        ? `In Stock · Only ${productData.stockCount} left`
                        : "Out of Stock"}
                    </span>
                  </div>
                </div>

                {/* SKU and Tags */}
                <div className="space-y-4 py-6 border-y border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Product Code</span>
                    <span className="font-medium text-gray-900">
                      {productData.sku}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-600 block mb-2">
                      Product Features
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {productData.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Color Selection */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Select Color
                    </h3>
                    <span className="text-gray-700 font-medium">
                      {selectedColorData?.name}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    {productData.colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        disabled={!color.available}
                        className={`flex flex-col items-center group ${
                          !color.available
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}>
                        <div
                          className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            selectedColor === color.id
                              ? "border-[#088178] ring-4 ring-[#088178]/20 scale-110"
                              : "border-gray-300 group-hover:border-gray-400"
                          }`}
                          style={{ backgroundColor: color.hex }}>
                          {selectedColor === color.id && (
                            <Check className="w-6 h-6 text-white drop-shadow-lg" />
                          )}
                        </div>
                        <span className="text-sm mt-2 text-gray-600">
                          {color.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Size
                    </h3>
                    <span className="text-xs text-gray-500">
                      Select your size
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {productData.sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size.id)}
                        className={`
          flex-1 min-w-0
          px-2.5 py-2.5
          text-xs font-medium
          rounded-lg
          border transition-all duration-200
          flex flex-col items-center justify-center
          ${
            selectedSize === size.id
              ? "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm ring-1 ring-emerald-500/30"
              : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
          }
        `}>
                        <span className="font-semibold mb-0.5">
                          {size.value}
                        </span>
                        {size.price > 0 && (
                          <span className="text-[10px] text-gray-500 font-medium">
                            +{productData.price.currency}
                            {size.price}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity and Add to Cart - Combined */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-6">
                    {/* Quantity and Price Row */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-600">Quantity</span>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                            <button
                              onClick={() =>
                                setQuantity(Math.max(1, quantity - 1))
                              }
                              className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-lg">
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-16 text-center text-xl font-bold text-gray-900">
                              {quantity}
                            </span>
                            <button
                              onClick={() => setQuantity(quantity + 1)}
                              className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-lg">
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-gray-900">
                              {productData.price.currency}
                              {totalPrice.toFixed(2)}
                            </div>
                            <div className="text-sm text-gray-600">
                              Total Amount
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      disabled={!productData.inStock}
                      className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl ${
                        productData.inStock
                          ? "bg-[#088178] hover:bg-[#076b65] text-white"
                          : "bg-gray-300 cursor-not-allowed text-gray-500"
                      }`}>
                      <ShoppingCart className="w-6 h-6" />
                      {productData.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Description Section - Below for all devices */}
      <div className="border-t border-gray-200 mt-8 lg:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Tabs Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <div className="flex justify-center gap-6 overflow-x-auto">
              {[
                { id: "description", label: "Product Description" },
                { id: "specifications", label: "Specifications" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 px-8 py-4 font-medium text-sm relative ${
                    activeTab === tab.id
                      ? "text-[#088178]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}>
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#088178] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="py-6">
            {activeTab === "description" && (
              <div className="space-y-8">
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    About This Product
                  </h3>
                  <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p>{productData.description}</p>
                    <p>
                      Designed with attention to detail, this backpack features
                      multiple compartments for organized storage, including a
                      dedicated laptop sleeve that fits up to 15-inch devices.
                      The water-resistant material ensures your belongings stay
                      dry in all weather conditions.
                    </p>
                    <p>
                      The adjustable padded shoulder straps provide maximum
                      comfort, making it perfect for daily commutes, travel, or
                      outdoor adventures. The premium leather ages beautifully,
                      developing a unique patina over time that tells your
                      story.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Product Specifications
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Dimensions & Weight
                      </h4>
                      <div className="space-y-3">
                        {[
                          { label: "Height", value: "18 inches" },
                          { label: "Width", value: "12 inches" },
                          { label: "Depth", value: "6 inches" },
                          { label: "Weight", value: "2.5 lbs" },
                          { label: "Volume", value: "25 liters" },
                        ].map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between py-3 border-b border-gray-200">
                            <span className="text-gray-600">{spec.label}</span>
                            <span className="font-medium text-gray-900">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Materials & Care
                      </h4>
                      <div className="space-y-3">
                        {[
                          { label: "Material", value: "Full-grain Leather" },
                          { label: "Lining", value: "Polyester" },
                          { label: "Zippers", value: "YKK® Metal Zippers" },
                          {
                            label: "Care Instructions",
                            value: "Wipe with damp cloth",
                          },
                          { label: "Warranty", value: "2 Years" },
                        ].map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between py-3 border-b border-gray-200">
                            <span className="text-gray-600">{spec.label}</span>
                            <span className="font-medium text-gray-900">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
