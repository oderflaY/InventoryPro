import { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className=" pt-5 items-center">
      <label className="bg-[#11214D] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-colors">
        Subir archivo
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="hidden" 
        />
      </label>
      {file && (
        <p className="mt-2 text-gray-700">Archivo seleccionado: {file.name}</p>
      )}
    </div>
  );
};

export default FileUpload;
