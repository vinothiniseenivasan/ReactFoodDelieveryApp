

import { useState } from "react";
import { useEffect } from "react";
const useBodyFetch =() =>
{

    const [filtercards, setFiltercards] = useState([]);
    const [filteredRestaurants ,setFilteredRestaurants ] =useState([]);

    useEffect(() => {
        fetchData();
      }, []);

      async function fetchData() {
        // const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const apiResponse = await response.json();
        //  console.log("data api", apiResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        const apiInfo = apiResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // console.log("apiInfo" ,apiResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         
        setFiltercards(apiInfo);
        setFilteredRestaurants(apiInfo);
      }

      return {filtercards ,filteredRestaurants ,setFiltercards ,setFilteredRestaurants};
    

}
export default useBodyFetch;