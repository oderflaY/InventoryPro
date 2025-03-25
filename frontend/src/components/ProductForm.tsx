import { MdAttachMoney } from "react-icons/md";
import FileUpload from "./ImageUpl";
import { ChangeEvent, FormEvent, useState } from "react";
import { createProductRequest } from "../api/product";
import { useNavigate } from "react-router-dom";


function ProductForm() {
    const CharactersNo = ["Enter", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", ";", ":", "'", "\"", "`", "~",
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", "\\", "/", "?", "<", ">",
        "ñ", "Ñ", "á", "é", "í", "ó", "ú", "ü", "¡", "¿", "/", "*", "."];

    const NoSpace_Enter = [" ", "Enter"];
    const NoEnter = ["Enter"];
    const NoNumber = ["Enter", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const NoLetters = ["Enter", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
        "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
        "t", "u", "v", "w", "x", "y", "z", "?", "¿", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", "/", ":", ";", 
        "<", "=", ">", "?", "@", "[", '\'', ']', '^', '_', "`", "{", "|", "}", "~"];

    const [formProduct, setFormProduct] = useState({
        name: '',
        serial: '',
        category: '',
        regu: '',
        mayo: '',
        stock: '',
        status: 'Available',
        description: '',
        imageurl: ''
    });

    const [errors, setErrors] = useState<{ name?: string; serial?: string; category?: string; regu?: string;  mayo?: string; stock?: string; description?: string;}>({});
    const navigate = useNavigate();

    //Guardar Datos
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormProduct({ ...formProduct, [e.target.name]: e.target.value });
    }

    //IDKKKKKK
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});

        const res = await createProductRequest(formProduct)
        const data = await res.json()   //Convertir de json a string
        console.log("Respuesta del backend:", data);

        if (!res.ok) {
            const newErrors: any = {};
            if (Array.isArray(data.message)) {
                data.message.forEach((msg: string) => {                
                    if (msg.toLowerCase().includes("name")) newErrors.name = msg;
                    if (msg.toLowerCase().includes("serial")) newErrors.serial = msg;
                    if (msg.toLowerCase().includes("category")) newErrors.category = msg;

                    if (msg.toLowerCase().includes("regu")) newErrors.regu = msg;
                    if (msg.toLowerCase().includes("mayo")) newErrors.mayo = msg;

                    if (msg.toLowerCase().includes("stock")) newErrors.stock = msg;
                    if (msg.toLowerCase().includes("description")) newErrors.description = msg;
                });
            } else {
                newErrors.general = "Error entering data";
            }
            //console.error('Error:', newErrors);
            setErrors({ ...newErrors });
        } else {
            setErrors({});
            navigate("/dashboard");
        }
    }

    return (
        <div className="bg-white w-full h-155 rounded-lg">
            <form onSubmit={handleSubmit}>
                <div className=" pl-10 pt-8 pr-10 grid grid-cols-3 gap-6">
                    <div>
                        <label className="text-lg font-semibold">Product Name</label>
                        <input 
                        name="name" 
                        onChange={handleChange} 
                        onKeyDown={(e) => CharactersNo.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                        type="text" 
                        placeholder="Name cool" 
                        className=" w-full border-2 border-transparent p-2 rounded-lg bg-gray-200"/>

                        {errors.name && <p className="text-red-500 text-sm font-bold">⚠️ {errors.name}</p>}
                    </div>
                    <div className=" pl-10">
                        <label className="text-lg font-semibold">Serial Number</label>
                        <input 
                        name="serial"
                        type="text"  
                        placeholder="XXXXXXXX" 
                        onChange={handleChange} 
                        onKeyDown={(e) => NoSpace_Enter.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                        className=" w-full border-2 border-transparent p-2 rounded-lg bg-gray-200"/>
                        {errors.serial && <p className="text-red-500 text-sm font-bold">⚠️ {errors.serial}</p>}
                    </div>
                    
                    <div className="pl-10">
                        <label className="text-lg font-semibold">Category</label>
                        <input 
                        name="category" 
                        onChange={handleChange} 
                        onKeyDown={(e) => NoNumber.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                        type="text" 
                        placeholder="idkkk" 
                        className="w-full border-2 border-transparent p-2 rounded-lg bg-gray-200" />
                        {errors.category && <p className="text-red-500 text-sm font-bold">⚠️ {errors.category}</p>}
                    </div>                    
                    {/* */}
                    <div>
                        <label className="text-lg font-semibold">Regular Price</label>
                        <div className="relative"> 
                            <input 
                            name="regu" 
                            onChange={handleChange} 
                            onKeyDown={(e) => NoLetters.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                            type="text" 
                            placeholder="00.00" 
                            className="w-full border-2 border-transparent p-2 rounded-lg bg-gray-200"/>

                            <MdAttachMoney className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        {errors.regu && <p className="text-red-500 text-sm font-bold">⚠️ {errors.regu}</p>}
                    </div>

                    <div className="pl-10">
                        <label className="text-lg font-semibold">Stock</label>
                        <input 
                        name="stock" 
                        onChange={handleChange} 
                        onKeyDown={(e) => NoLetters.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                        type="text" 
                        placeholder="000" 
                        className=" w-full border-2 border-transparent p-2 rounded-lg bg-gray-200"/>

                        {errors.stock && <p className="text-red-500 text-sm font-bold">⚠️ {errors.stock}</p>}
                    </div>

                    <div className="pl-10">
                        <label className="text-lg font-semibold">Wholesale Price</label>
                        <div className="relative">
                            <input 
                            name="mayo" 
                            onChange={handleChange}
                            onKeyDown={(e) => NoLetters.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                            type="text" 
                            placeholder="00.00" 
                            className="w-full border-2 border-transparent p-2 rounded-lg bg-gray-200"/>

                            <MdAttachMoney className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        {errors.mayo && <p className="text-red-500 text-sm font-bold">⚠️ {errors.mayo}</p>}
                    </div>
                    {/* */}
                    <div>
                        <label className="text-lg  font-semibold">Status</label>
                        <input 
                            disabled
                            name="status" 
                            onChange={handleChange} 
                            type="text" 
                            className="font-medium w-full border-2 border-transparent p-2 rounded-lg bg-gray-300"
                            value={formProduct.status}/>
                    </div>
                </div>
                {/* */}
                <div className=" pl-10 pt-8 pr-10 grid grid-cols-2 gap-6">
                    <div>
                        <label className="text-lg font-semibold">Description</label>
                        <textarea 
                        name="description" 
                        onChange={handleChange}
                        onKeyDown={(e) => NoEnter.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                        maxLength={250} 
                        rows={4} 
                        placeholder="blablablablabla" 
                        className="italic resize-none w-full border-2 border-transparent p-2 rounded-lg bg-gray-200" />

                        {errors.description && <p className="text-red-500 text-sm font-bold">⚠️ {errors.description}</p>}
                    </div>
                    <div className="pl-10">
                        <label className="text-lg font-semibold">Image</label>
                        <FileUpload />
                    </div>
                </div>
                {/* */}
                <div className="text-center pt-2">
                    <button
                        type="submit"
                        className="bg-blue-900 p-3 text-lg text-white rounded-lg font-bold cursor-pointer w-56"
                    >Save </button>
                </div>
            </form>
        </div>
    )
}

export default ProductForm;
