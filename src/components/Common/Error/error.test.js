import {CustomError} from "./index";
import React from "react";
import { render,screen } from '@testing-library/react';

describe("CustomError component tests", () => {
    it("CustomError should have right elements with defaults", () => {
        render(<CustomError />)
        expect(screen.getByText(/oops something went wrong/i)).toBeInTheDocument()
    })
    it("CustomError should have right elements with  props", () => {
        render(<CustomError header={"Error occured"} message={"Network is down"} />)
        //screen.debug()
        expect(screen.getByText(/error occured/i)).toBeInTheDocument()
        expect(screen.getByText(/network/i)).toBeInTheDocument()
    })

})