import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export const useQuiz = () => {

    const context = useContext(QuizContext);

    if (!context) {
        throw new Error("useQuiz moet binnen QuizProvider gebruikt worden");
    }

    return context;
};