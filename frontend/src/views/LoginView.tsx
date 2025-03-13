import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginView() {

    return (
        <>
            <div>
                <LoginForm />
            </div>

            <nav className="pb-5 font-medium">
                <Link to="/auth/register">
                    Do you have an account? Sign In
                </Link>
            </nav>

        </>
    );
}