import { useEffect, useState } from "react";
import { getScores } from "../services/scoreService";

const useScores = () => {

    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getScores()
            .then(data => {
                setScores(data.slice().sort((a, b) => b.score - a.score));
            })
            .catch(() => setError("Scores konden niet worden geladen."))
            .finally(() => setLoading(false));
    }, []);

    return { scores, setScores, loading, error };
};

export default useScores;