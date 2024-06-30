import '../Css/RecommendedInMenu.css'


const RecommendedInMenu = ({menuItem , itemTitle}) =>
    {
        return(
            <div className="card-box">

                <div className="Recommended">
                    {itemTitle}  ({menuItem.length})
                </div>

                {
                    Array.isArray(menuItem) && menuItem.map((eachItem ,index)=>
                    {
                        const image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${eachItem?.card?.info?.imageId}`
                       return( <div>
                             <div key={index} className="item-details">

                                      <div className="name-price">
                                            <div className='item-name'>
                                            {eachItem?.card?.info?.name}
                                            </div>
                                            <div className='item-price'>
                                            ₹ {eachItem?.card?.info?.price/100}
                                           </div>
                                          
                                       </div>
                                       <div className='image-box'>
                                             < img  className="item-image"  src={image} alt="" />
                                             <div className='add'> Add </div>   
                                       </div> 
                                       
                                      
                               </div>
                               <hr className='line-menu'></hr>
                           </div>   )

                    })
                }
              
               


                {console.log("menuItem" , menuItem)}
            </div>
        )
    }

    export default RecommendedInMenu;