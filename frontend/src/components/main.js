import React from "react";
import p1 from "../assets/profile1.png";
import p2 from "../assets/profile2.png";
import tag from "../assets/tag.png";
import btn from "../assets/btn.png";
import pointer from '../assets/arrow.png'
import Desc from "./desc";

const Main = () => {
  return (
    <>
    <div className="main">
      <div className="tag">
        <h1 className="tagline">Grow Your Business With Us
        <img className="pointer" src={pointer} alt="" />
        </h1>
        <p className="p">
          An agency is a business, firm or organisation that provides Services
        </p>
        <button className="startedBtn" > Get Started <img src={btn} alt="" className="arrow"/></button>
      </div>
      <div className="pImgsec">
        <div className="container c1">
          <div className="pContain">
            <div className="contain">
              <img src={p1} alt="" className="profile1" />
            </div>
          </div>
        </div>

        <div className="container c2">
          <div className="pContain" style={{ border: "16px solid #98d3ce" }}>
            <div className="contain" style={{ backgroundColor: "#ef9396" }}>
              <img src={p2} alt="" className="profile2" />
            </div>
          </div>
        </div>
        <img src={tag} className="badge" alt="" />
      </div>
    </div>
    <Desc/>
    </>
  );
};

export default Main;
