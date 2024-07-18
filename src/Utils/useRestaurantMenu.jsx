
import { useEffect, useState } from "react";

import {RESTAURANTMENU_API} from "./constant.js";
import RestaurantMenu from "../Components/RestaurantMenu";
import { set } from "@cloudinary/url-gen/actions/variable";

const useRestaurantMenu = (  resId  ) =>{
// console.log("resId" , resId)
   const [resInfo ,setResInfo  ] = useState(null);
   const [card,setCard] = useState({});
   const [everyItem ,setEveryItem] = useState([]);

//    console.log("useRestaurantMenu")
    useEffect(()=>{
        fetchData(resId)
    } ,[]);


async  function fetchData(resId)
{
    const response = await fetch( RESTAURANTMENU_API + resId );
    const json = await response.json();
   
    // console.log("json" ,json)
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    setCard(json?.data?.cards[1]);
    const everyCard =json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
     
   if(everyCard !== undefined)
    {
       var arr = (everyCard.length> 0 &&  everyCard.slice(2));
       arr =   everyCard.slice(2);
       setEveryItem(arr);
    }

   

}
     return {resInfo , card , everyItem} ;
}

export default useRestaurantMenu;