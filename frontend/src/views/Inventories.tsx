import { List, Tag } from "lucide-react";
import { Navigate } from "react-router-dom";

export default function Inventories() {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/auth/login" replace />;
    }
    return (
        <>
            <div className="relative h-15">
                <a href="/add_inventory">
                <button className="absolute top-0 right-0 m-2 mx-5 bg-[#11214D] text-white border-2 border-transparent px-4 py-2 font-medium text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border hover:border-[#11214D] hover:font-medium">
                    Add New Inventary
                </button>
                </a>
            </div>
            <div className="flex gap-8 pl-7 bg-gray-100 min-h-screen">
                <div className="w-180 h-60 p-4 shadow-2xl rounded-lg bg-white">
                    <div className="flex justify-between items-center border-b pb-2 mb-2">
                        <h2 className="text-lg font-semibold">Inventory_Name</h2>
                        <div className="flex gap-2 text-gray-500">
                            <Tag className="w-5 h-5" />
                            <List className="w-5 h-5" />
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-600 text-1xl italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, totam? Facilis iure id possimus ipsum incidunt, molestiae necessitatibus ea ratione, impedit rerum aliquam in, vitae ad? Libero reprehenderit vero voluptates.</p>
                    </div>
                </div>

                <div className="w-180 h-75 p-4 shadow-md rounded-lg bg-white">
                    <div className="flex justify-between items-center border-b pb-2 mb-2">
                        <h2 className="text-lg font-semibold">inventory</h2>
                        <div className="flex gap-2 text-gray-500">
                            <Tag className="w-5 h-5" />
                            <List className="w-5 h-5" />
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm">blabla</p>
                    </div>
                </div>
                {/* 
                <div className="justify-center items-center">
                    <a href="/add_product">
                        <button className='rounded-lg font-bold bg-[#11214D] text-white border-2 border-white px-4 py-2 text-[15px] w-[180px] hover:bg-white hover:text-[#11214D] hover:border-2 hover:border-[#11214D]'>
                            Add Products
                        </button>
                    </a>
                </div>*/}
            </div>

        </>
    );
}
