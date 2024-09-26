
import { Accordion } from "@mui/material";
import React, { useState } from "react";
const Contact = () =>{

      const [emailAdd,setEmailAdd] = useState(" ");
      const [box,setBox] = useState(false);
      const [boxInfo ,setBoxInfo] = useState(" ");
      const [message ,setMessage] = useState( " ");
      const [isSubmit ,setIsSubmit] = useState(false)
    //   { console.log("emailAdd" , emailAdd)}


    function handleBoxInfo(info)
    {
        setBoxInfo(info);
        setBox(false)
    }
    function handleSend()
    {
        if(emailAdd === " " || boxInfo === " " || message === " ")
        {
          setIsSubmit(!isSubmit);
        }
    }



    return( <div className="flex justify-center mt-10  h-auto" >
     <div className="flex flex-col  h-auto border border-teal-100 w-1/4  ">

       

            <h1 className="font-black  flex justify-center text-white tracking-wider text-3xl bg-teal-500 w-full p-2 ">
                Contact as
            </h1>
             
              <div className="p-3">

              
                <div>
                    <h3 className="mt-4 opacity-60">Get Help?</h3>
                    <h1 className="font-bold opacity-70 mt-4">Email Address</h1>
                <input 
                    type="text"
                    className={`border mt-2 p-2 opacity-65 ${
                        (isSubmit === true && emailAdd === " ") ? "border-red-500" : "border-black"
                      }`}
                    
                    // className="border border-black mt-2 p-2  opacity-65"  
                    placeholder="Enter your email address"
                    value={ emailAdd}
                    onChange={(e)=>{
                        setEmailAdd(e.target.value);
                      //   console.log("emailAdd" , emailAdd)
                  }}/>
                  <h3 className="text-red-500 opacity-80 ">

                   {(emailAdd === " ") ? "Enter a valid email address!" :  " "}
                    </h3>
                </div>

                <div className="mt-4 ">
                    <h1 className="font-bold opacity-70"> How can we help you today?</h1>
                    <div className="flex items-center relative">
                    <input type="text"
                          
                          className={`border mt-2 p-2 opacity-65 ${
                            (isSubmit === true && boxInfo === " ") ? "border-red-500" : "border-black"
                          }`}
                          placeholder="" 
                         value ={boxInfo}
                         readOnly />
                   
                   
                   <span className=" cursor-pointer absolute left-44"
                          onClick={ ()=>{
                            console.log("box" ,box);
                          setBox(!box)
                          } }>   
                         -
                    </span>
                    </div>
                  
                  
                  
                  <div 
                  className="text-red-500 opacity-80  cursor-pointer" 
                  
                   >
                    { console.log("box" ,box)}
                      {(boxInfo  === " ") ?  "Select a value!" : " "}
                  </div>
                    {/* conditionally render select a value box */}
                    {
                        (box === true ) && 
                        (
                            <div className="border border-gray-700 flex flex-col justify-center items-center mt-2  cursor-pointer">
                                 <div
                                  className="p-1 mt-2 opacity-80"
                                  onClick={()=>{
                                     handleBoxInfo("Help with an Order")
                                  }}> 
                                     Help with an Order
                                 </div>
                                 <div className="border-t  border-gray-300 my-3 w-full  flex justify-center p-1 mt-2 opacity-80"
                                 onClick={()=>{
                                    handleBoxInfo(" Food Safety Issue")
                                 }}>
                                    Food Safety Issue
                                 </div>
                                 <div className="border-t border-gray-300 my-3 w-full  flex justify-center p-1 mt-2 opacity-80"
                                 onClick={()=>{
                                    handleBoxInfo("Account and Payment Query")
                                 }}>
                                    Account and Payment Query
                                 </div>
                                 <div className="border-t border-gray-300 my-3 w-full  flex justify-center p-1 mt-2 opacity-80"
                                 onClick={()=>{
                                    handleBoxInfo("Data/Privacy Enquiry (GDPR)")
                                 }}>
                                    Data/Privacy Enquiry (GDPR)
                                 </div>
                                 <div className="border-t border-gray-300 my-3 w-full  flex justify-center p-1 mt-2 opacity-80"
                                 onClick={()=>{
                                    handleBoxInfo("FeedBack")
                                 }}>
                                    FeedBack
                                 </div>
                                 <div className="border-t border-gray-300 my-3 w-full  flex justify-center p-1 mt-2 opacity-80"
                                 onClick={()=>{
                                    handleBoxInfo("Other")
                                 }}>
                                     Other
                                 </div>

                                
                            </div>

                        )
                            
                    }
                </div>
                <div className="mt-4">
                    <h1 className="font-bold opacity-70">Your message</h1>
                    <h3 className="mt-1 opacity-85">
                         For any order quality queries, please take a photo of your order and add as an attachment below. If you can't do this right now, please retain a photo of your order as you may be asked for this later.  
                    </h3>
                  <input 
                  type="text" 
                  className={`border mt-2 p-2 opacity-65 ${
                    (isSubmit === true && message === " ") ? "border-red-500" : "border-black"
                  }`}  
                   placeholder=""
                   value={message}
                   onChange={(e)=>{
                     setMessage(e.target.value)
                   }}
                   />
                  <h3 className="text-red-500 opacity-80 ">
                        {(message === " " ? "Enter a value!" : " " )}
                  </h3>
                </div>
               
               
               <button  className="border border-black p-1 bg-lime-800 m-2 rounded-xl text-white mt-8 w-1/4 ml-36 hover:bg-blue-500"
                 onClick={()=>{
                    handleSend()
                 }}>
                  Send
               </button>
               </div>
           
               </div>
        </div>
    )
}

 export default Contact;

// module.exports = Contact;

