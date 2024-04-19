import React from "react";
import "../index.css";
import logo from "../assets/logo.png";
import social from '../assets/social.png'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div className="contact">
      <motion.div className="topDiv">
        <motion.div className="first">
          <motion.div>
            <img src={logo} alt="" />
            <h1>NeoByte</h1>
          </motion.div>
          <p>
            We help most exciting brands unlock grouwth through meticulously
            crafted media campaigns and digital experiences.
          </p>
        </motion.div>
        <motion.div className="second">
          <motion.div>
            <h2>
              <b>Products</b>
            </h2>
            <h3>Overview</h3>
            <h3>Marketplace</h3>
            <h3>Workers</h3>
          </motion.div>
          <motion.div>
            <h2>
              <b>Resouces</b>
            </h2>
            <h3>Blog</h3>
            <h3>FAQ's</h3>
            <h3>ROI Calculator</h3>
          </motion.div>
        </motion.div>
        <motion.div className="third">
          <motion.div>
            <h2>Subcribe to our newsletter</h2>
          </motion.div>
          <p>Subcribe to stay updated</p>
          <motion.div className="subscribe">
            Enter your Email
            <button>Subscribe</button>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="bottomDiv">
        <hr />
        <motion.div>
          <p>©Priyanshi Rana. All Rights Reseved</p>
          <img src={social} alt="" />

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
