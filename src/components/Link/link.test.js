import {Link} from "./index";
import React from "react";
import { render,screen } from '@testing-library/react';

describe("Link component tests", () => {
    it("should have right elements with props", () => {
        render(<Link children={"Link Element children"}/>)
        expect(screen.getByText(/link element/i)).toBeTruthy()
    })
})