import {Icon} from "./index";
import React from "react";
import { render,screen } from '@testing-library/react';

describe("Icon component tests", () => {
    it("Icon should have right elements with defaults", () => {
        render(<Icon symbol={"Show this"} />)
        expect(screen.getByText(/show this/i)).toBeInTheDocument()
    })
})