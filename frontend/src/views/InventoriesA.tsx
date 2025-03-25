import { Navigate } from "react-router-dom";
import InventoryForm from "../components/InventoryForm";

export default function InventoriesA() {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/auth/login" replace />;
    }

    return (
        <>
            <div className="pl-10 pb-10 pt-8 pr-10">
                <InventoryForm />
            </div>
        </>
    );
}
