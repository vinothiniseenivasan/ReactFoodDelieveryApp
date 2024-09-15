
import { useDispatch, useSelector } from "react-redux";
import MenuDisplay from "./MenuDisplay";
import { CART_URL } from "../Utils/constant";
import { clearCart } from "../Utils/cartSlice";

const Cart = () =>{

    //   to display what items in cart
    //  we have to subscribe our selector

      const itemsInCart = useSelector((store) => store.cart.items);
      console.log("itemsInCart" , itemsInCart);
      



    //   dispatch an action of clearCart
        const  dispatch = useDispatch();

      function handleClearCart()
      {
          dispatch(clearCart());
      }
    return(
        <div className="text-center m-10 p-10 ">
            <div className="flex justify-around items-center ">
                <div className="flex ">
                   <h1 className="font-bold relative text-2xl mb-20  border border-green rounded-xl p-4 py-0 bg-lime-500 text mt-3 text-lime-50  mr-4 cursor-pointer hover:bg-lime-700"  >
                        Cart
                   </h1> 
                   <img src={CART_URL} 
                            alt="cart-img"
                            className="  h-[60px] " />
                </div>

                <div className="flex justify-around items-center ">
                        <div className="flex ">
                        <button className="font-bold relative text-2xl mb-20  border border-green rounded-xl p-4 py-0 bg-red-500 text mt-3 text-lime-50  mr-4 cursor-pointer hover:bg-red-800"
                         onClick ={handleClearCart}
                        >
                               Clear Cart
                            </button>
                           <img     src="https://th.bing.com/th/id/OIP.aJur9GGOIWFGQDx_pRYiQgHaHa?rs=1&pid=ImgDetMain" 
                                    alt="cart-img"
                                    className="  h-[60px] " />
                        </div>
                </div>
                   
                   
            </div>
           


                {
                itemsInCart.length === 0 ? (<div className="  h-[200px] m-auto border border-black w-6/12 pt-10 "> 
                                               <div className="mt-4 font-black text-fuchsia-600 tracking-widest underline"  >  Your      cart   is   Empty</div>

                                            
                                                          
                                               <div  className=" "> 
                                                   <img
                                                   className="h-[100px]  m-auto"
                                                   
                                                   src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" 
                                                   alt="im" /> 
                                                </div>
                                             
                                             
                                             </div>) : 
                                
            <div className="w-7/12 m-auto border border-black p-5 " >
                   {
                  
                  itemsInCart.map((eachItemInCart,index)=>{
                   return(
                       <MenuDisplay eachItem={eachItemInCart} index={index}/>
                   )
                  })
                  }
            </div>
                  }
        
      
           
        </div>
    )
}


export default Cart;