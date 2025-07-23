import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../index.css";
// import dashboard from "../assets/dashboard.png";
// import home from "../assets/home.png";
// import profile from "../assets/profile.png"; // eslint-disable-line no-unused-vars
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const handleNavigation = (path) => {
    navigate(path);
  };
  const handlehome = () => {
    navigate("/");
  };
  const handlelogin = () => {
    navigate("/login");
  };
  // const handleSignup = () => { // eslint-disable-line no-unused-vars
  //   navigate("/signup");
  // };
  // const handleDashboard = () => {
  //   navigate("/dashboard");
  // };

  const paths = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <motion.div className="nav-container">
      <motion.div
        className="nav"
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h1 className="logo" onClick={handlehome}>
          <img src={logo} alt="" />
          NeoByte
        </h1>
        <motion.div className="links">
          <ul className="list">
            {paths.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    path === item.path ? "navLinks active" : "navLinks"
                  }
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div className="userPresnt">
          {/* <button className="btn" id="btn2" onClick={handlelogin}>
            Login
          </button> */}
          <button className="btn" onClick={handlelogin}>
            Get Started
          </button>
          {/* <img src={profile} alt="" /> */}
          {/* <button
          className="startedBtn"
          id="profileBtn"
          onClick={handleDashboard}
        >
          <img src={dashboard} alt="" />
          Dashboard
        </button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
