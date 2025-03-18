import { Navigate } from "react-router-dom";
import Dashboardd from "../components/noseC";

export default function Dashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <div className="pt-2">
        <Dashboardd />
      </div>
    </>
  );
}
