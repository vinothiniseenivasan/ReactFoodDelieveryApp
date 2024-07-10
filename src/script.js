import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


// const root = ReactDOM.createRoot(document.getElementById("root"));





const RestaurantCard = ( {res} ) => {


   {console.log("props" ,res)}
  return (  <div className="res-card">
  
 
       <div className="image-container">
        <img  
        src= {res.img}
        className="dish-image hover-image"
        alt="image"/>
      
       </div>

      <h3 className="res-name">{res.name}</h3>

      <h4 className="res-cuisine letter">
         {res.cuisine}
      </h4>
      <div className="rate-container res-cuisine">
        <h4 className="star-rating star"> {res.rate}</h4>
        <h4 className="del-time">{res.delivery}</h4>
        <h4 className="del-time"> ₹{res.price} FOR TWO</h4>
      </div>

      <div className="per-container res-cuisine ">
        <div className="offer-container">
          <img
            src="https://www.pngitem.com/pimgs/m/2-29820_offer-logo-blank-png-transparent-png.png"
            alt="Offer Image"
            className="offer-image "
          />
          <div className="offer-text "> %</div>
        </div>

        <div className="offer-details"> 40% off | USE SPECIALS</div>
      </div>
    </div>
  );
}


const AppLayout = () => {
  return (
    <div className="app">
      
      <Header />
      <Body />
    </div>
  );
};

// root.render(<AppLayout />);
