import "../assets/styles/Quiz.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo, useRef } from "react";
import { fetchQuizQuestions } from "../services/triviaService";
import { shuffleAnswers, isCorrectAnswer, decodeText } from "../helpers/quizHelpers";
import { saveScore } from "../services/scoreService";
import { getUserFromToken } from "../services/authService";

const Quiz = () => {
    const { category } = useParams();
    const normalizedCategory = category?.toLowerCase();

    // STATE
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizFinished, setQuizFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(20);

    // voorkomt dubbel opslaan
    const scoreStoredRef = useRef(false);

    // username ophalen
    const username = getUserFromToken() || "Speler";

    // Huidige vraag
    const currentQuestion = questions[currentQuestionIndex];

    // Antwoorden shufflen
    const shuffledAnswers = useMemo(() => {
        if (!currentQuestion) return [];
        return shuffleAnswers(currentQuestion);
    }, [currentQuestion]);

    // Vragen ophalen
    useEffect(() => {
        if (!normalizedCategory) return;

        const loadQuestions = async () => {
            setLoading(true);

            setScore(0);
            setCurrentQuestionIndex(0);
            setSelectedAnswer(null);
            setQuizFinished(false);
            scoreStoredRef.current = false;

            const results = await fetchQuizQuestions(normalizedCategory);
            setQuestions(results);

            setLoading(false);
        };

        loadQuestions();

    }, [normalizedCategory]);

    // TIMER
    useEffect(() => {

        if (quizFinished || !currentQuestion) return;

        const timer = setTimeout(() => {

            setTimeLeft(prev => {

                if (prev <= 1) {

                    if (currentQuestionIndex < questions.length - 1) {
                        setCurrentQuestionIndex(i => i + 1);
                        setSelectedAnswer(null);
                        return 20;
                    } else {
                        setQuizFinished(true);
                        return 0;
                    }
                }

                return prev - 1;

            });

        }, 1000);

        return () => clearTimeout(timer);

    }, [timeLeft, currentQuestionIndex, questions.length, quizFinished, currentQuestion]);

    // Score opslaan
    useEffect(() => {

        if (!quizFinished || scoreStoredRef.current || !questions.length) return;

        const percentage = Math.round((score / questions.length) * 100);

        saveScore({
            name: username,
            category: normalizedCategory,
            score,
            total: questions.length,
            percentage,
            date: new Date().toLocaleDateString()
        });

        scoreStoredRef.current = true;

    }, [quizFinished, score, questions.length, normalizedCategory, username]);

    // LOADING
    if (loading) return <p>Vragen laden...</p>;
    if (!questions.length) return <p>Geen vragen gevonden.</p>;

    // Quiz klaar
    if (quizFinished) {
        return (
            <section className="quiz_page">
                <div className="quiz_container">
                    <div className="quiz_content quiz_finished">

                        <div className="finish_icon">🏁</div>

                        <h2>Quiz afgerond</h2>

                        <p>Je score: {score} van {questions.length}</p>

                        <p>
                            Percentage: {Math.round((score / questions.length) * 100)}%
                        </p>

                    </div>
                </div>
            </section>
        );
    }

    // Antwoorden kiezen
    const handleAnswer = (answer) => {

        if (selectedAnswer) return;

        setSelectedAnswer(answer);

        if (isCorrectAnswer(answer, currentQuestion.correct_answer)) {
            setScore(prev => prev + 1);
        }

    };

    // Volgende vraag
    const nextQuestion = () => {

        if (!selectedAnswer) return;

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setTimeLeft(20);
        } else {
            setQuizFinished(true);
        }

    };

    return (
        <section className="quiz_page">
            <div className="quiz_container">

                <div className="quiz_info">
                    <span>{normalizedCategory} Quiz</span>

                    <span className="quiz_timer">
                        ⏱ {timeLeft}s
                    </span>

                    <span>
                        {currentQuestionIndex + 1} / {questions.length}
                    </span>
                </div>

                <div className="quiz_content">

                    <div className="quiz_question">
                        <p>{decodeText(currentQuestion.question)}</p>
                    </div>

                    <div className="quiz_answers">

                        {shuffledAnswers.map((answer, index) => {

                            let buttonClass = "";

                            if (selectedAnswer) {

                                if (isCorrectAnswer(answer, currentQuestion.correct_answer)) {
                                    buttonClass = "correct";
                                }

                                else if (isCorrectAnswer(answer, selectedAnswer)) {
                                    buttonClass = "wrong";
                                }

                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(answer)}
                                    className={buttonClass}
                                    disabled={!!selectedAnswer}
                                >
                                    {decodeText(answer)}
                                </button>
                            );

                        })}

                    </div>

                </div>

                <div className="quiz_navigation">
                    <button
                        className="next_question"
                        onClick={nextQuestion}
                        disabled={!selectedAnswer}
                    >
                        →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Quiz;
