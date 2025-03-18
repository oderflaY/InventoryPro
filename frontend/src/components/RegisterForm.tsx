import { ChangeEvent, FormEvent, useState } from "react";
import { createUserRequest } from "../api/user";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function RegisterForm() {
    const CharactersNoUser = [" ", ".", ",", ";", ":", "'", "\"", "`", "~",
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", "\\", "/", "?", "<", ">",
        "ñ", "Ñ", "á", "é", "í", "ó", "ú", "ü", "¡", "¿", "/", "*", ".", "Enter"]; // Caracteres prohibidos
    const CharactersNo = [" ", "Enter"]; // Caracteres prohibidos

    const [user, setUser] = useState({   //definir variables
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string; general?: string; }>({});
    const navigate = useNavigate();

    const [PasswChan, setPasswChan] = useState(false);  //  Cambiar password a text

    //Guardar Datos
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    //IDKKKKKK
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});

        const res = await createUserRequest(user)
        const data = await res.json()   //Convertir de json a string

        if (!res.ok) {
            const newErrors: any = {};
            if (Array.isArray(data.message)) {
                // Procesar errores de validación individuales
                data.message.forEach((msg: string) => {
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

                <div className="grid grid-cols-1">
                    <label className="text-2xl text-slate-500">Username</label>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        onKeyDown={(e) => CharactersNoUser.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                        onChange={handleChange}
                    />
                    {errors.username && <p className="text-red-500 text-sm font-bold">⚠️ {errors.username}</p>}
                </div>

                <div className="grid grid-cols-1">
                    <label className="text-2xl text-slate-500">E-mail</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Mail"
                        className="bg-slate-100 border-none p-3 rounded-lg w-96 placeholder-slate-400"
                        onKeyDown={(e) => CharactersNo.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                        onChange={handleChange}
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