import React from "react";
import "./SignUp.css";
import booties from "./assets/booties.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
    <div className="Box">
    <div className="Container">
      <div className="SignUp">Sign Up</div>
      <div className="Text">
       Already have an account? Click the link to <Link to ='/Login' >log in</Link>.
      </div>

      <div className="Enter">
        <div className="Field">
          <label htmlFor="Email" className="Label">Email</label>
          <input type="text" name="Email" id="Email" placeholder="email@domain.net" />
        </div>
        <div className="Field">
          <label htmlFor="Password" className="Label">Password</label>
          <input type="password" name="Password" id="Password" placeholder="enter your password" />
          
        </div>
      </div>
      <button className="Submit">Submit</button>
   </div> 

<div className="ImageContainer">
<img className="img" src={booties} alt= "hand" />

</div>
</div>
</>
  );
};

export default SignUp;
