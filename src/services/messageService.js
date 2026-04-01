const API_URL = "/api";
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;

const projectHeader = {
    "Content-Type": "application/json",
    "novi-education-project-id": PROJECT_ID
};

// Send message
export const sendMessage = async (name, email, message) => {

    const date = new Date().toLocaleDateString();

    const response = await fetch(`${API_URL}/messages`, {
        method: "POST",
        headers: projectHeader,
        body: JSON.stringify({ name, email, message, date })
    });

    if (!response.ok) throw new Error("Bericht versturen mislukt");

    return true;
};

// Get message
export const getMessages = async () => {

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/messages`, {
        method: "GET",
        headers: {
            ...projectHeader,
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) throw new Error("Berichten ophalen mislukt");

    return await response.json();
};

// Delete message
export const deleteMessage = async (id) => {

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/messages/${id}`, {
        method: "DELETE",
        headers: {
            ...projectHeader,
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) throw new Error("Bericht verwijderen mislukt");

    return true;
};