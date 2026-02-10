import "../styles/Quiz.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Quiz = () => {
    const { category } = useParams();
    const normalizedCategory = category?.toLocaleLowerCase();

    const TOKEN = import.meta.env.VITE_TRIVIA_TOKEN;

    const categoryMap = {
        algemeen:9,
        sport: 21,
        film: 11,
        muziek: 12,
        geografie: 22,
        geschiedenis: 23,
        kunst: 25,
        "eten-drinken": 9
    };


    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await fetch(
                    `https://opentdb.com/api.php?amount=3&category=${categoryMap[normalizedCategory]}&type=multiple`
                );
                const data = await response.json();
                console.log("API response", data);

                if (data.response_code === 0) {
                    setQuestions(data.results);
                } else {
                    console.error("API error code", data.response_code);
                    setQuestions([]);
                }
            } catch (error) {
                console.error("Fout bij ophalen vragen", error);
                setQuestions([]);
            } finally {
                setLoading(false);
            }
        }

        if (normalizedCategory && categoryMap[normalizedCategory]) {
            fetchQuestions();
        } else {
            console.log("Category bestaat niet:", normalizedCategory);
            setLoading(false);
            setQuestions([]);
        }

    }, [normalizedCategory]);

    if (loading) return <p>Vragen laden...</p>;
    if (!questions.length) return <p>Geen vragen gevonden.</p>;

    const currentQuestion = questions[currentQuestionIndex];

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    return (
        <section className="quiz_page">
            <div className="quiz_container">

                <div className="quiz_info">
                    <span>{category} Quiz</span>
                    <span>
                        {currentQuestionIndex + 1} of {questions.length}
                    </span>
                </div>

                <div className="quiz_content">
                    <div className="quiz_question">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: currentQuestion.question
                            }}
                        />
                    </div>

                    <div className="quiz_answers">
                        {[...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
                            .sort(() => Math.random() - 0.5)
                            .map((answer, index) => (
                                <button
                                    key={index}
                                    dangerouslySetInnerHTML={{ __html: answer }}
                                />
                            ))}
                    </div>
                </div>

                <div className="quiz_navigation">
                    <button
                        className="next_question"
                        onClick={nextQuestion}
                    >
                        →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Quiz;
