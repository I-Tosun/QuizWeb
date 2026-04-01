//// Management of scores via Novi Dynamic API

import { Link } from "react-router-dom";
import "../../assets/styles/Admin.css";
import { deleteScore } from "../../services/scoreService";
import ScoreTable from "../../components/ScoreTable";
import useScores from "../../hooks/useScores";

const ManageScores = () => {

    const { scores, setScores, loading, error } = useScores();

    const handleDelete = async (id) => {
        if (!window.confirm("Score verwijderen?")) return;
        await deleteScore(id);
        setScores(prev => prev.filter((s) => s.id !== id));
    };

    return (
        <section className="admin_page">
            <div className="admin_container">

                <div className="admin_header">
                    <h1>Manage Scores</h1>
                    <p>Beheer quiz resultaten.</p>
                </div>

                {loading && <p>Scores laden...</p>}

                {error && <p style={{ color: "#d33" }}>{error}</p>}

                {!loading && !error && (
                    <ScoreTable
                        scores={scores}
                        showDelete={true}
                        onDelete={handleDelete}/>
                )}

                <div className="admin_back">
                    <Link to="/admin" className="admin_back_btn">
                        ← Terug naar Dashboard
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ManageScores;