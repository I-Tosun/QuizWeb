import "../../assets/styles/Admin.css";
import { useState } from "react";
import { getScores, deleteScore } from "../../services/scoreService";
import ScoreTable from "../../components/ScoreTable";

const ManageScores = () => {

    const [scores, setScores] = useState(() => getScores());

    const handleDelete = (index) => {

        if (!window.confirm("Score verwijderen?")) return;

        const updatedScores = deleteScore(index);

        setScores(updatedScores);
    };

    return (
        <section className="admin_page">

            <div className="admin_container">

                <div className="admin_header">
                    <h1>Manage Scores</h1>
                    <p>Hier kan de admin quiz resultaten beheren.</p>
                </div>

                <ScoreTable
                    scores={scores}
                    showDelete={true}
                    onDelete={handleDelete}
                />

            </div>

        </section>
    );
};

export default ManageScores;