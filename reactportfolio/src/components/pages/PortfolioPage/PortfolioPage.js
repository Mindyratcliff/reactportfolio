import React from "react";
import "./portfoliopage.css";

const PortfolioPage = () => (
  <div>
    <h1>Portfolio</h1>
    <div class="row">
      <h3>Happy Trees</h3>
      <img src="" alt="" />
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
    <div class="row">
      <h3>CoronaDate</h3>
      <img src="" alt="" />
      <p>
        This is a web application which allows users to search both The Covid
        Tracking Project and the Ticketmaster APIs so they can make an informed
        decision about attending events in their state. This was a group project
        completed with the assistance of Mengmei Tu, Juan Munoz, and Evan
        Robinson. I worked on the API call to Ticketmaster, made the hero image
        and logo, and wrote the ReadMe file. CoronaDate can be accessed here{" "}
        <a href="https://mmeii.github.io/project-1-corona-date/">CoronaDate</a>
        The GitHub Repository for CoronaDate can be accessed here{" "}
        <a href="https://github.com/mmeii/project-1-corona-date">
          CoronaDate Repo.
        </a>
      </p>
    </div>
    <div class="row">
      <h3>Budget Tracker - Progressive Web Application</h3>
      <img src="" alt="" />
      <p>
        This is a Progressive Web Application which allows users to track
        expenses and deposits online and offline. Webpack and Webpack PWA
        manifest are used to create the manifest, and IndexedDB is used for the
        offline transactions when the MongoDB/Mongoose database is not
        available. This Budget Tracker can be accessed here{" "}
        <a href="https://ratcliffbudgettracker.herokuapp.com">
          Budget Tracker.
        </a>
        The GitHub Repository for this PWA can be accessed here{" "}
        <a href="https://github.com/Mindyratcliff/budgettracker">
          Budget Tracker Repo.
        </a>
      </p>
    </div>
  </div>
);

export default PortfolioPage;
