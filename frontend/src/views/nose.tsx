import { Link, Navigate } from "react-router-dom";
import Dashboard from "../components/noseC";

export default function HeaderV() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <>
      <div className="pt-20 justify-between items-center">
        <Dashboard />
      </div>

      <nav className="pb-5 font-medium">
        <Link to="/auth/login">
          Do you have an account? Sign In
        </Link>
      </nav>
      <button onClick={() => {
        localStorage.removeItem("token"); // Cerrar sesión
        window.location.href = "/homepage"; // Redirigir al login
      }}>
        Cerrar Sesión
      </button>

    </>
  );
}
