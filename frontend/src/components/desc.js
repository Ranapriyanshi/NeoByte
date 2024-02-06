import React from "react";
import monday from "../assets/monday.png";
import shopify from "../assets/shopify.png";
import treelo from "../assets/treelo.webp";
import slack from "../assets/slack.png";
import paypal from "../assets/payPal.png";
import web from "../assets/web.png";
import compiler from "../assets/compiler.png";
import cart from "../assets/cart.png";
import i from "../assets/f.png";
import btn from "../assets/btn.png";
import "../index.css";

const Desc = () => {
  return (
    <div className="section">
      <div className="band">
        <img className="logos" src={monday} alt="" />
        <img className="logos" src={shopify} alt="" />
        <img className="logos" src={treelo} alt="" />
        <img className="logos" src={slack} alt="" />
        <img className="logos" src={paypal} alt="" />
      </div>
      <div className="detail">
        <div className="heading">
          <h1>
            Save your time <br /> managing business with us
          </h1>
          <p>
            {" "}
            We help the most exciting brands unlock their growth through
            carefully crafted paid media campaign and digital experiences.{" "}
          </p>
        </div>
        <div className="bBox">
          <div className="box" id="b1">
            <img src={web} alt="" className="divisions" />
            <h2>Web Design</h2>
            <p>We provide you with customised website design that's perfect for your business or personal site.</p>
          </div>
          <div className="box" id="b2">
            <img src={compiler} alt="" className="divisions" />
            <h2>Development</h2>
            <p>We will develop an online tool to create unique widget with a speicific functionality for your business website.</p>
          </div>
          <div className="box" id="b3">
            <img src={cart} alt="" className="divisions" />
            <h2>E-Commerce</h2>
            <p>We provide assistance to customers with everything from making online purchase decisions to investing.</p>
          </div>
        </div>
      </div>

      <div className="whyme">
        <div className="left">
            <img src={i} alt="" />
        </div>
        <div className="right">
            <h1>Why Us?</h1>
            <div className="title">
                <div>
                    <h1 style={{color:"#141435"}}>5+</h1>
                    <h3>Years of <br />Experience</h3>
                </div>
                <p>We have over worked over tremendous number of project over years and experts of what we do, and know how to bring perfection.</p>
            </div>


            <div className="title">
                <div>
                    <h1 style={{color:"#141435"}}>86</h1>
                    <h3>Happy <br />Clients</h3>
                </div>
                <p>We listern to out goal and complete a free audit to discover if we are great fit with each other to built an awesome project.</p>
            </div>

            <div className="title">
                <div>
                    <h1 style={{color:"#141435"}}>32+</h1>
                    <h3>Business <br />Partners</h3>
                </div>
                <p>We help the most exciting brands unlock their growth through
            carefully crafted paid media campaign and digital experiences.</p>
            </div>

            <div className="btnDiv">
                <button className="startedBtn" style={{backgroundColor:"#fcf6e8"}}>Contact Us  <img src={btn} alt="" className="arrow"/></button>
            </div>
            
            
        </div>
      </div>

      
    </div>
  );
};

export default Desc;
