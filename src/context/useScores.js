import { useContext } from "react";
import { ScoreContext } from "./ScoreContext";

export function useScores() {
    return useContext(ScoreContext);
}