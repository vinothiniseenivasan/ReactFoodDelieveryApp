import card from "./card";
import RestaurantCard from "./RestaurantCard";
import "../Css/body.css";
import { useState } from "react";
import { useEffect } from "react";
// import ApiForImage from "./ApiForImage";
import Shimmer from "./Shimmer";
// import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useBodyFetch from "../Utils/useBodyFetch";
import Button from '@mui/material/Button';


const Body = ({ img }) => {
  
  const [input ,setInput] = useState("");
  
  const [bool ,setBool] = useState(false);

  const {filtercards, filteredRestaurants,setFiltercards,setFilteredRestaurants} = useBodyFetch();

 
   
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

//  check online network is available or not
  const onLineStatus = useOnlineStatus();
  // console.log("onLineStatus" ,onLineStatus)
  if(onLineStatus === false)
  {
    return(
      <h1>Looks like you are in offline ... check your Network</h1>
    )
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

               {/* <Button
                onMouseOver={() => {
                  filterRates(filtercards);
                }}
                 variant="contained" color="secondary" size="large"  >
                  Top Rated Restaurant
              </Button> */}
      </div>

     
      {/* it has box of food image ,des ,reating , delivery time  */}
     
      <div className="restauant-container">


        {/* {console.log("filtercards" , filtercards)} */}
        {filteredRestaurants.map((eachRestaurant, index) => {
          // {console.log("eachRestaurant" ,eachRestaurant)}
         
          return (
            <div>
              <Link    key={eachRestaurant?.info?.id}
                   to={"/restaurants/" + eachRestaurant?.info?.id} >
                       <RestaurantCard 
                        
                         res={eachRestaurant.info}
                        />
              </Link>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
