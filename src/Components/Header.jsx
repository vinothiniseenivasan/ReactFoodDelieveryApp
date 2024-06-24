import { LOGO_URL } from "../Utils/constant";


export const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };
  export default Header;


  