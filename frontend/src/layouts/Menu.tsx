import { Outlet } from "react-router-dom";
import { Search, Bell, MessageCircle, ChevronDown, BarChart } from "lucide-react";
import { FaBoxArchive } from "react-icons/fa6";
import { useState } from "react";
import { useAuth } from "../components/AuthToken";
import { FaBars, FaRegUser, FaTimes } from "react-icons/fa";
import { MdLogout, MdOutlineAdminPanelSettings } from "react-icons/md";
import { IoSettingsOutline, IoSparklesOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

export default function Menu() {
  const [OpUsOpen, setopUsOpen] = useState(false);

  const token = localStorage.getItem("token");
  const { user } = useAuth();    // Todos los datos del usuario con token

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);   //Abrir
  };

  return (
    <>
      <div>
        <div
          className={` z-50 fixed top-0 left-0 h-full bg-[#11214D] text-white transition-transform duration-200 ${menuOpen ? 'transform-none' : '-translate-x-full'}`}
          style={{ width: '250px' }}
        >
          {/* Secciones del menu */}

          <div className="flex items-center space-x-2 p-4 shadow">   {/* Abrir / Cerrar Menu */}
            <button
              onClick={toggleSidebar}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <a href="/dashboard">
              <img src="/images-home/logo_w.png" className="h-[6vmin] w-[26vmin] px-[0.9vmin]" alt="logo" />
            </a>
          </div>

          <div className="pace-y-0.5 pt-2 pl-4 pb-2">

            <div className="flex items-center space-x-1">
              <BarChart />
              <span className="font-semibold">Statistics</span>
            </div>
            <ul className="pl-7 text-xs leading-5">
              <a href="#">
                <li className="">Latest sales</li>
              </a>

              <a href="#">
                <li>Sales by category</li>
              </a>

              <a href="#">
                <li>All sales</li>
              </a>

              <a href="#">
                <li>Best selling products</li>
              </a>

            </ul>
          </div>

          <div className="pace-y-0.5 pt-2 pl-4 pb-2">
            <div className="flex items-center space-x-1">
              <HiOutlineCurrencyDollar size={20}/>
              <span className="font-semibold">Sales</span>
            </div>
            <ul className="pl-7 text-xs leading-5">
              <a href="#">
                <li className="">Gross sales</li>
              </a>

              <a href="#">
                <li>Net sales</li>
              </a>

              <a href="#">
                <li>Cash sales</li>
              </a>

              <a href="#">
                <li>Card sales</li>
              </a>

            </ul>
          </div>

          <div className="pace-y-0.5 pt-2 pl-4 pb-2">
            <div className="flex items-center space-x-1">
              <FaBoxArchive  />
              <span className="font-semibold">Inventories</span>
            </div>
            <ul className="pl-7 text-xs leading-5">
              <a href="/inventories">
                <li>My Inventories</li>
              </a>

              <a href="#">
                <li>Inventories by category</li>
              </a>

            </ul>
          </div>

          <div className="space-y-0.5 pt-2 pl-4 pb-2">
            <div className="flex items-center space-x-1">
              <FaRegUser  />
              <span className="font-semibold">Profile</span>
            </div>
            <ul className="pl-7 text-xs leading-5">
              <a href="/my-profile">
                <li>My Profile</li>
              </a>

              <a href="/my-profile">
                <li>Personal Information</li>
              </a>

              <a href="/my-profile">
                <li>Address</li>
              </a>

            </ul>
          </div>

          <div className="space-y-0.5 pl-4">
            <a href="#">
              <div className="flex items-center space-x-1">
              <IoSettingsOutline     />
              <span className="font-semibold">Settings</span>
            </div>
            </a>
            
          </div>

          <div className="space-y-0.5 pl-4 pt-2">
          <a href="#">
            <div className="flex items-center space-x-1">
              <IoSparklesOutline   />
              <span className="font-semibold">Upgrade+</span>
            </div>
            </a>
          </div>

          {token && user?.role?.toLowerCase() === 'admin' &&

            <div className="space-y-0.5 p-4">
              <div className="flex items-center space-x-1">
                <MdOutlineAdminPanelSettings />
                <span className="font-semibold">Admin</span>
              </div>
              <ul className="pl-7 text-xs leading-5">
                <a href="#">
                  <li>Setting Admin</li>
                </a>

                <a href="#">
                  <li>Setting Admin</li>
                </a>

              </ul>
            </div>}

            <div className="space-y-0.5 pl-4 pt-2">
          <a onClick={() => {
                    localStorage.removeItem("token"); // Cerrar sesión
                    window.location.href = "/"; // Redirigir al login
                  }}>
            <div className="text-red-400 flex items-center space-x-1">
              <MdLogout/>
              <span className="font-semibold">LogOut</span>
            </div>
            </a>
          </div>
        </div>

        <header className="flex items-center justify-between bg-white shadow p-4 relative">
          {/* Logo */}
          <div className="flex items-center space-x-2">  
            <button
              onClick={toggleSidebar}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <a href="/dashboard">
              <img src="/images-home/logo_2.png" className="h-[6vmin] w-[26vmin] px-[0.9vmin]" alt="logo" />
            </a>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center w-1/3">
            <Search className="absolute left-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Type to search..."
              className="bg-gray-100 w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#11214D]"
            />
          </div>

          {/* Icons & Profile */}
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-500 hover:text-[#11214D] cursor-pointer" size={20} />
            <MessageCircle className="text-gray-500 hover:text-[#11214D] cursor-pointer" size={20} />

            {/* Profile */}
            <div className="relative">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setopUsOpen(!OpUsOpen)}>
                <img src="/user.png" alt="User" className="h-8 w-8 rounded-full" />
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">{user?.username}</p>
                  <p className="text-xs text-gray-500">{user?.role}</p>
                </div>
                <ChevronDown className="text-gray-500" size={18} />
              </div>

              {/* Profile Menu */}
              {OpUsOpen && (
                <div className="z-50 absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg  pt-2 text-sm ">
                  <a href="/my-profile" className="block px-4 py-2 hover:bg-gray-100 hover:font-bold hover:rounded-lg">Profile</a>

                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:font-bold hover:rounded-lg">Settings</a>

                  {token && (user?.role?.toLowerCase() === 'free' || user?.role?.toLowerCase() === 'premium') &&
                    <a href="/memberships" className="block px-4 py-2 hover:bg-yellow-200 hover:font-bold hover:rounded-lg ">Upgrade+</a>
                  }

                  <a onClick={() => {
                    localStorage.removeItem("token"); // Cerrar sesión
                    window.location.href = "/"; // Redirigir al login
                  }} className="block px-4 py-2 text-red-500 hover:bg-red-500 hover:text-white hover:font-bold hover:rounded-lg ">
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>
        <div className={` flex-grow transition-all duration-300 ${menuOpen ? 'ml-[250px]' : 'ml-0'}`}
        >
          <Outlet />
        </div>

      </div>
    </>
  );
}
