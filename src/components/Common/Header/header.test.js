import {Header} from "./index";
import React from "react";
import { render,screen } from '@testing-library/react';

describe("Header component tests", () => {
    it("Header should have right elements with defaults", () => {
        render(<Header />)
        expect(screen.getByText(/Github Repository/i)).toBeInTheDocument()
    })
    it("Header should have right elements with  props", () => {
        render(<Header title={"Awsome Search Engine For Github"}/>)
        expect(screen.getByText(/awsome search/i)).toBeInTheDocument()
    })

})