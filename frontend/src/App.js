import "./index.css";
import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Project from "./components/project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Project/>
    </div>
  );
}

export default App;
