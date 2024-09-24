import { fireEvent, render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA  from "../mocks/mocksFetchApi.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom"



global.fetch =jest.fn(()=>{
    return Promise.resolve({
      json :  ()=>{
          return Promise.resolve(MOCK_DATA);

      }
    })
 })

test("Should render body Component" ,   async () =>{


     await act(async () =>   
       
        render(
        <BrowserRouter>
           <Body/>
        </BrowserRouter>  
        )  )
   const searchButton = screen.getByRole("button" , { name : "search"});

   const searchInput = screen.getByTestId( "searchInput" );
   fireEvent.change(searchInput , { target : {value : "pizza" } }  );


   fireEvent.click(searchButton);

   console.log("searchButton" , searchInput);

   // assert screen should filter text with  coffee cards 

     const filterCard = screen.getAllByTestId("resCard");
     expect(filterCard.length).toBe(1);

});