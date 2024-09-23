   
import React from "react";
   import Contact from "../Contact";

import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("rendering contact us page" , ()=>{

    render(<Contact />);
   

    const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
});


test("rendering input component in conatct page" , ()=>{

    render(<Contact />);
   

    const input = screen.getByPlaceholderText("name");
    // console.log(input)
    expect(input).toBeInTheDocument();
})