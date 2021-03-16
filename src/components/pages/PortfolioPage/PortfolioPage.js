import React from "react";
import ProjectComponent from "./ProjectComponent"
import "./portfoliopage.css";

const PortfolioPage = () => (
  
  <div class="container">
    <h1 style={{color: "#8c52ff"}}>Portfolio</h1>
    <div class="row">
      <p>
        Download a copy of my resume
        <a href="{`${process.env.PUBLIC_URL}/build/assets/MRatcliffResume.pdf`}" style={{color: "#8c52ff"}}> here.</a>
      </p>
    </div>
    <ProjectComponent/>
  </div>
);

export default PortfolioPage;
