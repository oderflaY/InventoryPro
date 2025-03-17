import { Outlet } from "react-router-dom";

export default function Hearder() {
  return (
    <>
      <div>
        {/* Header  */}
      <header className="fixed top-0 left-0 w-full h-[60px] bg-white text-black flex items-center justify-between px-5 shadow-md z-[1000]">
        <a href='#'>
          <img src="/images-home/logo_2.png" className="h-[7vmin] w-[28vmin] px-[0.9vmin]" alt="logo" />
        </a>

        <nav className="flex gap-5">
          <a className="text-black text-[16px] font-bold hover:underline" href="#">Home</a>
          <a className="text-black text-[16px] font-bold hover:underline" href="#">Servicies</a>
          <a className="text-black text-[16px] font-bold hover:underline" href="#">Products</a>
          <a className="text-black text-[16px] font-bold hover:underline" href="#">Contact</a>
        </nav>

        <div className="flex gap-2">
          <a href='/auth/login'>
          <button className="bg-[#11214D] text-white border-none px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border hover:border-[#11214D]">Login</button>
          </a>

          <a href='/auth/register'>
          <button className="bg-[#11214D] text-white border-none px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border hover:border-[#11214D]">Sign Up</button>
          </a>
        </div>

        <hr></hr>
      </header>
        <Outlet />
      </div>
    </>
  );
}
