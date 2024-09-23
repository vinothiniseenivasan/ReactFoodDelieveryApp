import RestaurantCard from "../RestaurantCard";
import { screen } from "@testing-library/react";

import toBeInTheDocument from "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import MOCK_DATA from "../mocks/restaurantCardMock.json"

test("should test restaurantCard Component" , ()=>{
    render(<RestaurantCard  res={MOCK_DATA}  />);


   const restaurantName =   screen.getByText("Restaurant Chef Pillai");

   expect(restaurantName).toBeInTheDocument();





    
})