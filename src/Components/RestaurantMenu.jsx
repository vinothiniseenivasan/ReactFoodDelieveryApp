import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import '../Css/Restaurantmenu.css'
import RecommendedInMenu from "./RecommendedInMenu";
import { useParams } from "react-router-dom";
import { RESTAURANTMENU_API } from "../Utils/constant";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () =>
    {

      const {resId} = useParams();

      const {resInfo  , card ,everyItem }= useRestaurantMenu(resId);

      if (resInfo === null )
        {
            return  (<Shimmer />)    

        } 
        console.log("card" , card)
           const tab = card?.card?.card?.tabs;
          console.log("tab" ,tab)
        
           const cuisines = resInfo.cuisines;
     
      
          return( <div className="menu">

                   <div className="res-name"> {resInfo.name}</div>
                  { (tab !== undefined) ? <div  className="del-option">{tab[0]?.id}   {tab[1]?.id}</div> : " "}
                {/* <div  className="del-option">{tab[0]?.id}   {tab[1]?.id}</div> */}
                <hr  className="line out-card" />
                
                 <div className="menu-card">
                      <p className="rating">{resInfo.avgRating} ({resInfo.totalRatingsString}) {"   "}  
                        {resInfo.costForTwoMessage}</p>
                       
                      <h3 className="cuisine">
                       {(cuisines !== undefined) ? <a href="">{resInfo.cuisines.join(" ,")} </a> : " "}
                         {/* <a href="">{resInfo.cuisines.join(" ,")} </a> */}
                      </h3>
                    
                     <div className="area">Outlet <span className="res-area">{resInfo.areaName}</span></div>
                     {resInfo.sla !== undefined ? <div className="del-time"> {resInfo.sla.minDeliveryTime} -<span>{" "}{resInfo.sla.maxDeliveryTime} mins</span></div> : " "}
                     
                     
                     <hr  className="line" />
                     {resInfo.sla !== undefined ?
                     <div className="del-fees">
                         {resInfo.sla.lastMileTravelString}   | - ₹ {resInfo.feeDetails.totalFee/100} Delivery fee will apply                  
                      </div> : " " }
                   
              </div>
              
                 {
                  everyItem.map((item)=>
                  {
                    return(
                      <RecommendedInMenu menuItem = {item?.card?.card?.itemCards}  itemTitle = {item?.card?.card?.title}/>
                    )
                  })
                } 
               
              </div>  )
            
       
                  }
export default RestaurantMenu;