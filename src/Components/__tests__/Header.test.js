import Header from "../Header";
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";



test("should rent header component" , ()=>{
    render(
        <BrowserRouter>
        <Provider  store={appStore}>
                  render(<Header />)
        </Provider>
   </BrowserRouter>
    )
   


   const loginButton = screen.getByRole("button" );
   screen.debug();

   expect(loginButton).toBeInTheDocument();
})