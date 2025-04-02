import { useNavigate } from "react-router-dom";
import { HiOutlinePencilAlt } from "react-icons/hi";

import { useEffect, useState } from "react";
import { getUserInventories } from "../api/inventories";
import { Inventory } from "../interface/inventory.interface";
import { useAuth } from "../components/AuthToken";
import InventoryForm2 from "../components/InventoryForm";

export default function Inventories() {
    const navigate = useNavigate();
    const [inventories, setInventories] = useState<Inventory[]>([]);

    const [AddInvOpen, setAddInvOpen] = useState(false);

    // Obtener los datos del usuario del localStorage
    const { user } = useAuth();

    useEffect(() => {
        if (user && user.id) {
            getUserInventories(user.id)
                .then((data) => {
                    setInventories(data);
                })
                .catch(console.error)
        }
    }, [user]);
 
    return (
        <>
            <div className="relative h-15">
                <button className="absolute top-0 right-0 m-2 mx-5 my-3 bg-[#11214D] text-white border-2 border-transparent px-4 py-2 font-medium text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border-2 hover:border-[#11214D] hover:font-medium"
                    onClick={() => setAddInvOpen(!AddInvOpen)}>
                    Add New Inventary
                </button>
            </div>

            {AddInvOpen && (
                <div className="relative inline-block pl-282 top-full ">
                    {/* Mostrar modal si isModalOpen es true */}
                    {AddInvOpen && <InventoryForm2 onClose={() => setAddInvOpen(false)} />}
                </div>

            )}
            {inventories.length === 0 ? (
                <div>
                    <p className="text-center font-bold text-[#11214D]">You have no inventories created.</p>
                </div>
            ) : (

                <div className="grid grid-cols-2 gap-x-5 gap-y-7 pl-4 pr-4">

                    {inventories.map((inv, index) => (
                        <div key={index} className="p-4 h-45 shadow-2xl rounded-lg bg-white">
                            <div className="relative flex items-center justify-center border-b pb-2 mb-2">
                                <h2 onClick={() => navigate(`/inventory/${inv.id}/products`)} className=" text-lg font-semibold">{inv.name}</h2>
                                <a href="#">
                                    <span className="absolute right-0">
                                        <HiOutlinePencilAlt className="w-5 h-5 cursor-pointer text-black" />
                                    </span>
                                </a>
                            </div>
                            <div onClick={() => navigate(`/inventory/${inv.id}/products`)}>
                                <p className="text-gray-600 text-1xl italic break-words whitespace-normal">{inv.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            )}
        </>
    );
}
