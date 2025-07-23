import React, { useState } from "react";
import "../index.css";
import women from "../assets/women.png";
import line from "../assets/line.svg";
import goo from "../assets/gooo.png";
import star from "../assets/star.png";
import { AnimatePresence, motion } from "framer-motion";

const Feedback = () => {
  const feedbacks = [
    {
      CustName: "Piyush Singh Negi",
      designation: "CEO QuickStart, Senior Software Developer",
      Feedback:
        "The services of NeoByte are amazing and are very reliable.Additonally the variety of features and implementations are uniques and one of the kind",
      stars: 4,
    },
    {
      CustName: "Priyanshi Rana",
      designation: "Senior Softeware Developer",
      Feedback:
        "The services of NeoByte are amazing and are very reliable.Additonally the variety of features and implementations are uniques and one of the kind",
      stars: 5,
    },
    {
      CustName: "Piyush Rana",
      designation: "CEO QuickStart, Senior Software Developer",
      Feedback:
        "The services of NeoByte are amazing and are very reliable.Additonally the variety of features and implementations are uniques and one of the kind",
      stars: 5,
    },
  ];

  const [currentFeedback, setCurrentFeedback] = useState(0);
  // const direction = ... // eslint-disable-line no-unused-vars

  const handleNext = () => {
    setDirection(1);
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentFeedback((prev) =>
      prev === 0 ? feedbacks.length - 1 : prev - 1
    );
  };
  return (
    <motion.div className="feedback">
      <motion.div className="sec">
        <motion.div className="wide">
          <h1>Our Client Love❤️ us</h1>
          <motion.div className="WbBox">
            <button className="uniProj uniProj--stripe" onClick={handlePrev}>
              <img src={goo} alt="" style={{ transform: "rotate(90deg" }} />
            </button>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="Wbox"
                key={currentFeedback}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.div>
                  <h1>{feedbacks[currentFeedback].CustName}</h1>
                  <h5>{feedbacks[currentFeedback].designation}</h5>
                </motion.div>
                <motion.div className="ratings">
                  {[...Array(feedbacks[currentFeedback].stars)].map((_, i) => (
                    <img key={i} src={star} alt="star" />
                  ))}
                </motion.div>
                <motion.div></motion.div>
                <br />
                <p>{feedbacks[currentFeedback].Feedback}</p>
              </motion.div>
            </AnimatePresence>
            <button className="uniProj uniProj--stripe" onClick={handleNext}>
              <img src={goo} alt="" />
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
