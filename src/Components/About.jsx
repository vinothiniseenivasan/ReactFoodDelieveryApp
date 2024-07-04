import User from "./User";
import '../Css/about.css'
import UserClass from "./UserClass";

const About = () =>
    {
        return(
            <div>
            <h1>About page</h1>
           
            <User  name = "vino"/>
            <UserClass  name ="vino class component" location="Dubai class" />
          </div>
        )
        
        
    }

export default About;