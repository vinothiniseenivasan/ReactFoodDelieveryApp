import card from "./card";
import RestaurantCard from "./RestaurantCard";
import "../Css/body.css";
import { useState } from "react";
import { useEffect } from "react";
import ApiForImage from "./ApiForImage";
import Shimmer from "./Shimmer";

const Body = ({ img }) => {
  const [filtercards, setFiltercards] = useState([]);
  const [filteredRestaurants ,setFilteredRestaurants ] =useState([]);
  const [input ,setInput] = useState("");
  // console.log("image", img);
  //  {console.log("img[index]" ,img[0].strMealThumb)}
  const [bool ,setBool] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);


 

  async function fetchData() {
   
    const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const apiResponse = await response.json();
     console.log("data api", apiResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


     const apiInfo = apiResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
     
    setFiltercards(apiInfo);
    setFilteredRestaurants(apiInfo);
  }

  

  // function to filter res rate >= 4.0
  function filterRates(filtercards) {
    const newCard = filtercards.filter((eachCard) => {
      return eachCard.info.avgRating >= 4.3;
    });
    console.log("newCard", newCard);

    setFilteredRestaurants(newCard);
  }

  // function to filter input based on restaurant name search
  function filterInput(input)
  {
   
        var filterResName = filtercards.filter ( (eachRestaurant)=>
         {
        return  ( eachRestaurant.info.name.toLowerCase().includes(input.toLowerCase())  )
         } )
        
         setFilteredRestaurants(filterResName);
  }



  // (bool === true) ? (setFiltercards(filterResName) ) : (filtercards)
  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        {/* search button */}
               <div className="search-con">
                 <input type="text" className="search-box" value={input}
                         onChange={(e) => 
                          {
                            setInput(e.target.value)
                          }}
                  />
                 <button onClick={   ()=>{ filterInput(input)}  }>search</button>
               </div>
        {/* Top rated */}
               <button
                 className="filter-btn"
                 onMouseOver={() => {
                   filterRates(filtercards);
                 }}
               >
                 Top Rated Restaurant
               </button>
      </div>

     
      {/* it has box of food image ,des ,reating , delivery time  */}
     
      <div className="restauant-container">


        {/* {console.log("filtercards" , filtercards)} */}
        {filteredRestaurants.map((eachRestaurant, index) => {
          // {console.log("eachRestaurant" ,eachRestaurant)}
         
          return (
            <div>
              <RestaurantCard
                key={eachRestaurant?.info?.id}
                res={eachRestaurant.info}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
