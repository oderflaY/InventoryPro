import { Edit2 } from "lucide-react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/AuthToken";


export default function Profile() {
    const token = localStorage.getItem("token");
    const { user } = useAuth();

    if (!token) {
        return <Navigate to="/auth/login" replace />;
    }
    return (
        <>
            <div className="p-5">
                <div className="h-full bg-white p-4 shadow-2xl rounded-lg">
                    <h2 className="text-2xl font-bold mb-6 pl-5">My profile</h2>
                    <div className="border-b p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img
                                src="/user.png"
                                alt="Profile"
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">{user?.username}</h3>
                                <p className="text-gray-500">{user?.role}</p>
                            </div>
                        </div>
                        <span className="cursor-pointer bg-[#11214D] text-white border-2 border-transparent px-4 py-2 font-medium text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border-2 hover:border-[#11214D] hover:font-medium">
                                <button className="flex items-center gap-1">
                                    Edit <Edit2 size={16} />
                                </button>
                            </span>
                    </div>

                    <div className="border-b mt-4 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-lg">Personal Information</h4>
                            <span className="cursor-pointer bg-[#11214D] text-white border-2 border-transparent px-4 py-2 font-medium text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border-2 hover:border-[#11214D] hover:font-medium">
                                <button className="flex items-center gap-1">
                                    Edit <Edit2 size={16} />
                                </button>
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm ">
                            <p><strong>First name:</strong><text className="italic"> {user?.firstname} </text> </p>
                            <p><strong>Last name:</strong><text className="italic"> {user?.lastname} </text> </p>
                            <p><strong>Biography:</strong><text className="italic"> {user?.bibliography} </text> </p>
                            <p><strong>Email address:</strong><text className="italic"> {user?.email} </text> </p>
                            <p><strong>Phone:</strong><text className="italic"> {user?.phone} </text> </p>
                        </div>

                    </div>

                    <div className=" mt-4 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-lg">Address</h4>
                            <span className="cursor-pointer bg-[#11214D] text-white border-2 border-transparent px-4 py-2 font-medium text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border-2 hover:border-[#11214D] hover:font-medium">
                                <button className="flex items-center gap-1">
                                    Edit <Edit2 size={16} />
                                </button>
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm ">
                            <p><strong>Country:</strong><text className="italic"> {user?.country} </text> </p>
                            <p><strong>Postal Code:</strong><text className="italic"> {user?.postalcode} </text> </p>
                            <p><strong>City:</strong><text className="italic"> {user?.city} </text> </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
