import { Children, useState } from 'react'
import '../Css/RecommendedInMenu.css';
import ToggleButton from './ToggledButton';

import MenuDisplay from './MenuDisplay';


const RecommendedInMenu = ({menuItem , itemTitle ,handleClick ,click ,setEachTitle}) =>
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
           
            return( <MenuDisplay key={eachItem?.card?.info?.name} eachItem={eachItem} itemTitle ={itemTitle} index={index}  /> )
        }
        else if(item === "NONVEG"&&  isToggled === false){
           
            return( <MenuDisplay  key={eachItem?.card?.info?.name} eachItem={eachItem} itemTitle ={itemTitle} index={index} /> )   
        }

      }

     
               if(menuItem !== undefined )
               {
                // console.log( click ,menuItem ,itemTitle)
                   return(
                       <div className="card-box">
                            <ToggleButton  handleToggle={handleToggle}    />
                            <div
                              onClick = {() => handleClick(itemTitle)}
                              className=" cursor-pointer mt-2 Recommended  p-2 flex  justify-between mb-7 border border-solid rounded-xl shadow-xl border-white">
                              {itemTitle}  ({menuItem.length}) 
                              <span className='mr-3'> {<>&#9660;</>} </span>
                            </div>
                          
                            { (click === true) &&    Array.isArray(menuItem) && menuItem.map((eachItem ,index)=>
                                       {
                                        // {console.log("inside menu" ,eachItem?.card?.info?.name)}
                                        // eachItem?.card?.info?.name
                                       
                                        return(  (!btnClicked) ? 
                                               <MenuDisplay key ={eachItem?.card?.info?.name}  eachItem={eachItem} itemTitle ={itemTitle} index={index} /> 
                                       
                                               : (checkVeg(eachItem?.card?.info?.itemAttribute?.vegClassifier ,eachItem ,index))  )


                                       })
                                   
                            } 
                         </div>
                     )
               
           
                    
               }
           
       
    }

    export default RecommendedInMenu;