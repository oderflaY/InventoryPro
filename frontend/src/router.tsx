import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthLayout from "./layouts/AuthLayout";
import Header from "./layouts/header"

import Homepage from "./views/Homepage";
import Dash from "./views/nose"
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/AuthToken";

export default function Router() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route element={<AuthLayout />}>
                        <Route path="/auth/login" element={<LoginView />} />
                        <Route path="/auth/register" element={<RegisterView />} />
                    </Route>
                </Routes>

                <Routes>
                    {/* Si existe un token de sesion se redirije a la dashboard mediante el ProtectedRoute.tsx */}
                    <Route path="/auth/login" element={<ProtectedRoute><LoginView /></ProtectedRoute>} />
                    <Route path="/auth/register" element={<ProtectedRoute><RegisterView /></ProtectedRoute>} />

                    <Route element={<Header />}>
                    <Route path="/dashboard" element={<Dash />} />
                    </Route>

                    <Route path="/homepage" element={<Homepage />} />
                </Routes>

            </AuthProvider>
        </BrowserRouter>
    );
}
