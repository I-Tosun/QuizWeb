import "../assets/styles/Quiz.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useMemo, useRef } from "react";

import { fetchQuizQuestions } from "../services/triviaService";
import { shuffleAnswers, isCorrectAnswer, decodeText } from "../helpers/quizHelpers";
import { saveScore } from "../services/scoreService";
import { getUserFromToken } from "../services/authService";
import { translateCategory } from "../helpers/categories";
import { t } from "../helpers/translate";

const Quiz = () => {

    const { category } = useParams();
    const normalizedCategory = category?.toLowerCase();
    const username = getUserFromToken() || "Speler";

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizFinished, setQuizFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(20);

    const scoreStoredRef = useRef(false);
    const currentQuestion = questions[currentQuestionIndex];

    const percentage = questions.length
        ? Math.round((score / questions.length) * 100)
        : 0;

    const shuffledAnswers = useMemo(() => {
        if (!currentQuestion) return [];
        return shuffleAnswers(currentQuestion);
    }, [currentQuestion]);

    const resetQuiz = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setQuizFinished(false);
        setTimeLeft(20);
        setError(null);
        scoreStoredRef.current = false;
    };

    // Get questions
    useEffect(() => {
        if (!normalizedCategory) return;

        const loadQuestions = async () => {
            setLoading(true);
            resetQuiz();

            try {
                const results = await fetchQuizQuestions(normalizedCategory);
                setQuestions(results || []);
            } catch {
                setError("Vragen konden niet worden geladen. Probeer opnieuw.");
            } finally {
                setLoading(false);
            }
        };

        void loadQuestions();
    }, [normalizedCategory]);

    // Timer
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

    // Score save
    useEffect(() => {
        if (!quizFinished || scoreStoredRef.current || !questions.length) return;

        const storeScore = async () => {
            await saveScore({
                name: username,
                category: normalizedCategory,
                score,
                total: questions.length,
                percentage,
                date: new Date().toLocaleDateString()
            });
        };

        storeScore().catch(console.error);
        scoreStoredRef.current = true;
    }, [quizFinished, score, questions.length, normalizedCategory, username, percentage]);

    // Loading state
    if (loading) {
        return (
            <section className="quiz_page">
                <div className="quiz_container">
                    <p className="quiz_loading">Vragen laden...</p>
                </div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="quiz_page">
                <div className="quiz_container">
                    <p className="quiz_error">{error}</p>
                    <Link to="/" className="primary_btn">Terug naar home</Link>
                </div>
            </section>
        );
    }

    // No questions found
    if (!questions.length) {
        return (
            <section className="quiz_page">
                <div className="quiz_container">
                    <p className="quiz_error">Geen vragen gevonden voor deze categorie.</p>
                    <Link to="/" className="primary_btn">Terug naar home</Link>
                </div>
            </section>
        );
    }

    // Quiz finished
    if (quizFinished) {
        return (
            <section className="quiz_page">
                <div className="quiz_container">
                    <div className="quiz_content quiz_finished">

                        <div className="finish_icon">🏁</div>
                        <h2>{t("quizFinished")}</h2>
                        <p>{t("yourScore")}: {score} / {questions.length}</p>
                        <p>{t("percentage")}: {percentage}%</p>

                        <div className="quiz_finish_actions">
                            <Link to="/scores" className="primary_btn">
                                {t("viewScores")}
                            </Link>
                            <Link to="/" className="primary_btn restart_btn">
                                {t("newQuiz")}
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        );
    }

    const handleAnswer = (answer) => {
        if (selectedAnswer) return;
        setSelectedAnswer(answer);
        if (isCorrectAnswer(answer, currentQuestion.correct_answer)) {
            setScore(prev => prev + 1);
        }
    };

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
                    <span>{translateCategory(normalizedCategory)} Quiz</span>
                    <span className={`quiz_timer ${timeLeft <= 5 ? "timer_warning" : ""}`}>
                        Timer: {timeLeft}s
                    </span>
                    <span>{currentQuestionIndex + 1} / {questions.length}</span>
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
                                } else if (isCorrectAnswer(answer, selectedAnswer)) {
                                    buttonClass = "wrong";
                                }
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(answer)}
                                    className={buttonClass}
                                    disabled={!!selectedAnswer}>
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
                        disabled={!selectedAnswer}>
                        →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Quiz;