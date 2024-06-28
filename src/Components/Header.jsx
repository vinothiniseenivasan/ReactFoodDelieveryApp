import { LOGO_URL } from "../Utils/constant";
import "../Css/Header.css"
import { useEffect, useState } from "react";


export const Header = () => {
 
console.log("Header First")

   const [btn ,setBtn] = useState("Login")

   useEffect (() =>{
    console.log("Header USeEffect") 
   } ,[btn] )
 
  let btnName = "Login"
    return (
     
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
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
            <button className="login"
                    onClick={()=>
                      {
                       (btn === "Login") ? ( setBtn("Logout") ) : ( setBtn("Login") )
                      }
                    }
            >
              {btn}
            </button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;


  