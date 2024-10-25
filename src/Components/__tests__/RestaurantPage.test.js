import { render } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import RESTAURANT_MOCK_DATA from "../mocks/mocksRestaurantDetApi.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import RecommendedInMenu from "../RecommendedInMenu";
import MenuDisplay from "../MenuDisplay";
import { Provider } from "react-redux";
import appStore from  "../../Utils/appStore"

// instead of api function
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () =>{
            return Promise.resolve(RESTAURANT_MOCK_DATA)
                    }
                         })
})
test("should render each restaurant details page" ,  async () =>{


    await act(async () =>   
      
       render(
       <BrowserRouter>
          <RestaurantMenu />
       </BrowserRouter>  
       )  )
    //  console.log(RESTAURANT_MOCK_DATA.name)

      

    })

    test("should render RecommendedInMenu page" , ()=>{
        render(
            <Provider store={appStore}>
               <RecommendedInMenu/>
            </Provider>  
            )  
        
        //  const menuName = screen.getByText("Veg Biryani Family Pack");

        })

    test("should render menuDisplay page" , ()=>{
        render(
            <Provider store={appStore}>
               <MenuDisplay />
            </Provider>  
            )  
        
         const menuName = screen.getByText("Veg Biryani Family Pack");

        })