import { Link } from "react-router-dom";

const SplitScreen = () => {
    return (
    <>
    <div>
    <form 
    onSubmit={() => {}}
    className="px-5 py-10 rounded-lg space-y-7">

    <div className="grid grid-cols-1 space-y-3">
        <label htmlFor="handle" className="text-2xl text-slate-500">Username</label>
        <input
            id="username"
            type="text"
            placeholder="Username"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
        />
    </div>
    <div className="grid grid-cols-1 space-y-3">
        <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
        <input
            id="password"
            type="password"
            placeholder="Password"
            className="bg-slate-100 border-black p-3 rounded-lg placeholder-slate-400 w-96"
        />
    </div>

    <div className="text-center">
    <input
        type="submit"
        className="bg-blue-900 p-3 text-lg uppercase text-white rounded-lg font-bold cursor-pointer w-56"
        value='Login'
    />
    </div>
  
</form>
    </div>
        <nav>
            <Link to="/auth/register">
                Do you have an account? Sign In
            </Link>
        </nav>
    </>
    );
};

export default SplitScreen;
