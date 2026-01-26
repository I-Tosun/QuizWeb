import Modal from "../components/Modal";
import "../styles/Auth.css";

const SignUp = ({ onClose }) => {
    return (
        <Modal title="Create Account" onClose={onClose}>
            <form className="auth_form">
                <label>Email Address</label>
                <input type="email" />

                <label>Screen Name</label>
                <input type="text" />

                <label>Password</label>
                <input type="password" />

                <label>Confirm Password</label>
                <input type="password" />

                <button className="primary_btn">Create Account</button>
            </form>
        </Modal>
    );
};

export default SignUp;
