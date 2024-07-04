import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import '../Css/Restaurantmenu.css'
import RecommendedInMenu from "./RecommendedInMenu";
import { useParams } from "react-router-dom";
import { RESTAURANTMENU_API } from "../Utils/constant";

const RestaurantMenu = () =>
    {

      const {resId} = useParams();
     
        const [resInfo ,setResInfo] = useState({});
        const [card,setCard] = useState({});
        const [everyItem ,setEveryItem] = useState([]);

        useEffect(()=>{
             console.log("fetchRestaurantDetails")
             fetchRestaurantDetails();
        },[])

  async function fetchRestaurantDetails()
  {
    
     const response = await fetch (RESTAURANTMENU_API + resId);
    // const response = await fetch ("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=30034&catalog_qa=undefined&submitAction=ENTER");
   
    const responseJson = await response.json();
   
      // console.log(response ,responseJson?.data?.cards[2]?.card?.card);
    setResInfo(responseJson?.data?.cards[2]?.card?.card?.info)
    setCard(responseJson?.data?.cards[1]);
 
   const everyCard =responseJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
     
   if(everyCard !== undefined)
    {
       var arr = (everyCard.length> 0 &&  everyCard.slice(2));
       arr =   everyCard.slice(2);
       setEveryItem(arr);
    }
  
  
  }


    // console.log("setCard" ,tab)

  
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