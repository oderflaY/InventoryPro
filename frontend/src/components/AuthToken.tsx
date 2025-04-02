import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Definir el tipo de datos del usuario
interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  firstname: string;
  bibliography: string;
  lastname: string;
  phone: string;
  country: string;
  city: string;
  postalcode: string;
  image: string;
}

// Tipo del contexto
interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

// Crear el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor del contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Verifica si hay un token al cargar la app
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser = jwtDecode<User>(token); // Decodificar el token JWT
        setUser(decodedUser);
      } catch (error) {
        console.error("Error decodificando el token:", error);
        setUser(null);
      }
    }
  }, []);

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto en cualquier componente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};
