import React from "react";
import "./portfoliopage.css";

const PortfolioPage = () => (
  <div>
    <h1>Portfolio</h1>
    <div class="row">
      <h3>Happy Trees</h3>
      <img src="" alt=""/>
      <p>
        A drawing application which allows users to save drawings in a personal
        account using Passport JS. This uses PaperJS along with Sequelize to
        connect to a MySQL database. This was a group project completed with
        Abdinajib Liban, Kole Gasior, Simon Ziccardi, and Efraín González. I
        worked on the MySQL database, Sequelize, the front-end, logo, and wrote
        the ReadMe file. Happy Trees can be accessed here{" "}
        <a href="https://guarded-ravine-40907.herokuapp.com">Happy Trees</a>
        The GitHub Repository for Happy Trees can be accessed here{" "}
        <a href="https://github.com/Mindyratcliff/Project2">
          Happy Trees Repo.
        </a>
      </p>
    </div>
  </div>
);

export default PortfolioPage;
