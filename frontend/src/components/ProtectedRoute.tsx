import { JSX } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token"); // Verifica si hay un token guardado

  return token ? <Navigate to="/dashboard" replace /> : children;   // Solo puede entrar usuarios que no esten logeados
};

export default ProtectedRoute;
