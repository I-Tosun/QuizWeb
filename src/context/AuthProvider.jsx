import { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
    loginUser,
    registerUser,
    logoutUser,
    getUserFromToken,
    getUserRole
} from "../services/authService";

function AuthContextProvider({ children }) {

    // Lazy init
    const [authState, setAuthState] = useState(() => {
        const token = localStorage.getItem("token");

        if (token) {
            const username = getUserFromToken();
            const role = getUserRole();

            return {
                user: { username, role, token },
                status: "done",
            };
        }

        return {
            user: null,
            status: "done",
        };
    });

    //  Login
    async function login(email, password) {
        const token = await loginUser(email, password);

        const username = getUserFromToken();
        const role = getUserRole();

        setAuthState({
            user: { username, role, token },
            status: "done",
        });
    }

    //  Register
    async function register(username, email, password) {
        await registerUser(username, email, password);
    }

    //  Logout
    function logout() {
        logoutUser();

        setAuthState({
            user: null,
            status: "done",
        });
    }

    //  value object
    const value = {
        user: authState.user,
        status: authState.status,
        login,
        register,
        logout,
        isAdmin: authState.user?.role === "ADMIN",
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;