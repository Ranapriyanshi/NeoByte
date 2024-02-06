import React from "react";
import "../index.css";
import pointer from "../assets/pointer.png";
import pro1 from "../assets/pro1.png"

const Project = () => {
  return (
    <div className="display">
      <div className="top">
        <div>
          <h1>
            See our Projects
            <img src={pointer} alt="" srcset="" className="pointer" />
          </h1>
        </div>
        <p>
          Checkout the cool work we have done. Every project is unique with
          different products, target audience and business goals.
        </p>
      </div>
      <div className="projectInfo">
        <div className="info">
            <button className="tagBtn">Web design</button>
            <h2>Ornate</h2>
            <p>Ornate is a design sharing platforn build for the buding design to come forward and shae thier ecperiences with the world. It is a beginners friendly platforn designed to provide limited crtical feedback for the new desiners. Ornate for provides for room for improvement thrugh feedback that can be retrieved through comments and likes.</p>
        </div>
        <div className="showCase">
            <div className="card">
                <img src={pro1} alt="" />


            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
