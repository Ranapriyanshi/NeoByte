import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import mail from "../assets/mail.png";
import calll from "../assets/calll.png";
import location from "../assets/location.png";
import girl from "../assets/222.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div className="contactPage">
      <Navbar />
      <motion.div className="form_contain">
        <img src={girl} alt="" style={{ zIndex: "2" }} />
        <motion.div className="input_form">
          <h2>Connect with us!</h2>
          <p>
            Please fill your details below and we will reach out to you as quick
            as possible.
          </p>
          <motion.div className="query">
            <motion.div className="name">
              <motion.div className="name_input">
                <label htmlFor="first_name">First Name*</label>
                <input type="text" id="first_name" />
              </motion.div>
              <motion.div className="name_input">
                <label htmlFor="last_name">Last Name*</label>
                <input type="text" id="last_name" />
              </motion.div>
            </motion.div>
            <motion.div className="msg">
              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" />
            </motion.div>
            <motion.div className="msg">
              <label htmlFor="message">How can we help?</label>
              <textarea name="postContent" id="message" rows={5} cols={40} />
            </motion.div>
          </motion.div>
          <button>
            <h3>Submit</h3>
          </button>
        </motion.div>
      </motion.div>
      <motion.div className="response">
        <motion.div className="details">
          <motion.div className="detail_parent">
            <motion.div className="us" id="ba1">
              <img src={calll} alt="" />
            </motion.div>
            <h3>+1 485 4852 4856</h3>
          </motion.div>
          <motion.div className="detail_parent">
            <motion.div className="us" id="ba2">
              <img src={mail} alt="" style={{ scale: "0.95" }} />
            </motion.div>
            <h3>neobyteofficials@gmail.com</h3>
          </motion.div>
          <motion.div className="detail_parent">
            <motion.div className="us" id="ba3">
              <img src={location} alt="" style={{ scale: "0.9" }} />
            </motion.div>
            <h3>4th Floor,Park Avenue, Sundane road, California, US </h3>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default Contact;
