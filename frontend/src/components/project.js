import React, { useState } from "react";
import "../index.css";
import pointer from "../assets/pointer.png";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro4.jpg";
import goo from "../assets/gooo.png";
// import btn from "../assets/btn.png"; // eslint-disable-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      id: "b1",
      content:
        "Ornate is a design sharing platforn build for the buding design to come forward and shae thier ecperiences with the world.",
      image: pro1,
      link: "https://www.oculus.com/quest/",
    },
    {
      id: "b2",
      content:
        "Dive in the digital gaming word with the amazing gaming visuals with amazing transitions and go boom bboom yyeaah! meooow",
      image: pro2,
      link: "https://www.oculus.com/quest/",
    },
    {
      id: "b3",
      content:
        "We know how to make your product stand out in the market. We have the best team to help your business flourish abd grow.",
      image: pro3,
      link: "https://www.shopify.com/",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  // const direction = ... // eslint-disable-line no-unused-vars

  const handleNext = () => {
    // setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    // setDirection(-1);
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <motion.div className="display">
      <motion.div className="top">
        <motion.div>
          <h1>
            See our Projects
            <img src={pointer} alt="" srcSet="" className="pointer" />
          </h1>
        </motion.div>
        <p>
          Checkout the cool work we have done. Every project is unique with
          different products, target audience and business goals.
        </p>
      </motion.div>

      <motion.div className="projectInfo">
        <motion.div className="wrapper">
          <button className="uniProj uniProj--stripe" onClick={handlePrev}>
            <img src={goo} alt="" style={{ transform: "rotate(90deg" }} />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={projects[currentProject].id + currentProject}
              className="showCase"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                className="shadow"
                id={projects[currentProject].id}
              ></motion.div>
              <motion.div className="card">
                <img
                  src={projects[currentProject].image}
                  alt=""
                />
                <motion.div className="overlay">
                  <button className="uniProj uniProj--stripe">
                    Visit Website <img src={goo} alt="" />
                  </button>
                  <motion.div className="info design">
                    <h3>{projects[currentProject].content}</h3>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <button className="uniProj uniProj--stripe" onClick={handleNext}>
            <img src={goo} alt="" />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
