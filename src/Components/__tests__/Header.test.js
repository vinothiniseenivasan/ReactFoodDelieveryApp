import Header from "../Header";
import { fireEvent, render } from "@testing-library/react";
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
                <Header />
        </Provider>
   </BrowserRouter>
    )
   


   const loginButton = screen.getByRole("button" , {   name: "Login"    } );

   fireEvent.click(loginButton)
//    screen.debug();


  const logoutButton = screen.getByRole("button" , { name: "Logout"} )

   expect(logoutButton).toBeInTheDocument();
})