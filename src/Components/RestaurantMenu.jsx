import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import '../Css/Restaurantmenu.css'
import RecommendedInMenu from "./RecommendedInMenu";

const RestaurantMenu = () =>
    {

        const [resInfo ,setResInfo] = useState({});
        const [card,setCard] = useState({});
        const [menuCard,setMenuCard] = useState([]);
        const [title ,setTile] = useState("");

        useEffect(()=>{
             console.log("fetchRestaurantDetails")
             fetchRestaurantDetails();
        },[])

  async function fetchRestaurantDetails()
  {
    const response = await fetch ("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=792606&catalog_qa=undefined&submitAction=ENTER");

    const responseJson = await response.json();
    // console.log("fetchRestaurantDetails")
    // console.log(response ,responseJson?.data?.cards[2]?.card?.card);
    setResInfo(responseJson?.data?.cards[2]?.card?.card?.info)
    setCard(responseJson?.data?.cards[1]);
   setMenuCard( responseJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
   setTile(responseJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title)
    // console.log("resInfo" ,resInfo)
  }


    // console.log("setCard" ,tab)

  
      if (resInfo === null )
        {
            return  (<Shimmer />)    

        } 
           const tab = card?.card?.card?.tabs;
           console.log("menuCards" ,menuCard)
        
           const cuisines = resInfo.cuisines;
     
      
          return( <div className="menu">

                   <div className="res-name"> {resInfo.name}</div>
                {/* <div  className="del-option">{tab[0]?.id}   {tab[1]?.id}</div> */}
                <hr  className="line out-card" />
                
                 <div className="menu-card">
                      <p className="rating">{resInfo.avgRating} ({resInfo.totalRatingsString})   {resInfo.costForTwoMessage}</p>
                       
                      <h3 className="cuisine">
                         {/* <a href="">{resInfo.cuisines.join(" ,")} </a> */}
                      </h3>
                    
                     <div className="area">Outlet <span className="res-area">{resInfo.areaName}</span></div>
                     {/* <div className="del-time"> {resInfo.sla.minDeliveryTime} -<span>{" "}{resInfo.sla.maxDeliveryTime} mins</span></div> */}
                     
                     <hr  className="line" />

                     <div className="del-fees">
                         {/* {resInfo.sla.lastMileTravelString}   | - ₹ {resInfo.feeDetails.totalFee/100}Delivery fee will apply */}
                     </div>
                   
              </div>
              {/* {console.log("title" ,title)} */}

                <RecommendedInMenu menuItem = {menuCard}  itemTitle = {title}/>
        
                
                 
              </div>  )
            
       
                  }
export default RestaurantMenu;