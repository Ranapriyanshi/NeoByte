import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <motion.div>
      <Navbar />
      <motion.div className="parentForm">
        <motion.div className="sForm">
          <img src={logo} alt="" style={{ width: "15%" }} />
          <h2>Book Demo</h2>
          <motion.div className="demoForm">
            <motion.div>
              <label htmlFor="">
                <h4>First name</h4>
              </label>
              <input type="text"  className="demoForm_input"/>
            </motion.div>
            <motion.div>
              <label htmlFor="">
                <h4>Work email address</h4>
              </label>
              <input type="text"  className="demoForm_input"/>
            </motion.div>
            <motion.div>
              <label htmlFor="">
                <h4>Your company size</h4>
              </label>
              <select name="" id="" className="demoForm_input">
                <option value="">Under 250</option>
                <option value="">250-999</option>
                <option value="">1000-4999</option>
                <option value="">5000-10000</option>
                <option value="">10000-25000</option>
                <option value="">25K+</option>
              </select>
            </motion.div>
            <motion.div className="denoForm_btn">
              <button className="btn">Book Demo</button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Demo;
