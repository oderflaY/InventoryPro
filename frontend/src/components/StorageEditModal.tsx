
const EditStorageModal = () => {
  return (
    <div className="relative flex flex-col bg-[#101F4A] border border-slate-200 w-[20rem] rounded-xl p-3 my-4 shadow-lg">
      <h3 className="text-white text-base font-bold mb-2">EDIT STORAGE</h3>

      <div className="flex flex-col gap-2">
        {/* Storage Name */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">STORAGE NAME</label>
          <input
            type="text"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input storage name"
          />
        </div>

        {/* Description */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">DESCRIPTION</label>
          <textarea
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Input description"
          ></textarea>
        </div>

        {/* Delete Storage */}
        <div className="w-full">
          <button
            className="w-full bg-red-600 text-white text-xs font-bold py-2 rounded-lg shadow-md transition duration-100 hover:bg-red-700"
          >
            DELETE STORAGE
          </button>
        </div>

        {/* Category */}
        <div className="w-full">
          <label className="block text-white text-xs mb-1">CATEGORY</label>
          <input
            type="text"
            className="w-full bg-white text-[#101F4A] text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-500 shadow-sm"
            placeholder="Name of the new category"
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

export default EditStorageModal;
