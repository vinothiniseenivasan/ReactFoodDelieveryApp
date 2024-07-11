
import RestaurantCard from "./RestaurantCard";
// import "../Css/body.css";
import { useState } from "react";
import { useEffect } from "react";
// import ApiForImage from "./ApiForImage";
import Shimmer from "./Shimmer";
// import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useBodyFetch from "../Utils/useBodyFetch";


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
      <div className="flex">
        {/* search button */}
               <div className="mr-10 ">
                 <input type="text" className="rounded-md h-[40px] w-[200px] p-4 m-6 border border-solid border-gray-600  bg-gray-50 " value={input}
                         onChange={(e) => 
                          {
                            setInput(e.target.value)
                          }}
                  />
                 <button className="mr-11 font-semibold text-blue-700  border border-solid border-gray-600 px-4 rounded-md bg-purple-300 text-black cursor-pointer" onClick={   ()=>{ filterInput(input)} }>search</button>
               </div>
        {/* Top rated */}
               <button
                 className="cursor-pointer rounded-lg h-[40px] w-[280px] border border-solid border-black shadow mt-6 text-white bg-green-600 hover:bg-red-600"
                 onMouseOver={() => {
                   filterRates(filtercards);
                 }}
               >
                 Top Rated Restaurant
               </button>

             
      </div>

     
      {/* it has box of food image ,des ,reating , delivery time  */}
     
      <div className="flex m-4 px-2   justify-start flex-wrap border border-solid border-x-white shadow-lg w-auto">


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
