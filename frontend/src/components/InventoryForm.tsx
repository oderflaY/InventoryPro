import { ChangeEvent, useState } from "react";
import { createInventoryRequest } from "../api/inventories";
import { useNavigate } from "react-router-dom";

function InventoryForm() {
    const NoSpace_Enter = [" ", "Enter"];
    const NoEnter = ["Enter"];
    const [invent, setname] = useState({   //definir variables
        name: "",
        description: "Inventory"
    });
    const navigate = useNavigate(); 

    //Guardar Datos
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setname({ ...invent, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await createInventoryRequest(invent)

        if (res.ok) {
            navigate("/inventories");
        } else {
            alert('Error al agregar inventario');
        }
    };

    return (
        <div className=" bg-white p-4 h-full shadow-2xl rounded-lg">
            <h2 className="text-xl font-bold mb-4">Add new Inventory</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 grid grid-cols-2 gap-x-5 gap-y-7 pl-4 pr-4">
                    <div>
                        <label className="block text-lg font-semibold">Name</label>
                        <input
                            placeholder="Name of your inventory"
                            name="name"
                            type="text"
                            onKeyDown={(e) => NoSpace_Enter.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                            className="w-full border-2 border-transparent p-2 rounded-lg bg-gray-200"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className=" pl-10">
                        <label className="block text-lg font-semibold">Description</label>
                        <textarea
                            name="description"
                            onChange={handleChange}
                            onKeyDown={(e) => NoEnter.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                            maxLength={250}
                            rows={3}
                            placeholder="Describe your inventory"
                            className="italic resize-none w-full border-2 border-transparent p-2 rounded-lg bg-gray-200" />
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-[#11214D] p-2.5 text-1x2 text-white rounded-lg font-bold cursor-pointer w-40">
                            Create Inventory
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InventoryForm;