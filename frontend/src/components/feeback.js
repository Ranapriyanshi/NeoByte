import React from "react";
import "../index.css";
import women from "../assets/women.png";
import line from "../assets/line.svg";
import gooo from "../assets/gooo.png";
import star from "../assets/star.png";

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="sec">
        <div className="wide">
          <h1>What our clients say?</h1>
          <div className="WbBox">
            <div className="Wbox">
              <div>
                <h1>Maria Antonio</h1>
                <h5>CEO QuickStart, Senior Software Developer</h5>
              </div>
              <div className="ratings">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div></div>
              <br />
              <p>
                The services of NeoByte are amazing and are very reliable.
                Additonally the variety of features and implementations are
                uniques and one of the kind
              </p>
            </div>
          </div>
          <div className="buttons">
            <button>
              <img src={gooo} alt="" id="one" />
            </button>
            <button>
              <img src={gooo} alt="" id="two" />
            </button>
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
