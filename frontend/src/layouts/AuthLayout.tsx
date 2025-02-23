import { Outlet } from "react-router-dom";
import imagen from "../../public/FondoLogin.png"; // Ruta de la imagen local

export default function AuthLayout() {
  return (
    <>
      <div className="flex h-screen">
        {/* Sección izquierda (blanca) */}
        <div className="w-1/2 bg-white flex items-center justify-center ">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <p className="font-bold text-5xl">Inventory</p>
              <p className="text-blue-800 font-bold text-5xl">Pro</p>
            </div>
            <Outlet />
          </div>
        </div>
        {/* Sección derecha (imagen local) */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${imagen})` }}
        />{" "}
      </div>
    </>
  );
}
