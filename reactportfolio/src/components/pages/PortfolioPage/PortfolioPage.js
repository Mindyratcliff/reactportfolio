import React from "react";
import ProjectComponent from "./ProjectComponent"
import "./portfoliopage.css";

const PortfolioPage = () => (
  
  <div class="container">
    <h1>Portfolio</h1>
    <div class="row">
      <p>
        Download a copy of my resume
        <a href="../../../assets/MRatcliffResume.pdf"> here.</a>
      </p>
    </div>
    <ProjectComponent/>
  </div>
);

export default PortfolioPage;
