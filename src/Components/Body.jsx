import card from "./card";
import RestaurantCard from "./RestaurantCard";
import '../Css/body.css'
import { useState } from "react";
import { useEffect } from "react";
import ApiForImage from "./ApiForImage";
import Shimmer from "./Shimmer";


const Body = ({img}) => {
    
    const [ filtercards , setFiltercards ] = useState([]);
    console.log("image" ,img)
  //  {console.log("img[index]" ,img[0].strMealThumb)}

   useEffect(   () =>{
     fetchData();
    } , []);
   

    async function fetchData() {
      
     const response = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      // const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.296")
          const apiResponse = await response.json();
          console.log("data api" ,apiResponse?.data?.cards)

          //  const arr = apiResponse.data.cards;
          
         const ans = findAllValuesForKey(apiResponse  , "info");
        //  console.log("ans" ,ans)

        //  const arr = ans[2];
         console.log("ans[2]" ,ans[2])
         const infoArr=[];

         for (let i = 0; i < Math.min(23, ans.length); i++) {
          const eachAns = ans[i];
          // Check if the current object has the "name" key
          if (eachAns.hasOwnProperty("avgRating")) {
              // Push the object to infoArr if it has "name" key
              infoArr.push(eachAns);
          }
      }
         
       console.log("infoArr",infoArr)
        setFiltercards(infoArr)
  }


 
// Function to recursively search for all values of a specific key in a nested object
function findAllValuesForKey(obj, targetKey) {
  let values = [];

  // Check if obj is null or undefined
  if (!obj || typeof obj !== 'object') {
      return values;
  }

  // Check if the targetKey is present in the current level of obj
  if (targetKey in obj) {
      values.push(obj[targetKey]);
  }

  // Recursively search in nested objects and arrays
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object') {
              values = values.concat(findAllValuesForKey(obj[key], targetKey));
          }
      }
  }

  return values;
}
   
   
// function to filter res rate >= 4.0
    function filterRates(card)
    {
     const newCard =   filtercards.filter( (eachCard) =>
        {
          return (eachCard.avgRating >= 4.0)
        })
        console.log("newCard" ,newCard)
  
        setFiltercards(newCard);
    }
 if(filtercards.length === 0) 
  {
    return(<Shimmer />)
  }
  else{
    return (
      <div className="Body">
       
        <div className="filter">
            <button 
            className="filter-btn"
            onMouseOver  =   {   ()=>
               { filterRates(filtercards)}
                            }
            >
                Top Rated Restaurant 
            </button>
        </div>

            
       {/* it has box of food image ,des ,reating , delivery time  */}
        <div className="restauant-container">
        
          {    filtercards.map(  (eachRestaurant,index) =>{
                    // {console.log("eachRestaurant" ,eachRestaurant)}
                    //  {console.log("img[index]" ,img[0].strMealThumb)}
                  return  ( <div>
                               <RestaurantCard 
                                 key={eachRestaurant.name}
                                 res = {eachRestaurant}
                                
                                  img = {img?.strMealThumb}
                               /> 
                         </div>)
                            }    )
          }
        </div>
      </div>
    );
  }
    
  };


  

  
  export default Body;




