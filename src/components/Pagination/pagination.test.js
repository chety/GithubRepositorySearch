import {Pagination} from "./index";
import React from "react";
import {render, screen} from '@testing-library/react';
import fireEvent from "@testing-library/user-event"

describe("Pagination component tests", () => {
    const pageClickMock = jest.fn((x) => {
    })
    function setup(pageInfo){

        render(<Pagination pageInfo={pageInfo} onPageChanged={pageClickMock}/>)
    }

    it("should have right elements when it is first page",  () => {
        setup({
            activePage: 1,
            lastPage: 40
        })
        const previousButton = screen.getByTitle(/previous/i)
        expect(previousButton).toBeDisabled()

        const nextButton = screen.getByTitle(/next/i)
        expect(nextButton).toBeEnabled()
        fireEvent.click(nextButton);
        expect(pageClickMock).toHaveBeenCalled()
        expect(pageClickMock).toHaveBeenCalledWith(1)
    })

    it("should have right elements when it is last page",  () => {
        setup({
            activePage: 22,
            lastPage: 22
        })
        const previousButton = screen.getByTitle(/previous/i)
        expect(previousButton).toBeEnabled()
        fireEvent.click(previousButton);
        expect(pageClickMock).toHaveBeenCalled()
        expect(pageClickMock).toHaveBeenCalledWith(-1)

        const nextButton = screen.getByTitle(/next/i)
        expect(nextButton).toBeDisabled()

    })
})