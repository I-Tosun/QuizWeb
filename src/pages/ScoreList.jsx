import { Link } from "react-router-dom";
import "../assets/styles/ScoreList.css";
import ScoreTable from "../components/ScoreTable";
import { useLanguage } from "../context/useLanguage";
import { useScores } from "../context/useScores.js";

//Score list shows scores sorted bij high score
const ScoreList = () => {

    const { t } = useLanguage();
    const { scores, loading, error } = useScores();

    return (
        <section className="score_page">

            <div className="score_header">
                <h1>{t("ScoresListTitle")}</h1>
                <p>{t("scoreListText")}</p>
            </div>

            <div className="score_container">

                {loading && (
                    <p style={{ textAlign: "center" }}>Scores laden...</p>
                )}

                {error && (
                    <p style={{ textAlign: "center", color: "#d33" }}>{error}</p>
                )}

                {!loading && !error && scores.length === 0 && (
                    <p style={{ textAlign: "center" }}>
                        Nog geen scores opgeslagen
                    </p>
                )}

                {!loading && !error && scores.length > 0 && (
                    <ScoreTable scores={scores} />
                )}

                <div className="score_back">
                    <Link to="/" className="score_back_btn">
                        ← Terug naar Home
                    </Link>
                </div>

            </div>

        </section>
    );
};

export default ScoreList;