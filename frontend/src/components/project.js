import React from "react";
import "../index.css";
import pointer from "../assets/pointer.png";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro4.jpg";
import goo from "../assets/gooo.png";
import btn from "../assets/btn.png";
import { motion } from "framer-motion";

const Project = () => {
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
        <motion.div className="info r design">
          <button className="tagBtn">Web design</button>
          <h2>Ornate</h2>
          <p>
            Ornate is a design sharing platforn build for the buding design to
            come forward and shae thier ecperiences with the world.
          </p>
          <motion.div>
            <button className=" uniProj uniProj--stripe">
              See Full Project <img src={goo} alt="" />
            </button>
          </motion.div>
        </motion.div>
        <motion.div className="showCase">
          <motion.div className="parentContainer sr design">
            <motion.div className="card">
              <motion.div className="shadow"></motion.div>
              <img src={pro1} alt="" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="projectInfo">
        <motion.div className="showCase">
          <motion.div className="parentContainer sl front">
            <motion.div className="shadow"></motion.div>
            <motion.div className="card">
              <img src={pro2} alt="" />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="info l front">
          <button className="tagBtn">Development</button>
          <h2>Oculus Quest</h2>
          <p>
            Dive in the digital gaming word with the amazing gaming visuals with
            amazing transitions and go boom bboom yyeaah! meooow{" "}
          </p>
          <button className="uniProj uniProj--stripe">
            See Full Project <img src={goo} alt="" />
          </button>
        </motion.div>
      </motion.div>

      <motion.div className="projectInfo">
        <motion.div className="info r back">
          <button className="tagBtn">E-Commerce</button>
          <h2>E-Commerce Project Title</h2>
          <p>
            We know how to make your product stand out in the market. We have
            the best team to help your business flourish abd grow.
          </p>
          <button className="uniProj uniProj--stripe">
            See Full Project <img src={goo} alt="" />
          </button>
        </motion.div>
        <motion.div className="showCase">
          <motion.div className="parentContainer sr back">
            <motion.div className="card">
              <motion.div className="shadow"></motion.div>
              <img src={pro3} alt="" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="allProj">
        <button className="startedBtn" style={{ backgroundColor: "#fff" }}>
          See All Projects <img src={btn} alt="" className="arrow" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Project;
