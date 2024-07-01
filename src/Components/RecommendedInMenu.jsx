import { useState } from 'react'
import '../Css/RecommendedInMenu.css'


const RecommendedInMenu = ({menuItem , itemTitle}) =>
    {
 
       const [imgDisplay ,setImgDisplay] = useState([]);

       const handleImageError = (index) => {
        setImgDisplay((prev) => {
            const newImgDisplay = [...prev];
            newImgDisplay[index] = false;
            return newImgDisplay;
        });
    };
       if(menuItem !== undefined ){
        return(
            <div className="card-box">

                <div className="Recommended">
                    {itemTitle}  ({menuItem.length})
                </div>

                {
                    Array.isArray(menuItem) && menuItem.map((eachItem ,index)=>
                    {
                        const image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${eachItem?.card?.info?.imageId}`
                        
                            // { console.log("image" ,image) }
                        const price = (eachItem?.card?.info?.price/100);

                       return( <div>
                             <div key={index} className="item-details">

                                      <div className="name-price">
                                            <div className='item-name'>
                                            {eachItem?.card?.info?.name}
                                            </div>
                                            <div className='item-price'>

                                            ₹ {Number.isNaN(price) ?  "500" : price }
                                           </div>
                                          
                                       </div>
                                      {image &&   <div className='image-box'>
                                             < img  className="item-image"
                                                   src={image}
                                                    alt=""
                                                    onError={(e) => {
                                                        console.log("error")
                                                        e.target.style.display = 'none';
                                                       handleImageError(index);
                                                       
                                                        // e.target.parentElement.style.display = 'none'
                                                        {console.log("imgDisplay" , imgDisplay)}
                                                      }} 
                                             />
                                             
                                           
                                              <div className={imgDisplay[index] === false ? "false-add" : "add"}>
                                                    Add
                                              </div>
                                          </div> } 
                                     
                                       
                                      
                               </div>
                               <hr className='line-menu'></hr>
                           </div>   )

                    })
                }
              
             
            </div>
        )
       }
              
               

            
        // return ({})
       
    }

    export default RecommendedInMenu;