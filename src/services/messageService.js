import axios from "axios";

//Axios
const API = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
        "novi-education-project-id": import.meta.env.VITE_PROJECT_ID
    }
});

// Send message
export const sendMessage = async (name, email, message) => {

    const date = new Date().toLocaleDateString();

    try {
        await API.post("/messages", { name, email, message, date });
        return true;
    } catch (error) {
        console.warn("API offline, fallback message gebruikt", error);
    }
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push({ name, email, message, date });
    localStorage.setItem("messages", JSON.stringify(messages));
    return true;
};

// Get message
export const getMessages = async () => {
    const token = localStorage.getItem("token");
    try {
        const response = await API.get("/messages", {
            headers: {
                ...(token && { Authorization: `Bearer ${token}` })
            }
        });
        return response.data;

    } catch (error) {
        console.warn("API offline, fallback messages gebruikt", error);
    }
    const messages = localStorage.getItem("messages");
    return messages ? JSON.parse(messages) : [];
};


// Delete message
export const deleteMessage = async (id) => {
    const token = localStorage.getItem("token");
    try {
        await API.delete(`/messages/${id}`, {
            headers: {
                ...(token && { "Authorization": `Bearer ${token}` })
            }
        });
        return true;
    } catch (error) {
        console.warn("API offline, fallback delete gebruikt", error);
    }
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    const updated = messages.filter((_, index) => index !== id);
    localStorage.setItem("messages", JSON.stringify(updated));
    return true;
};