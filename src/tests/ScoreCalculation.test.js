import { describe, it, expect } from "vitest"

describe("Score calculation", () => {

    it("calculates percentage correctly", () => {

        const score = 8
        const total = 10

        const percentage = Math.round((score / total) * 100)

        expect(percentage).toBe(80)

    })

})
