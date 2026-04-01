import { Navigate } from "react-router-dom";
import { isAdmin } from "../services/authService";

//PrivateRoute protects admin page form unlogged users
const PrivateRoute = ({ children }) => {
    if (!isAdmin()) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default PrivateRoute;