import { render, screen } from "@testing-library/react"
import Navbar from "../components/Navbar"
import { describe, it, expect } from "vitest"
import { MemoryRouter } from "react-router-dom"

describe("Navbar", () => {

    it("renders login button", () => {

        render(
            <MemoryRouter>
                <Navbar openLogin={() => {}} openSignUp={() => {}} />
            </MemoryRouter>
        )

        const loginButton = screen.getByText(/login/i)

        expect(loginButton).toBeInTheDocument()

    })

})

