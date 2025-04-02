import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

export default function RegisterView() {
    return (
        <>
            <div>
                <RegisterForm/>
            </div>

            <nav className=" font-medium">
                <Link to="/auth/login">
                    Do you have an account? Sign In
                </Link>
            </nav>

        </>
    );
}
