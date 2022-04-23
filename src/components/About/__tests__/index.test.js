import React from "react";
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
    // Test the rendering of the component
    it("renders", () => {
        render(<About/>);
    });

    //Test snapshot
    it("matches snapshot DOM node structure", () => {
        const {asFragment} = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    })
})