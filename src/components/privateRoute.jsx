import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth.js";

//PrivateRoute protects admin page
const PrivateRoute = ({ children }) => {
    const { isAdmin } = useAuth();

    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default PrivateRoute;