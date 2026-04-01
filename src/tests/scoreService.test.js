import { describe, it, expect } from "vitest";
import { saveScore, getScores } from "../services/scoreService";

describe("scoreService", () => {

    it("saves score to localStorage", () => {

        const score = {
            name: "testuser",
            category: "sport",
            score: 5,
            total: 10,
            percentage: 50,
            date: "1-1-2026"
        };

        saveScore(score);

        const scores = getScores();

        expect(scores.length).toBeGreaterThan(0);
    });

});
