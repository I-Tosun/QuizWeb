export const getScores = () => {
    const scores = localStorage.getItem("scores");
    return scores ? JSON.parse(scores) : [];
};

export const saveScore = (score) => {

    const scores = getScores();

    scores.push(score);

    localStorage.setItem("scores", JSON.stringify(scores));
};


export const deleteScore = (index) => {

    const scores = getScores();

    const updatedScores = scores.filter((_, i) => i !== index);

    localStorage.setItem("scores", JSON.stringify(updatedScores));

    return updatedScores;
};