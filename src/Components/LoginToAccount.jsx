import React, { useState } from "react";
// import LoginToAccount from "./LoginToAccount";
import { Link } from "react-router-dom";


const LoginToAccount = () =>{

      const [phoneNo ,setPhoneNo] = useState(" ");
      const [name ,setName] = useState(" ");
      const [email ,setEmail] = useState(" ");
      const [login ,setLogin] = useState(false);
    //   { console.log("emailAdd" , emailAdd)}


   function handleLogin()
   {
      setLogin(true);
   }


    return( <div className="flex  flex-col items-center justify-items-start  " >



       <div className="  flex  justify-between bg-slate-200  w-1/4 mt-10  ">
        <div>
              <div className="font-medium  text-2xl md-8">
               Sign Up 
               </div>
                    <div className="mt-[1rem] ">
                         <span className="opacity-70a">
                       or
                       </span>
                        <Link to="/LoginPage">  
                               <span className=" underline cursor-pointer mt-4 ml-3 font-normal  text-red-500 text-xl " >
                                  Login to an account
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
                     `bg-white-500   border mt-10 
                     ${
                        (login === true && phoneNo === " ") ? "border-red-400 text-xl placeholder-red-400" :  "border-gray-800"
                      }  w-full h-20 p-2  `}
                     
                  type="text" 
                  
                  placeholder={   (login === true &&  phoneNo === " ")  ?  "Enter Your Phone Number"
                                        
                        : ("phone number")  }   />

                 
                  {/* name */}

                  <input
                 onChange={(e)=>{
                  setName(e.target.value);
                 }}
                 className={
                     `bg-white-500   border  border-t-0
                      ${
                         (login === true && name === " ") ? "border-red-400 text-xl placeholder-red-400" :  "border-gray-800"
                       }    w-full h-20 p-2`
                     }
                  type="text" 
                  
                  placeholder={ (login === true &&  name === " ")  ?  "Enter Your Name"
                                        
                    : ("name") }/>
                  {/* <div className="text-red-400 font-thin">
                     {((login === true && name === " ")? "Enter Your Name!" : " " )}
                     
                  </div> */}

                  {/* email */}
                  <input
                 onChange={(e)=>{
                  setEmail(e.target.value);
                 }} 
                 className={
                     `bg-white-500   border  border-t-0
                     ${
                        (login === true && email === " ") ? " border-red-400 text-xl placeholder-red-400" :  "border-gray-800"
                      }  w-full h-20 p-2 `
                     }
                  type="text" 
                  
                  placeholder={ (login === true && email === " ") ? "Enter Your Email Id" :"Email Id"}
                    />
                  {/* <div className="text-red-400 font-thin">
                     {((login === true && email === " ")? "Enter Your Email id!" : " " )}
                     
                  </div> */}
           </div>

           {/* ref code */}
           <div className=" w-1/4 cursor-pointer flex justify-start items-center m-2 ml-4 mt-2 text-blue-600 ">
                  Have a Referral Code ?
           </div>

           <div className="w-1/4">
               <div
                 onClick={handleLogin}
                 className="   bg-white-500   border text-xl cursor-pointer bg-red-400 text-white w-full h-14 flex justify-center items-center "
                   >
                    CONTINUE
               
                  </div>
           </div>
           <div className="w-1/4 mt-2 opacity-80 ">
           By creating an account, I accept the Terms & Conditions & Privacy Policy
           </div>

        </div> );
}
export default LoginToAccount;
           
             
     

