import QuizCard from "../components/QuizCard";
import "../assets/styles/Home.css";
import { useNavigate } from "react-router-dom";
import { fetchQuizQuestions } from "../services/triviaService";
import { useQuiz } from "../context/useQuiz";

const categories = [
    { key: "general", slug: "algemeen", icon: "mdi:pencil" },
    { key: "sport", slug: "sport", icon: "mdi:soccer" },
    { key: "film", slug: "film", icon: "mdi:movie-open" },
    { key: "food", slug: "eten-drinken", icon: "mdi:silverware-fork-knife" },
    { key: "music", slug: "muziek", icon: "mdi:music-note" },
    { key: "geography", slug: "geografie", icon: "mdi:earth" },
    { key: "art", slug: "kunst", icon: "mdi:palette" },
    { key: "history", slug: "geschiedenis", icon: "mdi:triangle-outline" },
];

const Home = () => {

    const navigate = useNavigate();
    const { setQuestions, setCategory } = useQuiz();

    const handleClick = async (slug) => {

        const data = await fetchQuizQuestions(slug);

        setQuestions(data);
        setCategory(slug);

        localStorage.setItem("quizQuestions", JSON.stringify(data));
        localStorage.setItem("quizCategory", slug);

        navigate(`/quiz/${slug}`);
    };

    return (
        <section className="quiz_section">
            <div className="quiz_grid">
                {categories.map(({ key, slug, icon }) => (
                    <QuizCard
                        key={key}
                        titleKey={key}
                        icon={icon}
                        onClick={() => handleClick(slug)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Home;