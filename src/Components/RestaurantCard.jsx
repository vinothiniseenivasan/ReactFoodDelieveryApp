

import React from "react";
import { IMG_CDN_URL } from "../Utils/constant";
 



const RestaurantCard = ({ res}) => {
    const { cloudinaryImageId, name, cuisines, avgRating ,costForTwo} = res;
    

     let imageCloud =IMG_CDN_URL+res.cloudinaryImageId
   
    return (
        <div className="res-card">
            <div className="image-container">
                <img
                //  src={img.img}
                src={imageCloud}
               
                    className="dish-image hover-image"
                    alt={name}
                />
            </div>

            <h3 className="res-name">{name}</h3>

            <h4 className="res-cuisine letter">
                {cuisines.join(", ")}
            </h4>
            <div className="rate-container res-cuisine">
                    <h4 className="star-rating star"> 
                      {avgRating}
                      </h4>
                   <h4 className="del-time">
                      {costForTwo}
                     </h4>
                    <h4 className="del-time"> 
                      {res.sla.deliveryTime}min
                     </h4>
            </div>
          
         <div className="per-container res-cuisine ">
           <div className="offer-container">
             <img
               src="https:www.pngitem.com/pimgs/m/2-29820_offer-logo-blank-png-transparent-png.png"
               alt="Offer Image"
               className="offer-image "
             />
             <div className="offer-text "> %</div>
           </div>
  
           <div className="offer-details">
            {/* {res?.aggregatedDiscountInfoV2 ===  null ? "35%" :  res?.aggregatedDiscountInfoV3?.header } off | USE SPECIALS */}
               
            {/* {(!res?.aggregatedDiscountInfoV3) ? ("40%"): (res?.aggregatedDiscountInfoV3?.header)} off | USE SPECIALS  */}
            {(!res?.aggregatedDiscountInfoV3?.header) ? ("40% off | USE SPECIALS") :
             (`${res.aggregatedDiscountInfoV3.header} off | USE SPECIALS`)}

            </div>
         </div>

            
        </div>
    );
};

export default RestaurantCard;


