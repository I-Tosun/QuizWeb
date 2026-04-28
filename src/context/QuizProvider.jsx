import { useState } from "react";
import { QuizContext } from "./QuizContext";

const QuizProvider = ({ children }) => {

    const [questions, setQuestions] = useState([]);
    const [category, setCategory] = useState(null);

    return (
        <QuizContext.Provider value={{
            questions,
            setQuestions,
            category,
            setCategory
        }}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizProvider;