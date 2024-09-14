

import React from "react";
import { IMG_CDN_URL } from "../Utils/constant";
 



const RestaurantCard = ({ res}) => {

 
    const {  name, cuisines, avgRating ,costForTwo} = res;
    // console.log("cuisines" ,cuisines)
    // console.log(" res.aggregatedDiscountInfoV3.subHeader" ,  res?.aggregatedDiscountInfoV3?.subHeader)
    

    // console.log("eachRes" ,res)
    
    if(cuisines.length > 5)
    {
      var cuisineShort = cuisines.slice(0,5);
    }
   

     let imageCloud =IMG_CDN_URL+res.cloudinaryImageId
   
    return (
        <div className="border border-solid shadow-lg  w-[350px] h-[400px] rounded-md bg-slate-100 mt-10 mx-2 
        sm: border-slate-400 ">
            <div className=" relative  transform transition duration-300 ease-in-out  hover:scale-110  flex justify-center items-center" >
                <img

                    src={imageCloud}
                    className= " mt-5 mx-6 h-[200px] w-[300px] rounded-md "
                    alt={name}
                />
            </div>

            <h3 className="font-bold font-serif mx-6 mt-2 h-[35px] flex align-middle ">{name}</h3>

            <h4 className=" mx-6 h-[40px] text-opacity-85  font-medium font-serif text-red-600 mt-2 cursor-pointer underline">
                {cuisines.length <= 5 ? cuisines.join(", ") : cuisineShort.join(", ") }
            </h4>
            <div className="mt-2 mx-6 flex justify-between items-center">
                    <h4 className= ""> 
                      {avgRating} stars
                      </h4>
                   <h4 className= "opacity-70">
                      {costForTwo}
                     </h4>
                    <h4 className="font-normal opacity-90"> 
                      {res.sla.deliveryTime}min
                     </h4>
            </div>
          
         <div className="text-center mx-5 per-container res-cuisine flex  mt-3 align ">
           <div className="offer-container relative">
                 <img
                   src="https:www.pngitem.com/pimgs/m/2-29820_offer-logo-blank-png-transparent-png.png"
                   alt="Offer Image"
                   className="h-[30px] w-[30px]"
                 />
             <div className="offer-text absolute left-2 bottom-1 right-2"> %</div>
           </div>
  
           <div className="offer-details opacity-65 mt-[0.5]">
          
              {(!res?.aggregatedDiscountInfoV3?.header) ? ("40% off | USE SPECIALS") :
             (`${res.aggregatedDiscountInfoV3.header} off | USE SPECIALS`)}

            </div>
         </div>

            
        </div>
    );
};

export default RestaurantCard;


