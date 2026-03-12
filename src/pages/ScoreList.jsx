import "../assets/styles/ScoreList.css";
import { getScores } from "../services/scoreService";

const ScoreList = () => {

    // state wordt direct gevuld (geen useEffect meer nodig)
    const scores = getScores()
        .slice() // kopie maken
        .sort((a, b) => b.score - a.score);

    return (
        <section className="score_page">

            <div className="score_header">
                <h1>Scorelijst</h1>
                <p>Bekijk de beste resultaten van onze quizzen</p>
            </div>

            <div className="score_container">

                <div className="score_table">
                    <div className="score_header_row">
                        <span>Pos.</span>
                        <span>Naam</span>
                        <span>Categorie</span>
                        <span>Punten</span>
                        <span>%</span>
                        <span>Datum</span>
                    </div>

                    {scores.length === 0 && (
                        <p style={{textAlign:"center"}}>
                            Nog geen scores opgeslagen
                        </p>
                    )}

                    {scores.map((s, index) => (
                        <div className="score_row" key={index}>
                            <span>{index + 1}</span>
                            <span>{s.name}</span>
                            <span>{s.category}</span>
                            <span>{s.score}/{s.total}</span>
                            <span>{s.percentage}%</span>
                            <span>{s.date}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ScoreList;
