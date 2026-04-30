// Solve HTML characters as & quote
export const decodeText = (text) => {
    if (!text) return "";

    const txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
};

// Mix answers
export const shuffleAnswers = (question) => {
    const answers = [
        ...question.incorrect_answers,
        question.correct_answer
    ];
    return answers.sort(() => Math.random() - 0.5);
};

// Compare answers
export const isCorrectAnswer = (selected, correct) => {
    return decodeText(selected).trim() === decodeText(correct).trim();
};