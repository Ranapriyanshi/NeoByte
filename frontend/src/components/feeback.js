import React from "react";
import "../index.css";
import women from "../assets/women.png";
import line from "../assets/line.svg";
import gooo from "../assets/gooo.png";
import star from "../assets/star.png";
import  { motion } from "framer-motion";

const Feedback = () => {
  return (
    <motion.div className="feedback">
      <motion.div className="sec">
        <motion.div className="wide">
          <h1>What our clients say?</h1>
          <motion.div className="WbBox">
            <motion.div className="Wbox">
              <motion.div>
                <h1>Maria Antonio</h1>
                <h5>CEO QuickStart, Senior Software Developer</h5>
              </motion.div>
              <motion.div className="ratings">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </motion.div>
              <motion.div></motion.div>
              <br />
              <p>
                The services of NeoByte are amazing and are very reliable.
                Additonally the variety of features and implementations are
                uniques and one of the kind
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="buttons">
            <button>
              <img src={gooo} alt="" id="one" />
            </button>
            <button>
              <img src={gooo} alt="" id="two" />
            </button>
          </motion.div>
        </motion.div>
        <motion.div className="far">
          <img src={women} alt="" />
        </motion.div>
      </motion.div>
      <motion.div className="line">
        <img src={line} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Feedback;
