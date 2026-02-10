import "../styles/ScoreList.css";

const ScoreList = () => {
    return (
        <>
            {/* 🔵 FULL WIDTH HEADER */}
            <header className="score_header">
                <div className="score_header_inner">
                    <h1>Scorelijst</h1>
                    <p>Bekijk de beste resultaten van onze quizzen</p>
                </div>
            </header>

            {/* ⬜ CONTENT */}
            <section className="score_page">
                <div className="score_container">
                    <div className="score_table">

                        <div className="score_table_header">
                            <span>Pos.</span>
                            <span>Naam</span>
                            <span>Punten</span>
                            <span>Resultaat</span>
                        </div>

                        <div className="score_row">
                            <span>1</span>
                            <span>Ismail Tosun</span>
                            <span>54</span>
                            <span>64%</span>
                        </div>

                        <div className="score_row">
                            <span>2</span>
                            <span>Yunus</span>
                            <span>59</span>
                            <span>59%</span>
                        </div>

                        <div className="score_row">
                            <span>3</span>
                            <span>Dina</span>
                            <span>46</span>
                            <span>55%</span>
                        </div>

                        <div className="score_row">
                            <span>4</span>
                            <span>Amal</span>
                            <span>41</span>
                            <span>49%</span>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ScoreList;
