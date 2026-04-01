import { render, screen } from "@testing-library/react"
import Quiz from "../pages/Quiz"
import { describe, it, expect } from "vitest"
import { MemoryRouter } from "react-router-dom"

describe("Quiz page", () => {

    it("renders loading text", () => {

        render(
            <MemoryRouter>
                <Quiz />
            </MemoryRouter>
        )

        expect(screen.getByText(/vragen laden/i)).toBeInTheDocument()

    })

})
