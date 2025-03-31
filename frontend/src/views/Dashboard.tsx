import { Navigate } from "react-router-dom";
import Dashboardd from "../components/NoseC";

export default function Dashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <>
      <div className="pt-2">
        <Dashboardd />
      </div>
    </>
  );
}
