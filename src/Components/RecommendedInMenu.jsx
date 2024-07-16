import { Children, useState } from 'react'
import '../Css/RecommendedInMenu.css';
import ToggleButton from './ToggledButton';

import MenuDisplay from './MenuDisplay';


const RecommendedInMenu = ({menuItem , itemTitle}) =>
    {

      
        const[btnClicked ,setBtnClicked] = useState(false);
       
         const [isToggled, setIsToggled] = useState(false);
      
       
       function handleToggle(isToggle)
      {
         setIsToggled(isToggle);
         setBtnClicked(true);
      }

      function checkVeg(item ,eachItem ,index)
      {
        if(item === "VEG" && isToggled === true)
        {
            console.log(item)
            return( <MenuDisplay  eachItem={eachItem} itemTitle ={itemTitle} index={index}  /> )
        }
        else if(item === "NONVEG"&&  isToggled === false){
            console.log(item)
            return( <MenuDisplay  eachItem={eachItem} itemTitle ={itemTitle} index={index} /> )   
        }

      }
            
               if(menuItem !== undefined )
               {
                   
                   return(
                       <div className="card-box">
                            <ToggleButton  handleToggle={handleToggle}    />
                            <div className="Recommended">
                               {itemTitle}  ({menuItem.length})
                            </div>
                          
                            {  Array.isArray(menuItem) && menuItem.map((eachItem ,index)=>
                                       {
                                        // console.log("inside Fillter " ,eachItem?.card?.info?.itemAttribute?.vegClassifier)
                                        // console.log("inside Fillter " , btnClicked);
                                        return  (!btnClicked) ? 
                                           (
                                                <MenuDisplay  eachItem={eachItem} itemTitle ={itemTitle} index={index} /> 
                                       
                                            ) : (checkVeg(eachItem?.card?.info?.itemAttribute?.vegClassifier ,eachItem ,index)) 


                                       })
                                   
                                   }
                         </div>
                   )
               
           
                    
               }
           
       
    }

    export default RecommendedInMenu;