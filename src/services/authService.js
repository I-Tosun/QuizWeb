const API_URL = "https://api.datavortex.nl/quizweb";

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


export const logoutUser = () => {
    localStorage.removeItem("token");
};


export const getToken = () => {
    return localStorage.getItem("token");
};

// username uit JWT halen
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