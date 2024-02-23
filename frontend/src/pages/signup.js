import React from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import compiler from "../assets/compiler.png";
import web from "../assets/web.png";
import home from "../assets/home.png";
import google from "../assets/Google.png";
import linkedin from "../assets/linkedIn.png";
import github from "../assets/github.png";
import "../index.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handlehome = () => {
    navigate("/");
  };
  const handlelogin = () => {
    navigate("/login");
  };
  return (
    <div className="base">
      <div className="thin">
        <div>
          <h1 className="logo" onClick={handlehome}>
            <img src={logo} alt="" />
            NeoByte
          </h1>
        </div>
        <div className="description">
          <h1>Innovative Technology is Propelling Business Success</h1>
          <p>Join Us! Create a new account on NeoByte.</p>
        </div>
        <div className="form">
          <div className="inputFeild">
            <div id="active">
              <label>Email Address</label>
              {/* <input type="email"  /> */}
              <p>priyanshirana78@gmail.com</p>
            </div>
            <hr />
            <div id="notActive">
              <label>Password</label>
              <p>***************</p>
              {/* <input type="password" /> */}
            </div>
          </div>
        </div>
        <div className="actions">
          <div>
            <input type="checkbox" name="" id="" />
            <button className="loginBtn">Remember Me</button>
          </div>
          {/* <button className="forgotBtn" style={{textDecoration:"underline"}}>Forgot Password?</button> */}
        </div>
        <div className="done">
          <button className="btn" >SignUp</button>
          <button className="btn" id="v2" onClick={handlelogin}>Login</button>
        </div>
        <div style={{width:"100%",display:"flex", alignItems:"center", justifyContent:"center", color:"#6f6969", marginBottom:"30px"}}>OR</div>
        <div className="sso">
          <div className="ssoParent" style={{backgroundColor:"#f3c2cc"}}>
            <div className="ssoChild">
              <h4>Continue with Google</h4>
              <img src={google} alt="" />
            </div>
          </div>
        </div>
        <div className="sso" >
          <div className="ssoParent" style={{backgroundColor:"#e0d8ff"}}>
            <div className="ssoChild">
              <h4>Continue with LinkedIn</h4>
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="sso" >
          <div className="ssoParent" style={{backgroundColor:"#fee5c9"}}>
            <div className="ssoChild">
              <h4>Continue with Github</h4>
              <img src={github} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="fat">
        <div className="backHome">
          <div className="btnShadow"></div>
          <button className="startedBtn" onClick={handlehome}>
            Home
            <img src={home} alt="" />
          </button>
        </div>
        <div className="fatFather" id="id1">
          <div id="I">
            <img src={web} alt="" />
            <h3>Customised Web Designimg</h3>
          </div>
        </div>
        <div className="fatFather" id="id2">
          <div id="II">
            <img src={compiler} alt="" />
            <h3>Web Development Tool</h3>
          </div>
        </div>
        <div className="fatFather" id="id3">
          <div id="III">
            <img src={cart} alt="" />
            <h3>E-Commerce Assistence</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
