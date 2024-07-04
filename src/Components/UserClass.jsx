import React from "react";
import User from "./User";

class UserClass extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={
          count: 0 ,
          count2 : 3
        }

        console.log("constructor");

    }
    

  render()
  { 
    console.log("render")
    const {name , location} = this.props;
   const {count,count2}  = this.state;
    return(
        <div className="user-card">
          <button  onClick={()=>{
              this.setState({
                count : this.state.count+1
              })
            }} >
            Click Increase Count
          </button>
           
                  <h1>{count}</h1>
                 <h2>Name : {name}</h2>
                 <h3>Location: {location}</h3>
                 <h4>Position : Front end developer</h4>

         </div>
    )

  }
   
}


export default UserClass;