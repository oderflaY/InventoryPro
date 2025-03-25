import { ChangeEvent, useState } from "react";
import { createInventoryRequest } from "../api/inventory";

function InventoryForm() {
    const [invent, setname] = useState({   //definir variables
        name: ""
    });

    //Guardar Datos
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setname({ ...invent, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await createInventoryRequest(invent)

        if (res.ok) {
            console.log("Enviando a la API:", invent);
            alert('Inventario agregado exitosamente');
        } else {
            alert('Error al agregar inventario');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Agregar Inventario</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Nombre</label>
                    <input
                        name="name"
                        type="text"
                        className="w-full p-2 border rounded"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Agregar Inventario
                </button>
            </form>
        </div>
    );
};

export default InventoryForm;