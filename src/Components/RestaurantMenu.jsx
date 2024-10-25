
import Shimmer from "./Shimmer";
import '../Css/Restaurantmenu.css';
import {  Children, createContext, useState } from "react";
import RecommendedInMenu from "./RecommendedInMenu";
import { useParams } from "react-router-dom";



import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { RESTAURANTMENU_API } from "../Utils/constant";
import CartContext from "./CartContext";


const RestaurantMenu = () =>
    {
   const {resId} = useParams();

  
//  for context value
  const [cartAdd , setCartAdd] = useState(false);
 
   const [eachtitle ,setEachTitle ] = useState("");
   const [count ,setCount]  = useState(false);
   const [dis ,setDis]  = useState(false);


   function handleClick(itemTitle )
   {
    //  console.log(dis ,dis)
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
     
      
          return( 
          <CartContext.Provider value={  {cartAdd ,setCartAdd} }>

            <div className="menu relative">
               
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
                                    
                                        handleClick={handleClick} 
                                        setEachTitle={setEachTitle} 
                                        itemTitle = {item?.card?.card?.title}/>
                    
                    )
                  })
                } 


                {/* cartItem Adding box */}
                <div className={`mt-5 ml-[40rem] border-4 border-green-100  h-36 w-[20rem]  
                               ${  (cartAdd  ===   true) ? "block" : "hidden"  }

                   flex justify-center items-center text-2xl 
                    ${  (cartAdd  ===   true) ? "animate-blink" : ""  }
                    mr-32 bg-green-500 absolute top-0 text-white rounded-xl`}>
                       Cart-item Added Sucessfully
                   </div>
               
              </div> 
              </CartContext.Provider>
               )
            
       
                  }
export default RestaurantMenu;