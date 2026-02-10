import QuizCard from "../components/QuizCard";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const categories = [
    { title: "Algemeen", slug:"algemeen", icon: "mdi:pencil" },
    { title: "Sport", slug:"sport", icon: "mdi:soccer" },
    { title: "Film", slug:"film",icon: "mdi:movie-open" },
    { title: "Eten & Drinken", slug:"eten-drinken" , icon: "mdi:silverware-fork-knife" },
    { title: "Muziek", slug:"muziek", icon: "mdi:music-note" },
    { title: "Geografie", slug:"geografie", icon: "mdi:earth" },
    { title: "Kunst", slug:"kunst", icon: "mdi:palette" },
    { title: "Geschiedenis" ,slug:"geschiedenis", icon: "mdi:triangle-outline" },
];

const Home = () => {
    const navigate = useNavigate();


    return (
        <section className="quiz_section">
            <div className="quiz_grid">
                {categories.map((category) => (
                    <QuizCard
                        key={category.title}
                        title={category.title}
                        icon={category.icon}
                        onClick ={() => navigate(`/quiz/${category.slug}`)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Home;
