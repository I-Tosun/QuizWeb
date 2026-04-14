import { Link } from "react-router-dom";

// Reusable back button for admin pages
const BackButton = ({ to = "/admin", label = "← Terug naar Dashboard" }) => {
    return (
        <div className="admin_back">
            <Link to={to} className="admin_back_btn">
                {label}
            </Link>
        </div>
    );
};

export default BackButton;