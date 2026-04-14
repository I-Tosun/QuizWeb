import { t } from "../helpers/translate";
import DeleteButton from "./buttons/DeleteButton.jsx";


//Score table reusable component for displaying scores
const ScoreTable = ({ scores, showDelete = false, onDelete }) => {

    const tableClass = showDelete
        ? "score_table admin_grid"
        : "score_table user_grid";

    const getRankClass = (index) => {
        if (index === 0) return "top1";
        if (index === 1) return "top2";
        if (index === 2) return "top3";
        return "";
    };

    return (
        <div className={tableClass}>

            <div className="score_table_header">
                <span>Pos.</span>
                <span>{t("name")}</span>
                <span>{t("category")}</span>
                <span>{t("point")}</span>
                <span>%</span>
                <span>{t("date")}</span>
                {showDelete && <span className="action_header">Action</span>}
            </div>

            {scores.map((s, index) => (
                <div
                    key={s.id || index}
                    className={`score_row ${getRankClass(index)}`}>
                    <span>{index + 1}</span>
                    <span>{s.name}</span>
                    <span>{s.category}</span>
                    <span>{s.score}/{s.total}</span>
                    <span>{s.percentage}%</span>
                    <span>{s.date}</span>

                    {showDelete && (
                        <span className="action_cell">
                            <DeleteButton onDelete={() => onDelete(s.id)}/>
                        </span>
                    )}
                </div>
            ))}

        </div>
    );
};

export default ScoreTable;
