import React from "react";
import "../index.css";
import pointer from "../assets/pointer.png";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro4.jpg";
import goo from "../assets/gooo.png";
import btn from "../assets/btn.png";

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
        <div className="info r design">
          <button className="tagBtn">Web design</button>
          <h2>Ornate</h2>
          <p>
            Ornate is a design sharing platforn build for the buding design to
            come forward and shae thier ecperiences with the world.
          </p>
          <button className="projectBtn">
            See Full Project <img src={goo} alt="" />
          </button>
        </div>
        <div className="showCase">
          <div className="parentContainer sr design">
            <div className="card">
              <div className="shadow"></div>
              <img src={pro1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="projectInfo">
        <div className="showCase">
          <div className="parentContainer sl front">
            <div className="shadow"></div>
            <div className="card">
              <img src={pro2} alt="" />
            </div>
          </div>
        </div>
        <div className="info l front">
          <button className="tagBtn">Development</button>
          <h2>Oculus Quest</h2>
          <p>
            Dive in the digital gaming word with the amazing gaming visuals with
            amazing transitions and go boom bboom yyeaah! meooow{" "}
          </p>
          <button className="projectBtn">
            See Full Project <img src={goo} alt="" />
          </button>
        </div>
      </div>

      <div className="projectInfo">
        <div className="info r back">
          <button className="tagBtn">E-Commerce</button>
          <h2>E-Commerce Project Title</h2>
          <p>
            Ornate is a design sharing platforn build for the buding design to
            come forward and shae thier ecperiences with the world.
          </p>
          <button className="projectBtn">
            See Full Project <img src={goo} alt="" />
          </button>
        </div>
        <div className="showCase">
          <div className="parentContainer sr back">
            <div className="card">
              <div className="shadow"></div>
              <img src={pro3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="allProj">
        <button className="startedBtn allprojBtn">
          See All Projects <img src={btn} alt="" className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Project;
