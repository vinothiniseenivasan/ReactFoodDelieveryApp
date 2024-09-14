
import Shimmer from "./Shimmer";
import '../Css/Restaurantmenu.css';
import {  useState } from "react";
import RecommendedInMenu from "./RecommendedInMenu";
import { useParams } from "react-router-dom";


import useRestaurantMenu from "../Utils/useRestaurantMenu";


const RestaurantMenu = () =>
    {
   const {resId} = useParams();
 
   const [eachtitle ,setEachTitle ] = useState("");
   const [count ,setCount]  = useState(false);
   const [dis ,setDis]  = useState(false);


   function handleClick(itemTitle )
   {
     console.log(dis ,dis)
    if(dis !== true )
    {
      setEachTitle(itemTitle);
      setDis(true);
    }
    else
    { 
      setEachTitle(" ");
      setDis(false);

    }
  
  
  //  setCount(true);
  //  console.log("count" ,count)
 
   }
       
    //  useRestaurantMenu is a custom hook, create in utils
    //  RestaurantMenu doesn't need to bother how to this data is comming
    //  its just fetch information from  useRestaurantMenu  custom hook 
    //  display content
      const {resInfo  , card ,everyItem }= useRestaurantMenu(resId);

      if (resInfo === null )
        {
            return  (<Shimmer />)    

        } 
       
           const tab = card?.card?.card?.tabs;
       
           const cuisines = resInfo.cuisines;
     
      
          return( <div className="menu">
                <div className="res-name mt-5"> {resInfo.name}</div>
                  { (tab !== undefined) ? <div  className="del-option">{tab[0]?.id}   {tab[1]?.id}</div> : " "}
              
                <hr  className="line out-card" />
                
                 <div className="menu-card">
                      <p className="rating flex text-center">
                             <span>
                                <img 
                                className="w-[13px] h-[12px] mt-[0.44rem] mr-[5px]"
                                src="https://c8.alamy.com/comp/2DEYG8E/premium-badge-icon-vector-for-any-purposes-web-internet-star-symbol-in-green-circle-isolated-on-white-background-icon-of-a-set-2DEYG8E.jpg" alt="star" />
                             </span>
                               {resInfo.avgRating} ({resInfo.totalRatingsString}) {"   "}  
                                .  {resInfo.costForTwoMessage}
                         </p>
                       
                      <h3 className="cuisine underline mt-[10px]">
                       {(cuisines !== undefined) ? <a href="">{resInfo.cuisines.join(" ,")} </a> : " "}
                      </h3>
                    
                     <div className="area mt-[5px]">Outlet <span className="res-area">{resInfo.areaName}</span></div>
                     {resInfo.sla !== undefined ? <div className="del-time"> {resInfo.sla.minDeliveryTime} -<span>{" "}{resInfo.sla.maxDeliveryTime} mins</span></div> : " "}
                     
                     
                     <hr  className="line" />
                     {resInfo.sla !== undefined ?
                     <div className="del-fees">
                         {resInfo.sla.lastMileTravelString}   | - ₹ {resInfo.feeDetails.totalFee/100} Delivery fee will apply                  
                      </div> : " " }
                   
              </div>
              
                 {
                  everyItem.map((item , index)=>
                  {
                   
                   return(
                    //  RecommendedInMenu  is controlled componentn
                    //  because click atribute is depend upon parent component RestaurantMenu
                    <RecommendedInMenu 
                     key = {index}
                     menuItem = {item?.card?.card?.itemCards} 
                     click={   item?.card?.card?.title === eachtitle  }
                     
                    itemTitle = {item?.card?.card?.title}
                    handleClick={handleClick} 
                    setEachTitle={setEachTitle} />
                    )
                  })
                } 
               
              </div>  )
            
       
                  }
export default RestaurantMenu;