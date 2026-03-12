import { useState } from "react";
import Modal from "../components/Modal";
import "../assets/styles/Auth.css";
import { loginUser } from "../services/authService";

const Login = ({ onClose }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await loginUser(username, password);

            setErrorMessage("");

            alert("Login succesvol");

            onClose();

        } catch (error) {

            console.error(error);

            setErrorMessage("Login mislukt. Controleer username en wachtwoord.");

        }
    };

    return (
        <Modal title="Login to QuizWeb" onClose={onClose}>

            <form className="auth_form" onSubmit={handleSubmit}>

                <label>Username</label>

                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label>Password</label>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {errorMessage && (
                    <p className="auth_error">
                        {errorMessage}
                    </p>
                )}

                <button className="primary_btn">
                    Login
                </button>

            </form>

        </Modal>
    );
};

export default Login;
