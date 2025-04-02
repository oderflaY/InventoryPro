import { ChangeEvent, FormEvent, useState } from "react";
import { createUserRequest } from "../api/user";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function RegisterForm() {
    const CharactersNoUser = [" ", ".", ",", ";", ":", "'", "\"", "`", "~",
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", "\\", "/", "?", "<", ">",
        "ñ", "Ñ", "á", "é", "í", "ó", "ú", "ü", "¡", "¿", "/", "*", ".", "Enter"]; // Caracteres prohibidos
    const CharactersNo = [" ", "Enter"]; // Caracteres prohibidos

    const [user, setUser] = useState({  
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<{ firstname?: string; lastname?: string; username?: string; email?: string; password?: string; general?: string; }>({});
    const navigate = useNavigate();

    const [PasswChan, setPasswChan] = useState(false); 

    //Guardar Datos
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    //IDKKKKKK
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});

        const res = await createUserRequest(user)
        const data = await res.json()   

        if (!res.ok) {
            const newErrors: any = {};
            if (Array.isArray(data.message)) {
                // Procesar errores individuales
                console.log(newErrors)
                data.message.forEach((msg: string) => {
                    if (msg.toLowerCase().includes("firstname")) newErrors.firstname = msg;
                    if (msg.toLowerCase().includes("lastname")) newErrors.lastname = msg;
                    if (msg.toLowerCase().includes("username")) newErrors.username = msg;
                    if (msg.toLowerCase().includes("email")) newErrors.email = msg;
                    if (msg.toLowerCase().includes("password")) newErrors.password = msg;
                });
            } else {
                newErrors.general = "Error entering data";
            }
            setErrors(newErrors);
        } else {
            setErrors({});
            navigate("/dashboard");
        }
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="px-5 py-5 rounded-lg space-y-7">

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-2xl text-slate-500">First Name</label>
                        <input
                            name="firstname"
                            type="text"
                            placeholder="First Name"
                            className="bg-slate-100 border-none w-full p-3 rounded-lg placeholder-slate-400"
                            onChange={handleChange}
                            required
                        />
                        {errors.firstname && <p className="text-red-500 text-sm font-bold">⚠️ {errors.firstname}</p>}
                    </div>
                    <div>
                        <label className="block text-2xl text-slate-500">Last Name</label>
                        <input
                            name="lastname"
                            type="text"
                            placeholder="Last Name"
                            className="bg-slate-100 border-none w-full p-3 rounded-lg placeholder-slate-400"
                            onChange={handleChange}
                            required
                        />
                        {errors.lastname && <p className="text-red-500 text-sm font-bold">⚠️ {errors.lastname}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    <label className="text-2xl text-slate-500">Username</label>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        className="bg-slate-100 border-none w-full p-3 rounded-lg placeholder-slate-400"
                        onKeyDown={(e) => CharactersNoUser.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                        onChange={handleChange}
                        required
                    />
                    {errors.username && <p className="text-red-500 text-sm font-bold">⚠️ {errors.username}</p>}
                </div>

                <div className="grid grid-cols-1">
                    <label className="text-2xl text-slate-500">E-mail</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Mail"
                        className="bg-slate-100 border-none p-3 rounded-lg w-full placeholder-slate-400"
                        onKeyDown={(e) => CharactersNo.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm font-bold">⚠️ {errors.email}</p>}
                </div>

                <div className="grid grid-cols-1">
                    <label className="text-2xl text-slate-500">Password</label>
                    <div className="relative">
                        <input
                            name="password"
                            type={PasswChan ? "text" : "password"}
                            placeholder="Password"
                            className="bg-slate-100 border-none p-3 w-full rounded-lg placeholder-slate-400"
                            onKeyDown={(e) => CharactersNo.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                            onChange={handleChange}
                            required
                        />

                        <button
                            type="button"
                            onClick={() => setPasswChan(!PasswChan)}
                            className="bg-slate-100 text-gray-500 hover:text-gray-700 absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                            {PasswChan ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm font-bold">⚠️ {errors.password}</p>}
                </div>

                {errors.general && <p className="text-red-500 text-sm text-center mb-3 font-bold">⚠️ {errors.general}</p>}

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-900 p-3 text-lg text-white rounded-lg font-bold cursor-pointer w-56"
                    >Sign Up </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm