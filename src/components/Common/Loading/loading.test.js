import {Loading} from "./index";
import React from "react";
import { render,screen } from '@testing-library/react';

describe("Loading component tests", () => {
    it("should have right elements with defaults", () => {
        render(<Loading />)
        expect(screen.getByText(/loading.../i)).toBeInTheDocument()
    })

    it("should have right elements with props", () => {
        render(<Loading message={"Super component results are being loaded"}/>)
        expect(screen.getByText(/super component/i)).toBeInTheDocument()
    })
})