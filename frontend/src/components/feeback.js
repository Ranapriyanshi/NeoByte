import React from "react";
import "../index.css";
import women from "../assets/women.png";
import line from "../assets/line.svg";

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="sec">
        <div className="wide">
          <h1>What our clients say?</h1>
          <div className="WbBox">
            <div className="Wbox">
              <div className="shadow">Hello</div>
              <p>Heelo Maria!</p>
              <p>The look and feel of the website are amazing</p>
            </div>
          </div>
        </div>
        <div className="far">
          <img src={women} alt="" />
        </div>
      </div>
      <div className="line">
        <img src={line} alt="" />
      </div>
    </div>
  );
};

export default Feedback;
