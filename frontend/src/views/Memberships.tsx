import { IoCheckmark, IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../components/AuthToken";


export default function Memberships() {
    const token = localStorage.getItem("token");
    const { user } = useAuth();

    return (
        <>
            <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen pt-20">
                <h2 className="text-3xl font-semibold text-gray-800 text-center leading-10">
                    Choose Subscription Plan
                </h2>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti excepturi blanditiis soluta ullam.
                </span>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">

                    <div className="bg-[#11214D] text-white p-6 rounded-2xl shadow-md text-center border-transparent">
                        <h3 className="text-xl font-semibold">
                            Free
                        </h3>
                        <p className="text-4xl font-bold mt-2">
                            0
                            <span className="text-lg">
                                /month
                            </span>
                        </p>
                        <ul className="mt-4 space-y-2 text-white">
                            <div className="flex items-center pl-10 space-x-4">
                                <IoCheckmark className="text-green-500 w-6 h-6" />
                                <li>10GB storage</li>
                            </div>

                            <div className="flex items-center pl-10 space-x-4">
                                <IoCheckmark className="text-green-500 w-6 h-6" />
                                <li>Basic integrations</li>
                            </div>

                            <div className="flex items-center pl-10 space-x-4">
                                <IoCloseSharp className="text-red-500 w-6 h-6" />
                                <li>Standard Encryption</li>
                            </div>

                            <div className="flex items-center pl-10 space-x-4">
                                <IoCloseSharp className="text-red-500 w-6 h-6" />
                                <li>Email Support</li>
                            </div>
                        </ul>
                        
                        {token && 
                            <div className="pt-20">
                                <button disabled className='font-bold bg-white text-blue-700 border-2 border-[#11214D] px-4 py-2 text-[15px] rounded-full w-[180px]'>
                                    Subscription Obtained
                                </button>
                            </div>}
                    </div>

                    <div className="bg-[#11214D] text-white p-6 rounded-2xl shadow-md text-center border-transparent">
                        <h3 className="text-xl font-semibold">
                            Premium
                        </h3>
                        <p className="text-4xl font-bold mt-2">
                            $99
                            <span className="text-lg">
                                /month
                            </span>
                        </p>
                        <ul className="mt-4 space-y-2 text-white">
                            <div className="flex items-center pl-10 space-x-4">
                                <IoCheckmark className="text-green-500 w-6 h-6" />
                                <li>10GB storage</li>
                            </div>

                            <div className="flex items-center pl-10 space-x-4">
                                <IoCheckmark className="text-green-500 w-6 h-6" />
                                <li>Basic integrations</li>
                            </div>

                            <div className="flex items-center pl-10 space-x-4">
                                <IoCheckmark className="text-green-500 w-6 h-6" />
                                <li>Standard Encryption</li>
                            </div>

                            <div className="flex items-center pl-10 space-x-4">
                                <IoCloseSharp className="text-red-500 w-6 h-6" />
                                <li>Email Support</li>
                            </div>
                        </ul>
                        {/* Si el usuario es rango premium o business no podra elegir esta opcion */}
                        {token && (user?.role?.toLowerCase() === 'premium' || user?.role?.toLowerCase() === 'business' || user?.role?.toLowerCase() === 'admin') && (
                            <div className="pt-20">
                                <button disabled className='font-bold bg-white text-blue-700 border-2 border-[#11214D] px-4 py-2 text-[15px] rounded-full w-[180px]'>
                                    Subscription Obtained
                                </button>
                            </div>
                        )}

                        {token && user?.role?.toLowerCase() === 'free' &&
                            <div className="pt-20">
                                <button className='font-bold bg-white text-blue-700 border-2 border-[#11214D] px-4 py-2 text-[15px] rounded-full w-[180px] hover:bg-[#11214D] hover:text-white hover:border-2 hover:border-white'>
                                    Choose this plan
                                </button>
                            </div>}
                        
                    </div>

                    <div className="bg-[#11214D] text-white p-6 rounded-2xl shadow-md text-center border-transparent w-75">
                        <h3 className="text-xl font-semibold">
                            Business
                        </h3>
                        <p className="text-4xl font-bold mt-2">
                            $299
                            <span className="text-lg">
                                /month
                            </span>
                        </p>
                        <ul className="mt-4 space-y-2 text-white">
                            <div className="flex items-center pl-10 space-x-4">
                                <IoCheckmark className="text-green-500 w-6 h-6" />
                                <li>10GB storage</li>
                            </div>

                            <div className="flex items-center pl-10 space-x-4">
                                <IoCheckmark className="text-green-500 w-6 h-6" />
                                <li>Basic integrations</li>
                            </div>

                            <div className="flex items-center pl-10 space-x-4">
                                <IoCheckmark className="text-green-500 w-6 h-6" />
                                <li>Standard Encryption</li>
                            </div>

                            <div className="flex items-center pl-10 space-x-4">
                                <IoCheckmark className="text-green-500 w-6 h-6" />
                                <li>Email Support</li>
                            </div>
                        </ul>
                        {/* Si el usuario es rango business no podra elegir esta opcion */}
                        {token &&  (user?.role?.toLowerCase() === 'business' || user?.role?.toLowerCase() === 'admin') && (
                            <div className="pt-20">
                                <button disabled className='font-bold bg-white text-blue-700 border-2 border-[#11214D] px-4 py-2 text-[15px] rounded-full w-[180px]'>
                                    Subscription Obtained
                                </button>
                            </div>
                        )}
    
                        {token && (user?.role?.toLowerCase() === 'free' || user?.role?.toLowerCase() === 'premium') &&
                            <div className="pt-20">
                                <button className='font-bold bg-white text-blue-700 border-2 border-[#11214D] px-4 py-2 text-[15px] rounded-full w-[180px] hover:bg-[#11214D] hover:text-white hover:border-2 hover:border-white'>
                                    Choose this plan
                                </button>
                            </div>}
                    </div>
                </div>
                {!token &&
                    <div>
                        <h1 className="pt-5 text-2xl font-semibold text-gray-800 text-center leading-10">It looks like you're not registered yet.</h1>
                        <h2 className="text-xl text-gray-800 text-center ">Please log in to your account first to purchase a subscription.</h2>
                    </div>}
                {!token &&
                    <div className="pt-2 justify-center items-center">
                        <a href="/auth/login">
                            <button className='rounded-lg font-bold bg-[#11214D] text-white border-2 border-white px-4 py-2 text-[15px] w-[180px] hover:bg-white hover:text-[#11214D] hover:border-2 hover:border-[#11214D]'>
                                Login
                            </button>
                        </a>
                    </div>}
            </div>

        </>
    );
}