import React, { useState } from 'react';
import FilterVeg from './FilterVeg';

const ToggleButton = ({handleToggle} ) => {
  const [isToggled, setIsToggled] = useState(true);

  const toggle = () => {
    setIsToggled(!isToggled);
    handleToggle(!isToggled);
    
  };

  return (
    <div className="flex items-center mt-[25px]">

      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
        
          className=" absolute block w-6 h-6 rounded-full bg-red-500 border-4 appearance-none cursor-pointer"
          checked={isToggled}
          onChange={toggle}
          
        />
         <label
               htmlFor="toggle"
               className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer 
                 ${ isToggled ? 'bg-green-400' : 'bg-orange-600'}`}
         >
        </label> 
      </div>
      <span className="ml-3 text-gray-700 font-medium"
      
      >
        {isToggled ? 'Veg' : 'Non-veg'}
      </span>
    </div>  
  );
};

export default ToggleButton;
