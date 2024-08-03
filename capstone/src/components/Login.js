import React from "react";
import "./Login.css";
import belly from "./assets/belly.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <div className="Box">
    <div className="Container">
      <div className="Login">Login</div>
      <div className="Text">
        Don't have an account? Click the link <Link to='/SignUp'>sign up</Link>.
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
<img className="img" src={belly} alt= "belly" />



</div>
</div>
</>
  );
};

export default Login;
