import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../index.css";
// import home from "../assets/home.png";
// import dashboard from "../assets/dashboard.png";
// import profile from "../assets/profile.png";

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
    <div className="nav">
      <h1 className="logo" onClick={handlehome}>
        <img src={logo} alt="" />
        NeoByte
      </h1>
      <div className="links">
        <ul className="list">
          {paths.map((item, index) => {
            return (
              <li
                key={index}
                className={path === item.path ? "navLinks active" : "navLinks"}
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="userPresnt">
        <button className="btn" id="btn2" onClick={handlelogin}>
          Login
        </button>
        <button className="btn" onClick={handlelogin}>
          Get Started
        </button>
        {/* <img src={profile} alt="" /> */}
        {/* <button className="startedBtn" id="profileBtn" onClick={handleDashboard}>
          <img src={dashboard} alt="" />
          Dashboard
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
