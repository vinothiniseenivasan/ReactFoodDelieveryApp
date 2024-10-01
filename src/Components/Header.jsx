import { LOGO_URL } from "../Utils/constant";
// import "../Css/Header.css"
import {  useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { createCloudinaryLegacyURL } from "@cloudinary/url-gen/index";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import React from "react";





export const Header = () => {
 
// console.log("Header First")

   const [btn ,setBtn] = useState("Login");
    
   const onlineStatus = useOnlineStatus();




  //   subscribing to our selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("cartItems" ,cartItems)


   const dataFromContext  =  useContext(UserContext);
  //  console.log("dataFromContext" ,dataFromContext);

  
 
  let btnName = "Login"
    return (
     
      <div className="flex justify-between  shadow-lg sm:bg-slate-100">
        <div className="logo-container ml-11 mt-2">
          <img
            className="h-[120px] w-[150px] p-4  ml-1"
            src={LOGO_URL}
            alt="Hello image"
          />
        </div>
  
        <div className="items-center">
          {/* nav items is list items */}
          <ul className="flex  p-4 m-4">
            <li className="m-4">
              Online Status : {onlineStatus === true ?"✅" : "🔴"}
            </li>
            <li className="m-4">
              <Link to="/"> Home</Link>
             </li>
            <li className="m-4"> 
              <Link to="/about">About Us</Link>
            </li>
            <li className="m-4">
              <Link to="/contact">   Contact Us  </Link>
             
            </li>
            {/* <li className="m-4">
              <Link to ="/grocery"> Grocery </Link>
            </li> */}
            <li className="m-4">
              <Link to ="/cart"> Cart  -{ cartItems.length }  items</Link>
            </li>

            <li className="m-4">{dataFromContext.loginUserInformation}</li>

            <li className="">
                   <Link to ="/LoginPage">
                       <button className="m-4"
                                    onClick={()=>
                                      {
                                       (btn === "Login") ? ( setBtn("Logout") ) : ( setBtn("Login") )
                                      }
                                    } >
                                          {btn}
                        </button>
                   </Link>
            </li>
            
          </ul>
        </div>
      </div>
    );
  };
  export default Header;


  