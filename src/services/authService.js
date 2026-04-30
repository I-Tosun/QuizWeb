import axios from "axios";

// API instance
const API = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
        "novi-education-project-id": import.meta.env.VITE_PROJECT_ID
    }
});


// Login
export const loginUser = async (email, password) => {
    try {
        const response = await API.post("/login", {
            email,
            password
        });

        const token = response.data.token;

        // Token opslaan
        localStorage.setItem("token", token);

        // Juiste screenname ophalen
        const savedName = localStorage.getItem(`screenname_${email}`);

        // fallback naar email als geen naam bestaat
        const screenname = savedName || email;

        localStorage.setItem("screenname", screenname);

        return token;

    } catch (error) {
        console.error("Login mislukt:", error);

        const message =
            error.response?.data?.message ||
            "Login mislukt - controleer je gegevens";

        throw new Error(message);
    }
};

// Register
export const registerUser = async (username, email, password) => {

    try {
        await API.post("/users", { email, password });

        localStorage.setItem(`screenname_${email}`, username);

        return true;

    } catch (error) {
        console.error(" Registratie mislukt:", error);
        throw new Error("Registratie mislukt");
    }
};

// Logout
export const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("screenname");
};


// Username from token
export const getUserFromToken = () => {

    const token = localStorage.getItem("token");

    if (!token) return null;

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));

        return localStorage.getItem("screenname") || payload.email || null;

    } catch (error) {
        console.error(" Token decode error:", error);
        return null;
    }
};


// Role from token
export const getUserRole = () => {

    const token = localStorage.getItem("token");

    if (!token) return null;

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));

        if (payload.role) return payload.role.toUpperCase();
        if (Array.isArray(payload.roles)) return payload.roles[0].toUpperCase();

        return null;

    } catch (error) {
        console.error(" Token decode error:", error);
        return null;
    }
};