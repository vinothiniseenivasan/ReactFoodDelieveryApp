import { useState } from 'react'

const MenuDisplay = ({eachItem ,itemTitle ,index  }) =>
{
    const [imgDisplay ,setImgDisplay] = useState([]);



    const image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${eachItem?.card?.info?.imageId}`
                                           
    //  { console.log("eachItem in recomended" , eachItem) }
     const price = (eachItem?.card?.info?.price/100);
      console.log("MenuDisplay");


      const handleImageError = (index) => {
        setImgDisplay((prev) => {
            const newImgDisplay = [...prev];
            newImgDisplay[index] = false;
            return newImgDisplay;
        });
     }    

 return( <div key={index}>
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
                                // console.log("error")
                                e.target.style.display = 'none';
                               handleImageError(index);
                               
                              }} 
                     />
                     
                   
                      <div className={imgDisplay[index] === false ? "false-add" : "add"}>
                            Add
                      </div>
                  </div> } 
      </div>
       <hr className='line-menu'></hr>
   </div>   )

   
}


export default MenuDisplay;