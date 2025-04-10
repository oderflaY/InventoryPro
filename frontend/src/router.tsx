import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthLayout from "./layouts/AuthLayout";
import Menu from "./layouts/Menu"

import Homepage from "./views/Homepage";
import Dash from "./views/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute";   //Protege rutas de nuevos tokens
import { AuthProvider } from "./components/AuthToken";      // Marca las rutas que pueden tener los datos del usuario con token
import Members from "./views/Memberships";
import HeaderN from "./layouts/HeaderN";

import Inventories from "./views/Inventories";
import Products from "./views/Products";

import ProductList from "./views/ProductsList";
import Profile from "./views/Profile";

export default function Router() {
    return (
        <BrowserRouter>
            <AuthProvider>

                <Routes> 
                    <Route element={<AuthLayout />}>
                        <Route path="/auth/login" element={<ProtectedRoute><LoginView /></ProtectedRoute>} />
                        <Route path="/auth/register" element={<ProtectedRoute><RegisterView /></ProtectedRoute>} />
                    </Route>
                </Routes>

                <Routes>
                    <Route element={<Menu />}>
                        <Route path="/dashboard" element={<Dash />} />
                        <Route path="/my-profile" element={<Profile />} />
                        <Route path="/inventories" element={<Inventories />} />
                        <Route path="/inventory/:inventoryId/products" element={<ProductList />} />
                        <Route path="/inventory/:inventoryId/add-product" element={<Products />} />
                    </Route>

                    {/* Header Inicial */}
                    <Route element={<HeaderN />}>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/memberships" element={<Members />} />
                    </Route>
                </Routes>

            </AuthProvider>
        </BrowserRouter>
    );
}
