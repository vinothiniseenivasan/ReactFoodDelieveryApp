
import { useEffect, useState } from "react";
const FilterVeg = ( { isToggled , eachDish }) =>
{


    const [veg ,setVeg] = useState([]);
    const [nonVeg ,setNonVeg] = useState([]);
    
//   console.log(" eachDish" , isToggled )

    useEffect(() =>{
        if(isToggled)
            {
                if( eachDish?.card?.info?.itemAttribute?.vegClassifier === "VEG")
                {
        
                    console.log("inside Fillter " ,eachDish?.card?.info?.itemAttribute?.vegClassifier)
                     setVeg(prevVeg => [...prevVeg, eachDish])
                   
                }


               
            }
            else
            {
                // nonveg
                if( eachDish?.card?.info?.itemAttribute?.vegClassifier === "NONVEG")
                    {
            
                        // console.log(eachDish?.card?.info?.itemAttribute?.vegClassifier)
                         setNonVeg(prevNonVeg => [...prevNonVeg, eachDish])
                       
                    }
            }
    },[isToggled,eachDish]);

    useEffect(() => {
        if (isToggled) {
            console.log("Veg", veg);
        } else {
            console.log("NonVeg", nonVeg);
        }
    }, [isToggled, veg, nonVeg]);
    

    //  (isToggled) ?  return (veg) : return()


    //   console.log("trueVeg" ,arr)
    
}

 export default FilterVeg;