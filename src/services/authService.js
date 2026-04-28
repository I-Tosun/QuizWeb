import axios from "axios";

// API instance
const API = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
        "novi-education-project-id": import.meta.env.VITE_PROJECT_ID
    }
});


// LOGIN (ALLEEN API - GEEN FALLBACK)
export const loginUser = async (username, password) => {
    try {
        const response = await API.post("/login", {
            email: username,
            password
        });
        const token = response.data.token;
        // JWT opslaan
        localStorage.setItem("token", token);

        console.log("API TOKEN:", token);
        return token;
    } catch (error) {
        console.error(" Login mislukt :", error);
        throw new Error("Login mislukt - controleer je gegevens of API");
    }
};

// Register
export const registerUser = async (username, email, password) => {

    try {
        await API.post("/users", { email, password });

        localStorage.setItem("screenname", username);

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