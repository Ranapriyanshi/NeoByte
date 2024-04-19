import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Desc from "./desc";
import fly from "../assets/2222.png";
import btn from "../assets/btn.png";
import pointer from "../assets/arrow.png";
// import p1 from "../assets/profile1.png";
// import p2 from "../assets/profile2.png";
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
            Let's cultivate your success together
            <img className="lessgo" src={pointer} alt="" />
          </h1>
          <p className="p">
            Empower businesses to thrive through comprehensive tech solutions
            and unparalleled support tailored to your needs
          </p>
          <motion.button
            className="uniProj uniProj--stripe"
            onClick={handleDemo}
            initial={{ scale:0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            Book a Demo <img src={btn} alt="" className="arrow" />
          </motion.button>
        </motion.div>
        <motion.div className="pImgsec">
          {/* <motion.div className="container c1">
          <motion.div className="pContain">
            <motion.div className="contain">
              <img src={p1} alt="" className="profile1" />
            </motion.div>>
          </motion.div>
        </motion.div>

        <motion.div className="container c2">
          <motion.div className="pContain" style={{ border: "16px solid #98d3ce" }}>
            <motion.div className="contain" style={{ backgroundColor: "#ef9396" }}>
              <img src={p2} alt="" className="profile2" />
            </motion.div>>
          </motion.div>
        </motion.div> */}
          {/* <img src={tag} className="badge" alt="" /> */}
          <img src={fly} alt="" />
        </motion.div>
      </motion.div>
      <Desc />
    </>
  );
};

export default Main;
