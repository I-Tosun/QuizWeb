import { describe, it, expect } from "vitest";
import { shuffleAnswers } from "../helpers/quizHelpers";

describe("shuffleAnswers", () => {

    it("returns an array", () => {

        const question = {
            correct_answer: "A",
            incorrect_answers: ["B", "C", "D"]
        };

        const result = shuffleAnswers(question);

        expect(Array.isArray(result)).toBe(true);
    });

    it("contains correct answer", () => {

        const question = {
            correct_answer: "Correct",
            incorrect_answers: ["A", "B", "C"]
        };

        const result = shuffleAnswers(question);

        expect(result).toContain("Correct");
    });

});
