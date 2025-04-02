import { ChangeEvent, useState } from "react";
import { createInventoryRequest } from "../api/inventories";

const InventoryForm2 = ({ onClose }: { onClose: () => void }) => {
    const NoSpace_Enter = [" ", "Enter"];
    const NoEnter = ["Enter"];
    const [invent, setname] = useState({
        name: "",
        description: "Inventory"
    });

    //Guardar Datos
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setname({ ...invent, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await createInventoryRequest(invent)

        if (res.ok) {
            window.location.href = '/inventories';
        } else {
            alert('Error al agregar inventario');
        }
    };

    return (
        <div className="z-50 absolute ml-2 p-4 shadow-lg  bg-[#101F4A] border border-slate-200 w-96 rounded-lg my-6 text-white">
            <h2 className="text-white text-lg">Add new Inventory</h2>
            <form onSubmit={handleSubmit}>
                <label className="text-white block">Name</label>
                <input
                    name="name"
                    className="w-full p-2 rounded border" 
                    placeholder="Name"
                    onKeyDown={(e) => NoSpace_Enter.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                    onChange={handleChange}
                    required
                    />

                <label className="text-white block mt-2">Description</label>
                <input
                    name="description"
                    className="w-full p-2 rounded border" placeholder="Description"
                    onChange={handleChange}
                    onKeyDown={(e) => NoEnter.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                    />

                <label className="text-white block mt-2">Category</label>
                <select className="w-full p-2 rounded border">
                    <option>Select a Category</option>
                </select>

                <div className="flex gap-37 mt-2">
                    <button className="bg-gray-600 text-white px-7 py-2 rounded" onClick={onClose}>Cancel</button>
                    <button type="submit" className="bg-green-500 text-white px-7 py-2 rounded">Create</button>
                </div>

            </form>
        </div>
    );
}

export default InventoryForm2;

