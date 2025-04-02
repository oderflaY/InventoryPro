import React from "react";

const AddItemModal = () => {
  const handleFileUpload = () => {
    document.getElementById("file-upload").click();
  };

  return (
    <div className="relative flex flex-col bg-[#101F4A] border border-slate-200 w-[20rem] rounded-xl p-3 my-4 shadow-lg">
      <h3 className="text-white text-base font-bold mb-2">ADD NEW ITEM</h3>

      <div className="flex flex-col gap-2">
        {/* Item Name */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">ITEM NAME</label>
          <input
            type="text"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Name of the item"
          />
        </div>

        {/* Image */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">IMAGE</label>
          <button
            onClick={handleFileUpload}
            className="w-full bg-white text-[#101F4A] text-xs py-2 rounded-lg border border-slate-300 shadow-md transition duration-100 hover:bg-gray-200 text-left"
          >
            Choose File
          </button>
          <input
            id="file-upload"
            type="file"
            className="hidden"
          />
        </div>

        {/* Serial Number */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">SERIAL NUMBER</label>
          <input
            type="text"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Enter serial number"
          />
        </div>

        {/* ID */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">ID</label>
          <input
            type="text"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input ID"
          />
        </div>

        {/* Regular Price and Wholesale Price */}
        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="block text-white text-xs mb-1">REGULAR PRICE</label>
            <input
              type="number"
              className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
              placeholder="Input price"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-white text-xs mb-1">WHOLESALE PRICE</label>
            <input
              type="number"
              className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
              placeholder="Input price"
            />
          </div>
        </div>

        {/* Category */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">CATEGORY</label>
          <select
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
          >
            <option>Select a category</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
        </div>

        {/* Description */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">DESCRIPTION</label>
          <textarea
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input description"
          ></textarea>
        </div>

        {/* Stock */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">STOCK</label>
          <input
            type="number"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input number of pieces"
          />
        </div>

        {/* Status */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">STATUS</label>
          <select
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
          >
            <option>Choose status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
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

export default AddItemModal;
