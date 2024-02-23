import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../index.css";

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

  const paths = [
    { name: "Home", path: "/" },
    { name: "Project", path: "/project" },
    { name: "Services", path: "/services" },
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
      <div>
        <button className="btn" onClick={handlelogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
