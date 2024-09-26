import User from "./User";
import "../Css/about.css";
import UserClass from "./UserClass";
import { Component, useCallback, useContext, useEffect } from "react";
import UserContext from "../Utils/UserContext";

const About =() =>{


  const dataFromContext = useContext(UserContext);



  useEffect(() =>{
   const timer = setInterval(()=>{
      console.log("setInterval Called")
    } ,1000)

     return(()=>{
    clearInterval(timer)
  })
       
  } , []);

 
  return (
    <div>
      <div className="">
         
        <div  className="bg-amber-600 w-full h-[25rem] relative">


          <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/04/DE-on-bike-2-2.png" alt="" />
          
        <div className="  absolute inset-0 tracking-widest font-black text-3xl  text-white flex justify-center items-center">
             About Foodie Faster
        </div>
        <div className="absolute opacity-80 inset-0 tracking-widest   text-white  flex justify-center items-center mt-24">
        Foodie Faster is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.
        </div>

        <img  className=" absolute right-0 bottom-0"
        src="https://www.swiggy.com/corporate/wp-content/uploads/2024/04/03-Instamart_3_front_view_2_skycolour.png" alt="" />

        </div>
         <div className="border border-blue-50 mt-2  max-w-4xl mx-auto   bg-slate-100 flex justify-center items-center ">

          <div className>
          <img  className=" h-[20rem] w-[40rem]"
          src="https://www.swiggy.com/corporate/wp-content/uploads/2024/04/Group-1000006479.png" alt="" />
          </div>
          <div>
              <div className="font-bold border border-amber-500 w-20 text-center rounded-lg bg-amber-600 text-white">
              Mission
              </div>
              <div className="mt-5 opacity-50">
              Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.”
              </div>
             


          </div>

             
               
         </div>
         
        
        
        </div>
     
    </div>
  );

}
 
 


export default About;
