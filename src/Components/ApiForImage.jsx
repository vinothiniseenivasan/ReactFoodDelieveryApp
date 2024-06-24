import { useEffect, useState } from "react"
import Body from "./Body";
import Body from "./Body";

const ApiForImage = () =>
    {

        const [image ,setImage] = useState([]);

        useEffect(()=>{
            fetchImage();

        } , [] );

      async  function fetchImage()
        {
            const indianResponse = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
           
            const indianData = await indianResponse.json();
            const canadianResponse = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const canadianData = await canadianResponse.json();

            // Combine the meal arrays from both responses
            const combinedData = [...indianData.meals, ...canadianData.meals];
            console.log("combinedData" ,combinedData[2])
            setImage(combinedData);

        }
        {console.log("image") ,image}
           
            return(
              
                <Body img = {image} />
            )

        

    }

    export default ApiForImage;