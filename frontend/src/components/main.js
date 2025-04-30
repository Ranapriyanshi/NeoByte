import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Desc from "./desc";
import fly from "../assets/2222.png";
import btn from "../assets/btn.png";
import pointer from "../assets/arrow.png";
// import tag from "../assets/tag.png";

const Main = () => {
  const navigate = useNavigate();
  const handleDemo = () => {
    navigate("/demo");
  };
  return (
    <>
      <motion.div className="main">
        <motion.div className="tag">
          <h1 className="tagline">
            Accelerate growth with web solutions built to scale,from first click
            to final conversion
            <img className="lessgo" src={pointer} alt="" />
          </h1>
          <p className="p">
            Neobyte empowers businesses to thrive through cutting-edge digital
            solutions, custom web development, and unmatched support tailored to
            your goals.
          </p>
          <motion.button
            className="uniProj uniProj--stripe"
            onClick={handleDemo}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            Book a Demo <img src={btn} alt="" className="arrow" />
          </motion.button>
        </motion.div>
        <motion.div className="pImgsec">
          <img src={fly} alt="" />
        </motion.div>
      </motion.div>
      <Desc />
    </>
  );
};

export default Main;
