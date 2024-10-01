






import React, { useState } from "react";

import { Link } from "react-router-dom";


const LoginPage  = () =>{

      const [phoneNo ,setPhoneNo] = useState(" ");
      const [login ,setLogin] = useState(false);
    //   { console.log("emailAdd" , emailAdd)}


   function handleLogin()
   {
      setLogin(true);
   }


    return( <div className="flex  flex-col items-center justify-items-start  " >



       <div className="  flex  justify-between bg-slate-200  w-1/4 mt-10 ">
        <div>
              <div className="font-medium  text-2xl md-8">
               Login 
               </div>
                    <div className="mt-[1rem] ">
                         <span className="opacity-70a">
                            or
                         </span>
                        <Link to="/LoginToAccount">  
                               <span className=" underline cursor-pointer mt-4 ml-3 font-normal  text-red-500 text-xl " >
                                  Create an account
                               </span>
                          </Link>
                    </div>
             </div>
           

           <div  className="w-[100px] h-[100px]">
                <img 
              
               src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
           </div>

        </div>


           {/* box of phone no */}

           <div className="w-1/4 ">
               <input
                 onChange={(e)=>{
                  setPhoneNo(e.target.value);
                 }}
                 className={
                     `bg-white-500  mt-10 border 
                     ${
                        (login === true && phoneNo === " ") ? "border-red-400" :  "border-gray-800"
                      }  w-full h-20 p-2`
                     }
                  type="text" 
                  
                  placeholder="phone number"/>
                  <div className="text-red-400 font-xl">
                     {((login === true && phoneNo === " ")? "Enter Your Phone Number!" : " " )}
                     
                  </div>
           </div>

           <div className="w-1/4">
               <div
                 onClick={handleLogin}
                 className="   bg-white-500 mt-6  border text-2xl cursor-pointer bg-red-400 text-white border-red-400 w-full h-20 flex justify-center items-center "
                   >
                    Login
               
                  </div>
           </div>
           <div className="w-1/4 mt-2 opacity-80">
                By clicking on Login, I accept the Terms & Conditions & Privacy Policy   
           </div>

        </div> );
}

           
             
            



export default LoginPage;