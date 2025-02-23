import { Link } from "react-router-dom";
export default function RegisterView() {
  return (
    <>
      <div>
        <h1>Hola mundo de mierda</h1>
      </div>
      <nav>
        <Link to="/auth/login">Ya tienes una cuenta? Iniciar sesion</Link>
      </nav>
    </>
  );
}
