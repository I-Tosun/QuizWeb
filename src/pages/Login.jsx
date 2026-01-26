import Modal from "../components/Modal";
import "../styles/Auth.css";

const Login = ({ onClose }) => {
    return (
        <Modal title="Login to QuizWeb" onClose={onClose}>
            <form className="auth_form">
                <label>Screen name or E-mail</label>
                <input type="text" />

                <label>Password</label>
                <input type="password" />

                <button className="primary_btn">Login</button>

                <div className="auth_links">
                    <button type="button" className="link_btn">Forgot Password</button>
                    <button type="button" className="link_btn">Create Account</button>
                </div>
            </form>
        </Modal>
    );
};

export default Login;
