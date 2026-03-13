import "../assets/styles/ScoreList.css";
import { getScores } from "../services/scoreService";
import ScoreTable from "../components/ScoreTable";

const ScoreList = () => {

    const scores = getScores()
        .slice()
        .sort((a, b) => b.score - a.score);

    return (
        <section className="score_page">

            <div className="score_header">
                <h1>Scorelijst</h1>
                <p>Bekijk de beste resultaten van onze quizzen</p>
            </div>

            <div className="score_container">

                {scores.length === 0 ? (
                    <p style={{ textAlign: "center" }}>
                        Nog geen scores opgeslagen
                    </p>
                ) : (
                    <ScoreTable scores={scores} />
                )}

            </div>

        </section>
    );
};

export default ScoreList;