import { useState } from "react";
import { QuizContext } from "./QuizContext";

const QuizProvider = ({ children }) => {

    const [questions, setQuestions] = useState([]);
    const [category, setCategory] = useState(null);

    const updateQuestions = (newQuestions) => {
        setQuestions(newQuestions);
    };

    const updateCategory = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <QuizContext.Provider value={{
            questions,
            setQuestions: updateQuestions, // 🔧 gecontroleerde setter
            category,
            setCategory: updateCategory
        }}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizProvider;