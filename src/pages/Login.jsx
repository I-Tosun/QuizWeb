import { useState } from "react";
import Modal from "../components/Modal";
import "../assets/styles/Auth.css";
import { useAuth } from "../context/useAuth.js";
import ErrorMessage from "../components/ui/ErrorMessage.jsx";
import LoadingSpinner from "../components/ui/LoadingSpinner.jsx";
import { Icon } from "@iconify/react";

const Login = ({ onClose }) => {

    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);
        setLoading(true);

        try {
            await login(username, password);
            alert("Login succesvol");
            onClose();
        } catch (error) {
            console.error(error);
            setError("Login mislukt. Controleer email en wachtwoord.");
        }finally {
            setLoading(false);
        }
    };

    return (
        <Modal title="Login to QuizWeb" onClose={onClose}>

            <form className="auth_form" onSubmit={handleSubmit}>
                <ErrorMessage message={error} />
                {loading && <LoadingSpinner />}

                <label>Email</label>

                <input
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required/>

                <label>Password</label>
                <div className="password_wrapper">
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>

                    <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                        className="password_toggle">
                        <Icon icon={showPassword ? "mdi:eye-off" : "mdi:eye"} width="20" />
                    </button>
                </div>

                <button className="primary_btn" disabled={loading}>
                    {loading ? "Bezig..." : "Login"}
                </button>

            </form>

        </Modal>
    );
};

export default Login;
