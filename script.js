import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));


// its a card => array of different hotel and rating
const card = [
  
    {
      "id": "ribs-brisket-and-burnt-ends",
      "img": "https://b.zmtcdn.com/data/pictures/chains/6/18348766/d84483bc28d90f07a4c4fff2e50cafa9_featured_v2.jpg",
      "name": "Sankeetha Resaurant",
      "price": 110,
      "cuisine" :"South Indian" ,
      "rate": 4.4,
      "delivery": "30 min" ,
      
    },
    {
      "id": "2",
      "img": "https://st5.depositphotos.com/73976306/62652/i/450/depositphotos_626529964-stock-photo-ayutthaya-thailand-apr-2022-kfc.jpg",
      "name": "KFC",
      "price": 200,
      "cuisine" :"Burger , Grilled Chicken" ,
      "rate": 4.2,
      "delivery": "20 min" ,
    },
    {
      "id": "3",
      "img": "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600",
      "name": "Tandoori Twilight",
      "price": 250,
      "cuisine" :"North Indian" ,
      "rate": 4.4,
      "delivery": "35 min" ,
      
    },
    {
      "id": "4",
      "img": "https://media.istockphoto.com/id/1290444763/photo/assorted-of-indian-dish-with-curry-dish-naan-chicken.jpg?s=612x612&w=0&k=20&c=5q09leP6_QnvdUEfsB6KUXDTTBJtl88bEwrDfRVNA0U=",
      "name": "Masala Magic",
      "price": 180,
      "cuisine" :"North Indian" ,
      "rate": 4.4,
      "delivery": "40 min" ,
      
    },
    {
      "id": "5",
      "img": "https://as2.ftcdn.net/v2/jpg/03/61/86/91/1000_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg",
      "name": "Jalebi Junction",
      "price": 300,
      "cuisine" :"North Indian" ,
      "rate": 4.8,
      "delivery": "35 min" ,
      
    },{
      "id": "6",
      "img": "https://media.istockphoto.com/id/1290444763/photo/assorted-of-indian-dish-with-curry-dish-naan-chicken.jpg?s=612x612&w=0&k=20&c=5q09leP6_QnvdUEfsB6KUXDTTBJtl88bEwrDfRVNA0U=",
      "name": "Masala Magic",
      "price": 180,
      "cuisine" :"Sweets, Nan" ,
      "rate": 4.4,
      "delivery": "40 min" ,
      
    },
    {
      "id": "7",
      "img": "https://copperkettle.ae/wp-content/uploads/2021/03/Samosa-Dubai-2.jpg",
      "name": "Samosa Sanctuary",
      "price": 100,
      "cuisine" :"North Indian" ,
      "rate": 4.1,
      "delivery": "15 min" ,
      
    },{
      "id": "8",
      "img": "https://media.istockphoto.com/id/838927480/photo/onam-sadya-on-a-banana-leaf.jpg?s=612x612&w=0&k=20&c=gwLv5UccfysMWJn2nEPXoQfczkCTBylrmenTmHonHrc=",
      "name": "Kerala Kitchen",
      "price": 150,
      "cuisine" :"South Indian" ,
      "rate": 4.4,
      "delivery": "20 min" ,
      
    },
    {
      "id": "9",
      "img": "https://i0.wp.com/yummraj.com/wp-content/uploads/2023/04/9ef894c0-8540-41a6-b4bf-24ccc3616df7.jpg?fit=768%2C576&ssl=1",
      "name": "Bengali Bliss",
      "price": 200,
      "cuisine" :"North Indian" ,
      "rate": 4.6,
      "delivery": "32 min" ,
      
    }, 
    {
      "id": "10",
      "img": "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
      "name": "Dosa Dreams",
      "price": 80,
      "cuisine" :"South Indian" ,
      "rate": 4.8,
      "delivery": "15 min" ,
      
    },
    {
      "id": "11",
      "img": "https://as1.ftcdn.net/v2/jpg/01/43/83/08/1000_F_143830808_V7n31HxcS8duJIVr3opWzG4FCkDQZK4v.jpg",
      "name": "Chicken Elite",
      "price": 320,
      "cuisine" :"North Indian" ,
      "rate": 4.6,
      "delivery": "43 min" ,
      
    },
    {
      "id": "12",
      "img": "https://img.freepik.com/premium-photo/assorted-indian-food-on-black-background_635702-3075.jpg?w=360",
      "name": "Madras Magic",
      "price": 280,
      "cuisine" :"South Indian" ,
      "rate": 4.6,
      "delivery": "28 min" ,
      
    }
]

// header => {logo , Links}
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/1191192/screenshots/4250680/foodie_faster.jpg"
          alt="Hello image"
        />
      </div>

      <div className="nav-items">
        {/* nav items is list items */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// RestaurantCard => name , img
// Name of dish
// Star Rating
// cuisine
// delivery

// const styleBackground = {
//   backgroundColor: "red",
// };


// {
//   "id": "texas-monthlys-1-bbq-brisket",
//   "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131249/texas-monthlys-1-bbq-brisket.1006a061be7acae03992e420fbca995a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
//   "name": "Snow's BBQ",
//   "dsc": "Texas Monthly's #1 BBQ Brisket",
//   "price": 199,
//   "rate": 4,
//   "country": "Lexington, TX"
// },

const RestaurantCard = ( {res} ) => {


  // const { img, name, dsc, rate, price } = {res};
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

const Body = () => {
  //  body contains =>
  // 1.searchBar
  // 2 . cards => Food image and details
  return (
    <div className="Body">
      <div className="search">Search</div>

      <div className="restauant-container">
        {
                   card.map(  (eachRestaurant) =>
                      (  <RestaurantCard key={eachRestaurant.id} res = {eachRestaurant} />  )
          )}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      {/* Body */}
      {/* Footer */}
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
