import React from "react";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Project from "../components/project";
import Feedback from "../components/feeback";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Project />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;
