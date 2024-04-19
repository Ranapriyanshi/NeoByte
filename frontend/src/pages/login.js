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

const Login = () => {
  const navigate = useNavigate();
  const handlehome = () => {
    navigate("/");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <motion.div className="base">
      <motion.div className="thin">
        <motion.div className="minNAV">
          <h1 className="logo" onClick={handlehome}>
            <img src={logo} alt="" />
            NeoByte
          </h1>
        </motion.div>
        <motion.div className="description">
          <h1>Technology Driving Results for Businesses</h1>
          <p>Welcome back! Please login to your account.</p>
        </motion.div>
        <motion.div className="form">
          <motion.div className="inputFeild">
            <motion.div id="active">
              <label>Email Address</label>
              {/* <input type="email"  /> */}
              <p>priyanshirana78@gmail.com</p>
            </motion.div>
            <hr />
            <motion.div id="notActive">
              <label>Password</label>
              <p>***************</p>
              {/* <input type="password" /> */}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="actions">
          <motion.div>
            <input type="checkbox" name="" id="" />
            <button className="loginBtn">Remember Me</button>
          </motion.div>
          <button className="forgotBtn" style={{textDecoration:"underline"}}>Forgot Password?</button>
        </motion.div>
        <motion.div className="done">
          <button className="btn">Login</button>
          <button className="btn" id="v2" onClick={handleSignup}>SignUp</button>
        </motion.div>
        <motion.div style={{width:"100%",display:"flex", alignItems:"center", justifyContent:"center", color:"#6f6969", marginBottom:"30px"}}>OR</motion.div>
        <motion.div className="sso">
          <motion.div className="ssoParent" style={{backgroundColor:"#f3c2cc"}}>
            <motion.div className="ssoChild">
              <h4>Continue with Google</h4>
              <img src={google} alt="" />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="sso" >
          <motion.div className="ssoParent" style={{backgroundColor:"#e0d8ff"}}>
            <motion.div className="ssoChild">
              <h4>Continue with LinkedIn</h4>
              <img src={linkedin} alt="" />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="sso" >
          <motion.div className="ssoParent" style={{backgroundColor:"#fee5c9"}}>
            <motion.div className="ssoChild">
              <h4>Continue with Github</h4>
              <img src={github} alt="" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="fat">
        <motion.div className="backHome">
          <motion.div className="btnShadow"></motion.div>
          <button className="startedBtn" onClick={handlehome}>
            Home
            <img src={home} alt="" />
          </button>
        </motion.div>
        <motion.div className="fatFather" id="id1">
          <motion.div id="I">
            <img src={web} alt="" />
            <h3>Customised Web Designimg</h3>
          </motion.div>
        </motion.div>
        <motion.div className="fatFather" id="id2">
          <motion.div id="II">
            <img src={compiler} alt="" />
            <h3>Web Development Tool</h3>
          </motion.div>
        </motion.div>
        <motion.div className="fatFather" id="id3">
          <motion.div id="III">
            <img src={cart} alt="" />
            <h3>E-Commerce Assistence</h3>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
