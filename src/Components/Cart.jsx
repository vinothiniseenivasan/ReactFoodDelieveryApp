import { useSelector } from "react-redux";


const Cart = () =>{

    //   to display what items in cart
    //  we have to subscribe our selector

      const itemsInCart = useSelector((store) => store.cart.items);
    return(
        <div className="text-center m-10 p-10">
            <h1 className="font-bold  text-lime-900 text-2xl ">
               Cart
            </h1>
           
        </div>
    )
}


export default Cart;