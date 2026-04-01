//API Configuration
const API_URL = "/api";
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;

const projectHeader = {
    "Content-Type": "application/json",
    "novi-education-project-id": PROJECT_ID
};

// Login
export const loginUser = async (username, password) => {

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: projectHeader,
            body: JSON.stringify({ email: username, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            return data.token;
        }

    } catch {
        console.warn("API offline, fallback login gebruikt");
    }

    // Fallback admin
    if (username === "admin@quizweb.nl" && password === "admin123") {
        const fakeToken = { sub: "admin", role: "ADMIN" };
        const encoded = btoa(JSON.stringify(fakeToken));
        localStorage.setItem("token", `fake.${encoded}.token`);
        return true;
    }

    // Fallback localStorage users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
        (u) => (u.username === username || u.email === username) && u.password === password
    );

    if (found) {
        const fakeToken = { sub: found.username || found.email, role: "USER" };
        const encoded = btoa(JSON.stringify(fakeToken));
        localStorage.setItem("token", `fake.${encoded}.token`);
        return true;
    }

    throw new Error("Login mislukt");
};

// Register
export const registerUser = async (username, email, password) => {

    try {
        const response = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: projectHeader,
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            localStorage.setItem("screenname", username);
            return true;
        }

    } catch {
        console.warn("API offline, fallback registratie gebruikt");
    }

    // Fallback localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find(
        (u) => u.username === username || u.email === email
    );

    if (exists) throw new Error("Gebruiker bestaat al");

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("screenname", username);

    return true;
};

// Logout
export const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("screenname");
};

// Token
export const getToken = () => {
    return localStorage.getItem("token");
};

// Username from token
export const getUserFromToken = () => {

    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return localStorage.getItem("screenname") || payload.email || null;
    } catch (error) {
        console.error("Token decode error:", error);
        return null;
    }
};

// Role from token
export const getUserRole = () => {

    const token = getToken();
    if (!token) return null;

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));

        if (payload.role) return payload.role.toUpperCase();
        if (Array.isArray(payload.roles)) return payload.roles[0].toUpperCase();

        return null;
    } catch (error) {
        console.error("Token decode error:", error);
        return null;
    }
};

// Admin check
export const isAdmin = () => {
    return getUserRole() === "ADMIN";
};