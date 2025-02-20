import { Link } from "react-router-dom"
import '../styles/App.css'
export default function LoginView() {
  return (
    <>
    <div className="flex h-screen">
  <div className="w-1/2 min-h-screen">
  <img></img>
  <nav>

        <Link to="/auth/register">
            No tienes una cuenta? crea una aqi
        </Link>

    </nav>
  
  </div>
  <div
    className="w-1/2 min-h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/public/FondoLogin.png')" }}
  ></div>
</div>
    </>
  )
}
