import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthLayout from "./layouts/AuthLayout";

import Homepage from "./views/Homepage";
import Testrr from "./views/testing_njs";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/auth/login" element={<LoginView />} />
                    <Route path="/auth/register" element={<RegisterView />} />
                </Route>
            </Routes>

            <Routes>
                <Route path="/auth/homepage" element={<Homepage />} />
                <Route path="/test" element={<Testrr />} />
            </Routes>
        </BrowserRouter>
    );
}
