
import RestaurantCard from "./RestaurantCard";
import React from "react";

import { Children, useContext, useState } from "react";
import { useEffect } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useBodyFetch from "../Utils/useBodyFetch";
import HigherOrder from "./HigherOrder";
import UserContext from "../Utils/UserContext";


const Body = ({ img }) => {
  
  const [input ,setInput] = useState("");
  
  const [bool ,setBool] = useState(false);

  // const [userName ,setUserName ] = useState(" ");

  const {filtercards, filteredRestaurants,setFiltercards,setFilteredRestaurants} = useBodyFetch();

  const [deliveryTime ,setDeliveryTime] =useState(2000);

  const {userName ,setUserName} = useContext(UserContext);
  console.log("contextData" ,userName)



  //  higher Order Compnent
const RestaurantWithOffer = HigherOrder(RestaurantCard);
   
  


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



  // filter Restaurant by Delivery Time
  function fastDelivery(filtercards)
  {
   var filterTime = [...filtercards];

   const filterResByDeltime =  filterTime.sort((a,b) => (a.info.sla.deliveryTime - b.info.sla.deliveryTime) )
     
    //  console.log("filterResByDeltime" ,filterResByDeltime);
     setFilteredRestaurants(filterResByDeltime)

  console.log("filteredRestaurants" , filteredRestaurants)


  }


  // fliter res by price  than 300 - 400
  function filterByRs(filtercards)
  {
    var filterByCost = [...filtercards];
          const newCardBycost = filtercards.filter((eachRestaurant) =>
            {
               const price = extractPrice(eachRestaurant.info.costForTwo);
              //  console.log("price" ,price)
              return price >= 300 && price <= 400;


            }  )
            // console.log("newCardBycost", newCardBycost)
            setFilteredRestaurants(newCardBycost)

  }
  // fliter res by price less   300 - 400
  function filterBylessthan(filtercards)
  {
    var filterByCost = [...filtercards];
          const newCardBycost = filtercards.filter((eachRestaurant) =>
            {
               const price = extractPrice(eachRestaurant.info.costForTwo);
              //  console.log("price" ,price)
              return price <= 300;


            }  )
            // console.log("newCardBycost", newCardBycost)
            setFilteredRestaurants(newCardBycost)

  }

  function extractPrice(str) {
    // Use a regular expression to find digits in the string
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  }


  console.log("filteredRestaurants" ,filteredRestaurants)

  // (bool === true) ? (setFiltercards(filterResName) ) : (filtercards)
  return filteredRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
       <div className="ml-[1.8rem] font-black lett font-sarif  mt-[20px]">
           Restaurants with online food delivery in Bangalore
      </div>



       <div className="flex ml-[1.8rem] mt-6 text-center justify-start">


       <div className="mr-10">
                 <input type="text" className="rounded-md h-[40px] w-[200px] p-1 mr-5 border border-solid border-gray-600  bg-gray-50 " value={input}
                         onChange={(e) => 
                          {
                            setInput(e.target.value)
                          }}
                  />
                 <button className="h-[25px] w-[75px] font-semibold  border border-solid border-gray-600  rounded-xl text-white cursor-pointer  bg-sky-500 hover:bg-sky-700 " 
                      onClick={   ()=>{ filterInput(input)} }>
                            search
                  </button>
        </div>



         <div  className="border border-solid border-slate-50 mr-6 p-[0.5rem] font-medium rounded-2xl hover:bg-slate-100 hover:border-black cursor-pointer "
          onClick ={
            () =>
            {
              fastDelivery(filtercards);
            }
          } >
            Fast Delivery
         </div>
         <div className="border border-solid border-slate-50 mr-6 p-[0.5rem] font-medium rounded-2xl hover:bg-slate-100 hover:border-black cursor-pointer"
          onClick ={
            () =>
            {
              filterRates(filtercards);
            }
          }>
           Ratings 4.0+
         </div>
         <div className="border border-solid border-slate-50 mr-6 p-[0.5rem] font-medium rounded-2xl hover:bg-slate-100 hover:border-black cursor-pointer"
          onClick ={
            () =>
            {
             filterByRs(filtercards);
            }
          }>
          Rs.300-Rs-400
         </div>
         <div className="border border-solid border-slate-50 mr-6 p-[0.5rem] font-medium rounded-2xl hover:bg-slate-100 hover:border-black cursor-pointer"
         onClick ={
          () =>
          {
           filterBylessthan(filtercards);
          }
        }>
          Less than Rs.300
         </div>

         <div >
          <input type="text" 
                 className="mr-10  border border-solid border-gray-700 p-2"
                 value ={userName}
                 onChange={ (e) => {
                 setUserName(e.target.value);
                
                } }
               
          />
          
       </div>
       </div>
       

     
      {/* it has box of food image ,des ,reating , delivery time  */}
     
      <div className="flex m-4 px-2   justify-start flex-wrap border border-solid border-x-white shadow-lg w-auto">


        {/* {console.log("filtercards" , filtercards)} */}
        {filteredRestaurants.map((eachRestaurant, index) => {
          //  {console.log("eachRestaurant" ,eachRestaurant)}

          if( eachRestaurant?.info?.aggregatedDiscountInfoV3?.header !== undefined && eachRestaurant?.info?.aggregatedDiscountInfoV3?.subHeader)
          {
            var offer =  eachRestaurant?.info?.aggregatedDiscountInfoV3?.header + " " +eachRestaurant?.info?.aggregatedDiscountInfoV3?.subHeader;
        
          }
           
          return (
            <div key={eachRestaurant?.info?.id}>
               {/* { console.log("ares.aggregatedDiscountInfoV3.subHeader" ,eachRestaurant?.aggregatedDiscountInfoV3?.subHeader)} */}
       {/* if restaurant is has subHeader add => 50% off like */}
             <Link    key={eachRestaurant?.info?.id}
                      to={"/restaurants/" + eachRestaurant?.info?.id} >
                  
                      {  offer !== undefined ? (
                        <RestaurantWithOffer offer={offer}   
                                             res={eachRestaurant?.info}/>
                        ) : (
                        <RestaurantCard res={eachRestaurant?.info} />
                        ) }
                  
              </Link>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
