import React from "react";

const AddNewSellModal = () => {
  return (
    <div className="relative flex flex-col bg-[#101F4A] border border-slate-200 w-[20rem] rounded-xl p-3 my-4 shadow-lg">
      <h3 className="text-white text-base font-bold mb-2">ADD NEW SELL</h3>

      <div className="flex flex-col gap-2">
        {/* Item Name */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">ITEM NAME</label>
          <input
            type="text"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input item name"
          />
        </div>

        {/* Serial Number */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">SERIAL NUMBER</label>
          <input
            type="text"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input serial number"
          />
        </div>

        {/* Item Number */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">ITEM NUMBER</label>
          <input
            type="number"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input item number"
            required
          />
        </div>

        {/* Type of Sell */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">TYPE OF SELL</label>
          <select
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            required
          >
            <option value="" disabled selected>Select a type of sell</option>
            <option value="normal">Normal</option>
            <option value="wholesale">Wholesale</option>
          </select>
        </div>

        {/* Payment */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">PAYMENT</label>
          <select
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            required
          >
            <option value="" disabled selected>Select a type of payment</option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
          </select>
        </div>

        {/* Pieces */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">PIECES</label>
          <input
            type="number"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input number of pieces"
            required
          />
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

export default AddNewSellModal;
