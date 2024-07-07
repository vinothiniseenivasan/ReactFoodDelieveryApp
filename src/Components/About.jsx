import User from "./User";
import "../Css/about.css";
import UserClass from "./UserClass";
import { Component, useEffect } from "react";

const About =() =>{

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
    </div>
  );

}
 
 


export default About;
