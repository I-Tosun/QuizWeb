import "../styles/Quiz.css";

const Quiz = () => {
    // Placeholder data (later API)
    const quizTitle = "Sport Quiz";
    const question = "Who was the champion of the Dutch Eredivisie in season 24/25?";
    const answers = ["Ajax", "PSV", "AZ", "Feyenoord"];

    return (
        <section className="quiz_page">
            <div className="quiz_container">

                <div className="quiz_info">
                    <span>{quizTitle}</span>
                    <span>Timer: 02:55</span>
                    <span>1 of 20</span>
                    <span>Score: 10</span>
                </div>

                <div className="quiz_content">

                    <div className="quiz_question">
                        <p>{question}</p>
                    </div>

                    <div className="quiz_answers">
                        {answers.map((answer) => (
                            <button key={answer}>{answer}</button>
                        ))}
                    </div>

                </div>

                <div className="quiz_navigation">
                    <button className="next_question">→</button>
                </div>

            </div>
        </section>
    );
};

export default Quiz;
