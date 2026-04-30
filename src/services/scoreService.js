//Score service manage quiz scores via Novi Dynamic api
const API_URL = "/api";
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;

const projectHeader = {
    "Content-Type": "application/json",
    "novi-education-project-id": PROJECT_ID
};

// Get score
export const getScores = async () => {

    try {
        const response = await fetch(`${API_URL}/scores`, {
            method: "GET",
            headers: projectHeader
        });

        if (response.ok) return await response.json();

    } catch {
        console.warn("API offline, fallback scores gebruikt");
    }

    const scores = localStorage.getItem("scores");
    return scores ? JSON.parse(scores) : [];
};

// Save score
export const saveScore = async (score) => {

    const token = localStorage.getItem("token");

    const headers = {
        ...projectHeader,
        ...(token ? { "Authorization": `Bearer ${token}` } : {})
    };

    try {
        const response = await fetch(`${API_URL}/scores`, {
            method: "POST",
            headers,
            body: JSON.stringify(score)
        });

        if (response.ok) return true;

    } catch {
        console.warn("API offline, fallback score opslaan gebruikt");
    }

    // Fallback localStorage
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push(score);
    localStorage.setItem("scores", JSON.stringify(scores));

    return true;
};

// Delete score
export const deleteScore = async (id) => {

    const token = localStorage.getItem("token");

    try {
        const response = await fetch(`${API_URL}/scores/${id}`, {
            method: "DELETE",
            headers: {
                ...projectHeader,
                "Authorization": `Bearer ${token}`   // ← token toevoegen
            }
        });

        if (response.ok) return true;

    } catch {
        console.warn("API offline, fallback delete gebruikt");
    }

    // Fallback localStorage
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    const updated = scores.filter(score => score.id !== id);
    localStorage.setItem("scores", JSON.stringify(updated));

    return updated;
};