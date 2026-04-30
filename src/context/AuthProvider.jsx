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
                error: null,
            };
        }

        return {
            user: null,
            status: "done",
            error: null,
        };
    });

    //  Login
    async function login(email, password) {

        setAuthState({
            user: authState.user,
            status: "loading",
            error: null,
        });
        try {
            const token = await loginUser(email, password);

            const username = getUserFromToken();
            const role = getUserRole();

            setAuthState({
                user: { username, role, token },
                status: "done",
                error: null
            });

        } catch (error) {

            setAuthState({
                user: null,
                status: "error",
                error: error.message
            });
        }
    }

    //  Register
    async function register(username, email, password) {
        try{
            await registerUser(username, email, password);
        } catch (error) {
            console.error("Register error:", error);
            throw error;
        }
    }

    //  Logout
    function logout() {
        logoutUser();

        setAuthState({
            user: null,
            status: "done",
            error: null
        });
    }

    //  value object
    const value = {
        user: authState.user,
        status: authState.status,
        error: authState.error,
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