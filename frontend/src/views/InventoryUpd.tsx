import { Navigate } from "react-router-dom";


export default function InventoryUpd() {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/auth/login" replace />;
    }

    return (
        <>
            <div className="pl-10 pb-10 pt-8 pr-10">

            </div>
        </>
    );
}