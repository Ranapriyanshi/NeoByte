import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import mail from "../assets/mail.png";
import calll from "../assets/calll.png";
import location from "../assets/location.png";
import girl from "../assets/222.png"

const Contact = () => {
  return (
    <div className="contactPage">
      <Navbar />
      <div className="form_contain">
          <img src={girl} alt=""  style={{zIndex:"2"}}/>
          <div className="input_form">
            <h2>Connect with us!</h2>
            <p>
              Please fill your details below and we will reach out to you as quick as
              possible.
            </p>
            <div className="query">
              <div className="name">
                <div className="name_input">
                  <label htmlFor="first_name">First Name*</label>
                  <input type="text" id="first_name" />
                </div>
                <div className="name_input">
                  <label htmlFor="last_name">Last Name*</label>
                  <input type="text" id="last_name" />
                </div>
              </div>
              <div className="msg">
                <label htmlFor="email">Email Address*</label>
                <input type="email" id="email" />
              </div>
              <div className="msg">
                <label htmlFor="message">How can we help?</label>
                <textarea name="postContent" id="message" rows={5} cols={40} />
              </div>
            </div>
            <button>
              <h3>Submit</h3>
            </button>
          </div>
      
        </div>
      <div className="response">
        <div className="details">
          <div className="detail_parent">
            <div className="us" id="ba1">
              <img src={calll} alt="" />
            </div>
            <h3>+1 485 4852 4856</h3>
          </div>
          <div className="detail_parent">
            <div className="us" id="ba2">
              <img src={mail} alt="" style={{ scale: "0.95" }} />
            </div>
            <h3>neobyteofficials@gmail.com</h3>
          </div>
          <div className="detail_parent">
            <div className="us" id="ba3">
              <img src={location} alt="" style={{ scale: "0.9" }} />
            </div>
            <h3>4th Floor,Park Avenue, Sundane road, California, US </h3>
          </div>
        </div>
        </div>
        
      <Footer />
    </div>
  );
};

export default Contact;
