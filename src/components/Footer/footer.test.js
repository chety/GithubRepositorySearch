import {Footer} from "./index";
import React from "react";
import { render,screen } from '@testing-library/react';

describe("Loading component tests", () => {
    it("should have right elements with defaults", () => {
        render(<Footer />)
        expect(screen.getByText(/total count:/i)).toBeInTheDocument()
    })

    it("should have right elements with props", () => {
        render(<Footer message={"Record:"} count={49}/>)
        expect(screen.getByText(/Record:/i)).toBeTruthy()
        expect(screen.getByText(/49/i)).toBeTruthy()
    })
})