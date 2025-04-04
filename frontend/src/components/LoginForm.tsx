import { ChangeEvent, FormEvent, useState } from "react";
import { loginUserRequest } from "../api/user";

import { auth, facebookProvider, googleProvider, signInWithPopup } from "../firebase";
import { Eye, EyeOff } from "lucide-react";


function LoginForm() { 
    const CharactersNoUser = [" ", ".", ",", ";", ":", "'", "\"", "`", "~",
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", "\\", "/", "?", "<", ">",
        "ñ", "Ñ", "á", "é", "í", "ó", "ú", "ü", "¡", "¿", "/", "*", ".", "Enter"]; // Caracteres prohibidos
    const CharactersNo = [" ", "Enter"]; // Caracteres prohibidos

    const [user, setUser] = useState({ username: "", password: "" });

    const [errors, setErrors] = useState<{ username?: string; password?: string; general?: string; }>({});
    const [message, setMessage] = useState("");

    const [PasswChan, setPasswChan] = useState(false);  //  Cambiar password a text

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // IDKKKK
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});
        setMessage("");

        const res = await loginUserRequest(user);
        const data = await res.json() // Convertir a JSON

        if (!res.ok) {
            const newErrors: any = {};

            if (Array.isArray(data.message)) {
                data.message.forEach((msg: string) => {
                    if (msg.toLowerCase().includes("username")) newErrors.username = msg;
                    if (msg.toLowerCase().includes("password")) newErrors.password = msg;
                });
            } else {
                setMessage("Incorrect Username or Password");
            }

            setErrors(newErrors);
        } else {
            localStorage.setItem("token", data.accessToken); // Guarda el token

            //  Decodificar el token y actualizar el estado inmediatamente
            const decodedUser = JSON.parse(atob(data.accessToken.split(".")[1]));
            setUser(decodedUser); // Actualiza el contexto

            window.location.href = '/dashboard';
        }
    };

    // Función para iniciar sesión con Google
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error);
        }
    };

    // Función para iniciar sesión con Facebook
    const handleFacebookLogin = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            setUser(result.user);
        } catch (error) {
            console.error("Error al iniciar sesión con Facebook:", error);
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="px-5 py-5 rounded-lg space-y-7">

                <div className="grid grid-cols-1">
                    <label htmlFor="handle" className="text-2xl text-slate-500">Username</label>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        className=" bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        onKeyDown={(e) => CharactersNoUser.includes(e.key) && e.preventDefault()}   //  Evitar que ingrese simbolos erroneos
                        onChange={handleChange}
                    />
                    {errors.username && <p className="text-red-500 text-sm font-bold">⚠️ {errors.username}</p>}
                </div>


                <div className="grid grid-cols-1">
                    <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
                    <div className="relative">
                    <input
                        name="password"
                        type={PasswChan ? "text" : "password"}
                        placeholder="Password"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400 w-full"
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


                {message && <p className="text-red-500 text-sm font-bold text-center">⚠️ {message}</p>}

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-900 p-3 text-lg uppercase text-white rounded-lg font-bold cursor-pointer w-56"
                    >Login </button>
                </div>


                <div className="flex space-x-4">
                    <button disabled
                        onClick={handleGoogleLogin} className="flex justify-center px-4 py-2 border rounded-lg shadow gap-2  w-46">
                        <img className="w-5 h-5"
                            src="../../public/images-log/google_icon.png"
                            alt="Google Logo"
                        />
                        Disabled
                        {/*
                        <img className="w-5 h-5"
                            src="../../public/images-log/google_icon.png"
                            alt="Google Logo"
                        />
                        Login with Google
                        */}
                    </button>

                    <button disabled
                        onClick={handleFacebookLogin} className="flex items-center justify-center gap-2 border px-4 py-2 rounded-md w-46">
                        <img className="w-5 h-5"
                            src="../../public/images-log/faceb_icon.png"
                            alt="Facebook Logo"
                        />
                        Disabled
                        {/* Login with Facebook */}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default LoginForm