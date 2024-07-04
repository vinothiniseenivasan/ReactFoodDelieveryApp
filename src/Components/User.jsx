import { useEffect } from "react";
import UserClass from "./UserClass";
import { useState } from "react";

const User = ({name}) =>{
    const [count ,setCount] = useState(0);
    useEffect(() =>{
        setCount(count+1)
    },[])
    return(

        <div className="user-card">
            <h1 >{count} times called</h1>
              <h2>Name : Vinothini Function componrnt</h2>
              <h3>Location: Dubai</h3>
              <h4>Position : Front end developer</h4>
        </div>
    )
}

export default User;