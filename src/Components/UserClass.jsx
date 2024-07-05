import React from "react";
import User from "./User";

class UserClass extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={
            userInfo :{
              name : "null" ,
              created_at:"0"
            }
        }

    }
    
   async componentDidMount()
  {
    const response = await fetch("https://api.github.com/users/vinothiniseenivasan");
    const json = await response.json();
    console.log("json" ,json)

    this.setState ({
      userInfo :{
        name : json.login ,
        created_at:json.created_at
      }
    }
     
        
    )
  }
  render()
   { 
  
    const {name ,created_at} = this.state.userInfo;
  //  const {count,count2}  = this.state;
    return(
        <div className="user-card">
          <button >
            Click Increase Count
          </button>
           
                  <h1></h1>
                 <h2>Name : {name}</h2>
                 <h3>Location: {created_at}</h3>
                 <h4>Position : Front end developer</h4>

         </div>
       )

  }
   
}


export default UserClass;