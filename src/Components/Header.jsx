import { LOGO_URL } from "../Utils/constant";
import "../Css/Header.css"
import {  useState } from "react";
import { Link } from "react-router-dom";


export const Header = () => {
 
console.log("Header First")

   const [btn ,setBtn] = useState("Login")

  
 
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
            <li>
              <Link to="/"> Home</Link>
             </li>
            <li> 
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">   Contact Us  </Link>
             
            </li>
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


  