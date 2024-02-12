import React from "react";
import "../index.css";
import logo from "../assets/logo.png";
import social from '../assets/social.png'

const Footer = () => {
  return (
    <div className="contact">
      <div className="topDiv">
        <div className="first">
          <div>
            <img src={logo} alt="" />
            <h1>NeoByte</h1>
          </div>
          <p>
            We help most exciting brads unlock grouwth through meticulousl
            crafted paid media campaigns and digital experiences.
          </p>
        </div>
        <div className="second">
          <div>
            <h2>
              <b>Products</b>
            </h2>
            <h3>Overview</h3>
            <h3>Maarketplace</h3>
            <h3>Workers</h3>
          </div>
          <div>
            <h2>
              <b>Resouces</b>
            </h2>
            <h3>Blog</h3>
            <h3>FAQ's</h3>
            <h3>ROI Calculator</h3>
          </div>
        </div>
        <div className="third">
          <div>
            <h2>Subcribe to our newsletter</h2>
          </div>
          <p>Subcribe to stay updated</p>
          <div className="subscribe">
            Enter your Email
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="bottomDiv">
        <hr />
        <div>
          <p>©Priyanshi Rana. All Right Reseved</p>
          <img src={social} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Footer;
