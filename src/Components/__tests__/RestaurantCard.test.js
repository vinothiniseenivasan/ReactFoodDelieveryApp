import RestaurantCard from "../RestaurantCard";
import { screen } from "@testing-library/react";

import toBeInTheDocument from "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import MOCK_DATA from "../mocks/restaurantCardMock.json"
// import RestaurantWithOffer from "../Body";

test("should test restaurantCard Component" , ()=>{
    render(<RestaurantCard  res={MOCK_DATA}  />);

    // console.log(MOCK_DATA.aggregatedDiscountInfoV3.header)
    // ?.aggregatedDiscountInfoV3?.header + " " +MOCK_DATA.info?.aggregatedDiscountInfoV3?.subHeader)


   const restaurantName =   screen.getByText("Restaurant Chef Pillai");

   expect(restaurantName).toBeInTheDocument();





    
})


