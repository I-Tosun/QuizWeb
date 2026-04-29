import { useState } from "react";
import Modal from "../components/Modal";
import "../assets/styles/Auth.css";
import { useAuth } from "../context/useAuth.js";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { Icon } from "@iconify/react";

const SignUp = ({ onClose }) => {

    const { register } = useAuth();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);

        if (password !== confirmPassword) {
            setError("Wachtwoorden komen niet overeen");
            return;
        }

        setLoading(true);

        try {
            await register(username, email, password);
            alert("Account succesvol aangemaakt");
            onClose();
        } catch (err) {
            console.error(err);
            setError("Registratie mislukt. Probeer een andere username of email.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal title="Create Account" onClose={onClose}>

            <form className="auth_form" onSubmit={handleSubmit}>
                <ErrorMessage message={error} />
                {loading && <LoadingSpinner />}

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

                {/* Password */}
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

                {/* Confirm password */}
                <label>Confirm Password</label>
                <div className="password_wrapper">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required/>
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(prev => !prev)}
                        className="password_toggle">
                        <Icon icon={showConfirmPassword ? "mdi:eye-off" : "mdi:eye"} width="20" />
                    </button>
                </div>

                <button
                    className="primary_btn"
                    disabled={loading}>
                    {loading ? "Bezig..." : "Create Account"}
                </button>

            </form>

        </Modal>
    );
};

export default SignUp;