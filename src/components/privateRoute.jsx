import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth.js";

//PrivateRoute protects admin page
const PrivateRoute = ({ children }) => {
    const { user, isAdmin } = useAuth();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default PrivateRoute;