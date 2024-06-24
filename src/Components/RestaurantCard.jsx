






import React from "react";
import { IMG_CDN_URL } from "../Utils/constant";
 



const RestaurantCard = ({ res  ,img}) => {
    const { cloudinaryImageId, name, cuisines, avgRating ,costForTwo} = res;
    // costForTwo,deliveryTime

     console.log("res api inside Restaurantcard" ,res)
     console.log("Restaurantcard image" ,img)
  
     if(img !== undefined)
        {
            let imageUrl ={img}
        }
        else
        {
            imageUrl = "https://media.istockphoto.com/id/1290444763/photo/assorted-of-indian-dish-with-curry-dish-naan-chicken.jpg?s=612x612&w=0&k=20&c=5q09leP6_QnvdUEfsB6KUXDTTBJtl88bEwrDfRVNA0U=";
        }
    


    return (
        <div className="res-card">
            <div className="image-container">
                <img
                 src={imageUrl}
               
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
  
           <div className="offer-details">{res?.aggregatedDiscountInfoV3?.header === "ITEMS" ? "35%" :res.aggregatedDiscountInfoV3.header } off | USE SPECIALS</div>
         </div>

            
        </div>
    );
};

export default RestaurantCard;


