import { useState } from "react";
 import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";


const MenuDisplay = ({ eachItem, index }) => {
  const [imgDisplay, setImgDisplay] = useState([]);

  const [show, setShow] = useState("");
  const [arrow, setArrow] = useState(true);

  const image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${eachItem?.card?.info?.imageId}`;

  const price = eachItem?.card?.info?.price / 100;
  const menuContent = eachItem?.card?.info?.description;
     console.log("menuContent" ,eachItem);

  const handleImageError = (index) => {
    setImgDisplay((prev) => {
      const newImgDisplay = [...prev];
      newImgDisplay[index] = false;
      return newImgDisplay;
    });
  };

  function toggle(menuContent) {
    if (menuContent !== undefined) {
      console.log("inside menuContent");
      arrow ? setShow(menuContent) : setShow(" ");
      setArrow(!arrow);
    }
  }

  // dispatch an actiom
  const dispatch = useDispatch();

  function addItemInCart(eachMenuItem)
  {
    dispatch(addItem(eachMenuItem));

   
  }

  return (
    <div key={index}>
      <div key={index} className="item-details">
        <div className="name-price">
          <div className="item-name">{eachItem?.card?.info?.name}</div>
          <div className="item-price">
            ₹ {Number.isNaN(price) ? "500" : price}
          </div>
          <div className="opacity-40   mt-7 w-[400px]">
                    <span onClick={() => {
                        toggle(menuContent);
                      }}
                      className=" mr-3 cursor-pointer">
                             {arrow ? <>&#9660;</> : <>&#9650;</>}
                    </span>
            {show}
          </div>
        </div>

        {image && (
          <div className="image-box">
            <img
              className="item-image "
              src={image}
              alt=""
              onError={(e) => {
                // console.log("error")
                e.target.style.display = "none";

                handleImageError(index);
              }}
            />

            <div
              className={
                imgDisplay[index] === false
                  ? "rounded-xl w-[100px] px-4  border border-solid border-yellow-400 mr-[3rem] p-2 flex justify-center text-center cursor-pointer bg-yellow-50 text-green-700 font-bold "
                  : "add"
              }
            //  click this btn add to cart

              onClick={
                  () =>{
                addItemInCart(eachItem)
                  }
                 
              }
            >
              Add
            </div>
          
          </div>
        )}

      </div>
      <hr className="bg-gray-500 h-1 mt-11 opacity-40"></hr>
    </div>
  );
};

export default MenuDisplay;
