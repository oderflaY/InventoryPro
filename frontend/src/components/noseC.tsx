import { useAuth } from "./AuthToken";

const Dashboardd = () => {
  const { user} = useAuth();

  return (
    <div className="pl-10 pt-5 ">
      <h1 className="font-bold">--- Essential data of the logged-in user: ---</h1>
      <h1>Username: {user?.username}</h1>
      <p>Email: {user?.email}</p>
      <p>Rol: {user?.role}</p>
      <p>ID: {user?.id}</p>
<br></br>
      <h1 className="font-bold">--- Personal data of the initiated user: ---</h1>
      <span className="font-light italic">(A editar porque se mandan vacios al registrarse)</span>
      <h1>First Name: {user?.firstname}</h1>
      <p>Last Name: {user?.lastname}</p>
      <p>Phone: {user?.phone}</p>
      <h1>Country: {user?.country}</h1>
      <p>City: {user?.city}</p>
      <p>Postal Code: {user?.postalcode}</p>
    </div>
  );
};

export default Dashboardd;
