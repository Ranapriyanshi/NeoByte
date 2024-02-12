import React from "react";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Project from "../components/project";
import Feedback from "../components/feeback";
import Contact from "../components/contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Project />
      <Feedback />
      <Contact />
    </div>
  );
};

export default Home;
