import QuizCard from "../components/QuizCard";
import "../styles/Home.css";

const categories = [
    { title: "Algemeen", icon: "mdi:pencil" },
    { title: "Sport", icon: "mdi:soccer" },
    { title: "Film", icon: "mdi:movie-open" },
    { title: "Eten & Drinken", icon: "mdi:silverware-fork-knife" },
    { title: "Muziek", icon: "mdi:music-note" },
    { title: "Geografie", icon: "mdi:earth" },
    { title: "Kunst", icon: "mdi:palette" },
    { title: "Geschiedenis", icon: "mdi:triangle-outline" },
];

const Home = () => {
    return (
        <section className="quiz_section">
            <div className="quiz_grid">
                {categories.map((category) => (
                    <QuizCard
                        key={category.title}
                        title={category.title}
                        icon={category.icon}
                    />
                ))}
            </div>
        </section>
    );
};

export default Home;
