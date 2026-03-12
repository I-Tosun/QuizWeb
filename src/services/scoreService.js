const STORAGE_KEY = "quiz_scores";

// scores ophalen
export const getScores = () => {
    const scores = localStorage.getItem(STORAGE_KEY);
    return scores ? JSON.parse(scores) : [];
};

// score opslaan
export const saveScore = (newScore) => {
    const existingScores = getScores();

    existingScores.push(newScore);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingScores));
};

// alles wissen (handig voor testen)
export const clearScores = () => {
    localStorage.removeItem(STORAGE_KEY);
};
