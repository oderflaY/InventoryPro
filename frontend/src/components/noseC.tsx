import { useAuth } from "./AuthToken";

const Dashboard = () => {
  const { user} = useAuth();

  return (
    <div>
      <h1>Bienvenido, {user?.username} !</h1>
      <p>Email: {user?.email}</p>
      <p>Rol: {user?.role}</p>
      <p>ID: {user?.id}</p>
    </div>
  );
};

export default Dashboard;
