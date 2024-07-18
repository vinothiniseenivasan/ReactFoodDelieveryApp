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
      <h1>About page</h1>
      <UserClass name="first class " location="india" />
      <h1> {dataFromContext.loginUserInformation}</h1>
    </div>
  );

}
 
 


export default About;
