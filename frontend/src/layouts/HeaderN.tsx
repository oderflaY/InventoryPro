import { Outlet } from "react-router-dom";

export default function HeaderN() {
    const token = localStorage.getItem("token");

    return (
        <>
            {/* Header  */}
            <header className="fixed top-0 left-0 w-full h-[60px] bg-white text-black flex items-center justify-between px-5 shadow-md z-[1000]">
                
                {/* Si no hay token muestra todo normal*/}
                {!token &&
                <a href='/homepage'>
                    <img src="/images-home/logo_2.png" className="h-[7vmin] w-[28vmin] px-[0.9vmin]" alt="logo" />
                </a> }
                {!token &&
                <nav className="flex-1 flex justify-center space-x-8">
                    <a className="text-black text-[16px] font-bold hover:underline" href="/homepage">Home</a>
                    <a className="text-black text-[16px] font-bold hover:underline" href="#">Servicies</a>
                    <a className="text-black text-[16px] font-bold hover:underline" href="#">Products</a>
                    <a className="text-black text-[16px] font-bold hover:underline" href="#">Contact</a>
                </nav>}
                {!token &&
                <div className="flex gap-2">
                    <a href='/auth/login'>
                        <button className="font-medium bg-[#11214D] border-2 text-white border-transparent px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border-2 hover:border-[#11214D]">Login</button>
                    </a>

                    <a href='/auth/register'>
                        <button className="font-medium bg-[#11214D] border-2 text-white border-transparent px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border-2 hover:border-[#11214D]">Sign Up</button>
                    </a>
                </div> }

                {/* Si hay token muestra solo lo permitido*/}
                {token &&
                    <img src="/images-home/logo_2.png" className="h-[7vmin] w-[28vmin] px-[0.9vmin]" alt="logo" />
                }
                {token &&
                <nav className="flex-1 flex justify-center space-x-8">
                    <a className="text-black text-[16px] font-bold hover:underline" href="/dashboard">Dashboard</a>
                </nav>}
        
                {/* Si hay token muestra el boton de cerrar sesion */}
                {token &&
                <div className="flex gap-2">
                    <button onClick={() => {
                    localStorage.removeItem("token"); // Cerrar sesión
                    window.location.href = "/homepage"; // Redirigir al login
                  }} className="bg-[#11214D] text-white border-2 border-transparent px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border hover:border-[#11214D]">
                        Log out
                    </button>
                </div> }

                <hr></hr>
            </header>
            <Outlet />
        </>
    )
}