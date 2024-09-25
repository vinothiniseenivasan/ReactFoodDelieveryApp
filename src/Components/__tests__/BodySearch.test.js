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


   const beforeFilterCards = screen.getAllByTestId("resCard");

   // console.log(beforeFilterCards.length)

   expect(beforeFilterCards.length).toBe(20);



   fireEvent.change(searchInput , { target : {value : "pizza" } }  );


   fireEvent.click(searchButton);

   // console.log("searchButton" , searchInput);

   // assert screen should filter text with  coffee cards 

     const filterCardAfterFilter = screen.getAllByTestId("resCard");
     expect(filterCardAfterFilter.length).toBe(1);

});



test ("should render less than 300 restaurants" , async ()=>
{

   await act(async () =>{
      render(
         <BrowserRouter>
             <Body />
         </BrowserRouter>
      )
   })

   // before filter card
   const beforeFilterRes = screen.getByRole("button" , { name : "Less than Rs.300"});

   fireEvent.click(beforeFilterRes);

   // after filter less than 300 restaurant
   const afterFilterRes = screen.getAllByTestId("resCard");

   expect(afterFilterRes.length).toBe(9);



})