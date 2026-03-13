const ScoreTable = ({ scores, showDelete = false, onDelete }) => {

    const tableClass = showDelete
        ? "score_table admin_grid"
        : "score_table user_grid";

    return (
        <div className={tableClass}>

            <div className="score_table_header">
                <span>Pos.</span>
                <span>Naam</span>
                <span>Categorie</span>
                <span>Punten</span>
                <span>%</span>
                <span>Datum</span>
                {showDelete && <span className="action_header">Action</span>}
            </div>

            {scores.map((s, index) => (

                <div
                    className={`score_row ${
                        index === 0 ? "top1" :
                            index === 1 ? "top2" :
                                index === 2 ? "top3" : ""
                    }`}
                    key={index}
                >

                    <span>{index + 1}</span>
                    <span>{s.name}</span>
                    <span>{s.category}</span>
                    <span>{s.score}/{s.total}</span>
                    <span>{s.percentage}%</span>
                    <span>{s.date}</span>

                    {showDelete && (
                        <span className="action_cell">
                            <button
                                className="delete_btn"
                                onClick={() => onDelete(index)}
                            >
                                Delete
                            </button>
                        </span>
                    )}

                </div>

            ))}

        </div>
    );
};

export default ScoreTable;