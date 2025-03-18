import { useAuth } from "./AuthToken";

const Dashboardd = () => {
  const { user} = useAuth();

  return (
    <div className="pl-5">
      <h1>--- Datos del usuario iniciado: ---</h1>
      <h1>Username: {user?.username}</h1>
      <p>Email: {user?.email}</p>
      <p>Rol: {user?.role}</p>
      <p>ID: {user?.id}</p>
    </div>
  );
};

export default Dashboardd;
