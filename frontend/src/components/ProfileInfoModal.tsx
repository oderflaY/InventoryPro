import React from "react";

const PersonalInformationModal = () => {
  return (
    <div className="relative flex flex-col bg-[#101F4A] border border-slate-200 w-[20rem] rounded-xl p-3 my-4 shadow-lg">
      <h3 className="text-white text-base font-bold mb-2">PERSONAL INFORMATION</h3>

      <div className="flex flex-col gap-2">
        {/* First Name */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">FIRST NAME</label>
          <input
            type="text"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input first name"
          />
        </div>

        {/* Last Name */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">LAST NAME</label>
          <input
            type="text"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input last name"
          />
        </div>

        {/* Biography */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">BIOGRAPHY</label>
          <textarea
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input biography"
          ></textarea>
        </div>

        {/* Email Address */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">E-MAIL ADDRESS</label>
          <input
            type="email"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input your e-mail address"
            pattern=".+@.+"
            title="Please enter a valid email address with an '@'."
            required
          />
        </div>

        {/* Phone */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">PHONE</label>
          <input
            type="tel"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input phone number"
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

export default PersonalInformationModal;
