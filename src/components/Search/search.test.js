import {Search} from "./index";
import React from "react";
import {render, screen} from '@testing-library/react';
import fireEvent from "@testing-library/user-event"
import userEvent from "@testing-library/user-event";

describe("Search component tests", () => {
    const searchStartedMock = jest.fn((x) => {
    })
  
    it("should have right elements",  () => {
        render(<Search searchStarted={searchStartedMock}/>)
        const searchField = screen.getByRole("textbox")
        const searchButton = screen.getByRole("button")
        userEvent.type(searchField,"react");
        fireEvent.click(searchButton)
        expect(searchStartedMock).toHaveBeenCalled()
        expect(searchStartedMock).toHaveBeenCalledWith("react")
    })


})