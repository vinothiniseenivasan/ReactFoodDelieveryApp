import User from "./User";
import "../Css/about.css";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor() {
    super();
    // console.log("parent constructor")
  }
  componentDidMount() {
    // console.log( "parent componentDidMount")
  }
  render() {
    // console.log("parent render")
    return (
      <div>
        <h1>About page</h1>
        <UserClass name="first class " location="india" />
      </div>
    );
  }
}

export default About;
