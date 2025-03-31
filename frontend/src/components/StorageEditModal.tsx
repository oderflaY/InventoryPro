import React from "react";

const StorageEditModal = () => {

  return (
    <div className="relative flex flex-col bg-[#101F4A] border border-slate-200 w-96 rounded-lg my-6">
      <div className="relative m-2.5 items-center flex justify-center text-white h-24 rounded-md bg-[#101F4A]">
        <h3 className="text-2xl">EDIT STORAGE</h3>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="w-full max-w-sm min-w-[200px]">
          <label htmlFor="email" className="block mb-2 text-sm  text-white">
          STORAGE NAME
          </label>
          <input
            id="STORAGE NAME"
            type="name"
            className="w-full bg-white placeholder:text-slate-400 
            text-blue-950 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow
            "

            placeholder="INPUT STORAGE NAME"
          />
        </div>
        
        <div className="w-full max-w-sm min-w-[200px]">
          <label htmlFor="password" className="block mb-2 text-sm text-white">
          DESCRIPTION
          </label>
          <input
            id="DESCRIPTION"
            type="name"
            className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="INPUT DESCRIPTION"
          />
        </div>



        <div className="w-full max-w-sm min-w-[200px]">
          <label htmlFor="password" className="block mb-2 text-sm text-white">
          CATEGORY
          </label>
          <input
            id="password"
            type="password"
            className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="SELECT A CATEGORY"
          />
        </div>
        

        <div className="inline-flex items-center mt-2">
          <label className="flex items-center cursor-pointer relative">
          </label>
        </div>
      </div>
      <div className="p-6 pt-0">
        <button
          className=" bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
         CANCEL
        </button>
      </div>
    </div>
  );
}

export default StorageEditModal;

