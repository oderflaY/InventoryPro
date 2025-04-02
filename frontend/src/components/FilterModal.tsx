import React from "react";

const ProductStatusModal = () => {
  return (
    <div className="relative flex flex-col bg-[#101F4A] border border-slate-200 w-[20rem] rounded-xl p-3 my-4 shadow-lg">
      <h3 className="text-white text-base font-bold mb-2">PRODUCT STATUS</h3>

      <div className="flex flex-col gap-2">
        {/* Product Status */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">PRODUCT STATUS</label>
          <select
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
          >
            <option value="all">All</option>
            <option value="last-sells">Last Sells</option>
            <option value="most-popular">Most Popular</option>
            <option value="less-sells">Less Sells</option>
          </select>
        </div>

        {/* Product Type */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">PRODUCT TYPE</label>
          <div className="flex gap-2">
            <button
              className="w-1/2 bg-white text-[#101F4A] text-xs font-bold py-2 rounded-lg border border-slate-300 shadow-md transition duration-100 hover:bg-gray-200"
            >
              Retail
            </button>
            <button
              className="w-1/2 bg-white text-[#101F4A] text-xs font-bold py-2 rounded-lg border border-slate-300 shadow-md transition duration-100 hover:bg-gray-200"
            >
              Wholesale
            </button>
          </div>
        </div>

        {/* Sort By */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">SORT BY</label>
          <button
            className="w-full bg-white text-[#101F4A] text-xs font-bold py-2 rounded-lg border border-slate-300 shadow-md transition duration-100 hover:bg-gray-200"
          >
            Alphabetically A-Z
          </button>
        </div>

        {/* Stock Alert */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">STOCK ALERT</label>
          <select
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
          >
            <option value="all-stock">All Stock</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Category */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">CATEGORY</label>
          <select
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
          >
            <option value="all-products">All Products</option>
          </select>
        </div>

        {/* Price */}
        <div className="w-full flex gap-2">
          <div className="w-1/2">
            <label className="block text-white text-xs mb-1">MINIMUM PRICE</label>
            <input
              type="number"
              className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
              placeholder="Min price"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-white text-xs mb-1">MAXIMUM PRICE</label>
            <input
              type="number"
              className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
              placeholder="Max price"
              required
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          className="w-[45%] bg-white text-[#101F4A] text-xs font-bold py-2 rounded-lg border border-slate-300 shadow-md transition duration-100 hover:bg-gray-200"
        >
          CANCEL
        </button>
        <button
          className="w-[45%] bg-[#1E3A8A] text-white text-xs font-bold py-2 rounded-lg shadow-md transition duration-100 hover:bg-[#172A67]"
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default ProductStatusModal;
