// HTML tekens zoals &quot; oplossen
export const decodeText = (text) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
};

// Antwoorden mixen
export const shuffleAnswers = (question) => {
    const answers = [
        ...question.incorrect_answers,
        question.correct_answer
    ];

    return answers.sort(() => Math.random() - 0.5);
};

// Antwoord vergelijken
export const isCorrectAnswer = (selected, correct) => {
    return decodeText(selected).trim() === decodeText(correct).trim();
};