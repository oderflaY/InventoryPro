import { Navigate } from "react-router-dom";
import ProductList from "../components/Products";

export default function ProductsL() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <>
      <div className="pt-2">
        <ProductList />
      </div>
    </>
  );
}
