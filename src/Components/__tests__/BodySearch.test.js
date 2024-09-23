import { render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA  from "../mocks/mocksFetchApi.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";



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
    
});