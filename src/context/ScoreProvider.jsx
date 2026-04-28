import { useState, useEffect, useRef } from "react";
import { getScores } from "../services/scoreService";
import { ScoreContext } from "./ScoreContext";


function ScoreContextProvider({ children }) {

    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;   //  voorkomt dubbele call
        hasFetched.current = true;

        getScores()
            .then(data => {
                setScores(data.slice().sort((a, b) => b.score - a.score));
            })
            .catch(() => setError("Scores konden niet worden geladen."))
            .finally(() => setLoading(false));
    }, []);

    return (
        <ScoreContext.Provider value={{
            scores,
            setScores,
            loading,
            error,
        }}>
            {children}
        </ScoreContext.Provider>
    );
}

export default ScoreContextProvider;