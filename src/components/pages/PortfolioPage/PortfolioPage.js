import React from "react";
import ProjectComponent from "./ProjectComponent"
import "./portfoliopage.css";

const PortfolioPage = () => (
  
  <div class="container">
    <h1 style={{color: "#8c52ff"}}>Portfolio</h1>
    <div class="row">
      <p>
        Download a copy of my resume
        <a href="https://raw.githubusercontent.com/Mindyratcliff/reactportfolio/21f331215c99156f4c9b330c3d4427152676c6ff/build/assets/MRatcliffResume.pdf" style={{color: "#8c52ff"}}> here.</a>
      </p>
    </div>
    <ProjectComponent/>
  </div>
);

export default PortfolioPage;
