const API_URL = "https://api.datavortex.nl/quizweb";

//Login
export const loginUser = async (username, password) => {

    const response = await fetch(`${API_URL}/users/authenticate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    if (!response.ok) {
        throw new Error("Login mislukt");
    }

    const data = await response.json();

    // JWT opslaan
    localStorage.setItem("token", data.jwt);

    return data.jwt;
};

//Logout
export const logoutUser = () => {
    localStorage.removeItem("token");
};

//Token ophalen
export const getToken = () => {
    return localStorage.getItem("token");
};

// username uit Token halen
export const getUserFromToken = () => {

    const token = localStorage.getItem("token");

    if (!token) return null;

    try {

        const payload = token.split(".")[1];

        const decoded = JSON.parse(atob(payload));

        return decoded.sub; // username

    } catch (error) {

        console.error("Token decode error:", error);

        return null;

    }

};

// ROLE UIT TOKEN HALEN
export const getUserRole = () => {

    const token = getToken();
    if (!token) return null;

    try {

        const payload = JSON.parse(atob(token.split(".")[1]));

        return payload.role; // USER of ADMIN

    } catch (error) {

        console.error("Token decode error:", error);
        return null;

    }

};


// CHECK OF USER ADMIN IS
export const isAdmin = () => {

    const role = getUserRole();

    return role === "ADMIN";

};

export const deleteUser = async (username) => {

    const token = getToken();

    const response = await fetch(`${API_URL}/users/${username}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("User verwijderen mislukt");
    }

    return true;
};

export const getUserInfo = async (username) => {

    const token = getToken();

    const response = await fetch(`${API_URL}/users/${username}/info`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("User info ophalen mislukt");
    }

    return await response.json();
};