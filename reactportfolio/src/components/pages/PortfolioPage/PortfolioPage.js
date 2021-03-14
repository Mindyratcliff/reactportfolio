import React from "react";
import "./portfoliopage.css";
import Nav from "../../Nav";

const PortfolioPage = () => (
  <div>
    <Nav/>
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
    <div class="row">
      <h3>MySQL Employee Management Tracker</h3>
      <img src="" alt="" />
      <p>
        This is a content management system using MySQL and Node. It uses the
        MySQL and Inquirer modules to dynamically update a MySQL schema which
        holds employee information. It has three tables with department, role,
        and employee data. The user can view, update, delete, and add to the
        schema with the command line. The repository for this application may be
        reviewed and forked here{" "}
        <a href="https://github.com/Mindyratcliff/EmployeeTracker">
          Employee Tracker.
        </a>
      </p>
    </div>
    <div class="row">
      <h3>Express Notetaker</h3>
      <img src="" alt="" />
      <p>
        This is an application that can be used to write, save, and delete
        notes. This application uses an Express backend and saves and retrieves
        note data from a JSON file. The application can be accessed here{""}
        <a href="https://ratcliffnotetaker.herokuapp.com"></a>
        The repository for this application may be reviewed and forked here{" "}
        <a href="https://github.com/Mindyratcliff/notetaker">Note Taker.</a>
      </p>
    </div>
    <div class="row">
      <h3>Burger Tracker</h3>
      <img src="" alt="" />
      <p>
        An app for burger tracking! This uses an ORM to update a MySQL schema
        and track burgers.My daughter designed the burger image for this application. 
        The application can be accessed here{""}
        <a href="https://agile-dusk-72385.herokuapp.com"></a>
        The repository for this application may be reviewed and forked here{" "}
        <a href="https://github.com/Mindyratcliff/Burger">Eat-Da-Burger.</a>
      </p>
    </div>
  </div>
);

export default PortfolioPage;
