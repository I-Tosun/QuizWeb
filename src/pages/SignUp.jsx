import { useState } from "react";
import Modal from "../components/Modal";
import "../assets/styles/Auth.css";
import { registerUser } from "../services/authService";

const SignUp = ({ onClose }) => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords komen niet overeen");
            return;
        }

        try {

            await registerUser(username, email, password);

            setErrorMessage("");

            alert("Account succesvol aangemaakt");

            onClose();

        } catch (error) {

            console.error(error);

            setErrorMessage("Registratie mislukt. Probeer een andere username of email.");

        }

    };

    return (
        <Modal title="Create Account" onClose={onClose}>

            <form className="auth_form" onSubmit={handleSubmit}>

                <label>Email Address</label>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>

                <label>Screen Name</label>

                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required/>

                <label>Password</label>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>

                <label>Confirm Password</label>

                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required/>

                {errorMessage && (
                    <p className="auth_error">
                        {errorMessage}
                    </p>
                )}

                <button className="primary_btn">
                    Create Account
                </button>

            </form>

        </Modal>
    );
};

export default SignUp;
