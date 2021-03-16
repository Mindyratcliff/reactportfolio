import React from "react";
import "./portfoliopage.css";

function ProjectComponent() {
  return (
    <div>
      <div class="row">
        <h3 style={{ color: "#8c52ff" }}>Happy Trees</h3>
      </div>

      <div class="row">
        <img
          src="https://raw.githubusercontent.com/Mindyratcliff/reactportfolio/gh-pages/build/assets/dashboard-screenshot%20copy.png"
          alt="Happy Trees dashboard"
        />
      </div>
      <div class="row">
        <p>
          A drawing application which allows users to save drawings in a
          personal account using Passport JS. This uses PaperJS along with
          Sequelize to connect to a MySQL database. This was a group project
          completed with Abdinajib Liban, Kole Gasior, Simon Ziccardi, and
          Efraín González. I worked on the MySQL database, Sequelize, the
          front-end, logo, and wrote the ReadMe file. Happy Trees can be
          accessed here
          <a
            href="https://guarded-ravine-40907.herokuapp.com"
            style={{ color: "#8c52ff" }}
          >
            {" "}
            Happy Trees.{" "}
          </a>
          The GitHub Repository for Happy Trees can be accessed here
          <a
            href="https://github.com/Mindyratcliff/Project2"
            style={{ color: "#8c52ff" }}
          >
            Happy Trees Repo.
          </a>
        </p>
      </div>
      <div class="row">
        <h3 style={{ color: "#8c52ff" }}>CoronaDate</h3>
      </div>

      <div class="row">
        <img
          src="https://raw.githubusercontent.com/Mindyratcliff/reactportfolio/gh-pages/build/assets/coronadatescreenshot.jpg"
          alt="CoronaDate Screen shot"
        />
      </div>
      <div class="row">
        <p>
          This is a web application which allows users to search both The Covid
          Tracking Project and the Ticketmaster APIs so they can make an
          informed decision about attending events in their state. This was a
          group project completed with the assistance of Mengmei Tu, Juan Munoz,
          and Evan Robinson. I worked on the API call to Ticketmaster, made the
          hero image and logo, and wrote the ReadMe file. CoronaDate can be
          accessed here
          <a
            href="https://mmeii.github.io/project-1-corona-date/"
            style={{ color: "#8c52ff" }}
          >
            CoronaDate.
          </a>
          The GitHub Repository for CoronaDate can be accessed here
          <a
            href="https://github.com/mmeii/project-1-corona-date"
            style={{ color: "#8c52ff" }}
          >
            CoronaDate Repo.
          </a>
        </p>
      </div>
      <div class="row">
        <h3 style={{ color: "#8c52ff" }}>
          Budget Tracker - Progressive Web Application
        </h3>
      </div>

      <div class="row">
        <img src="https://raw.githubusercontent.com/Mindyratcliff/reactportfolio/gh-pages/build/assets/budgetapp.png" alt="Budget App Screen Shot" />
      </div>
      <div class="row">
        <p>
          This is a Progressive Web Application which allows users to track
          expenses and deposits online and offline. Webpack and Webpack PWA
          manifest are used to create the manifest, and IndexedDB is used for
          the offline transactions when the MongoDB/Mongoose database is not
          available. This Budget Tracker can be accessed here
          <a
            href="https://ratcliffbudgettracker.herokuapp.com"
            style={{ color: "#8c52ff" }}
          >
            Budget Tracker.
          </a>
          The GitHub Repository for this PWA can be accessed here
          <a
            href="https://github.com/Mindyratcliff/budgettracker"
            style={{ color: "#8c52ff" }}
          >
            Budget Tracker Repo.
          </a>
        </p>
      </div>
      <div class="row">
        <h3 style={{ color: "#8c52ff" }}>MySQL Employee Management Tracker</h3>
      </div>

      <div class="row">
        <img
          src="https://raw.githubusercontent.com/Mindyratcliff/reactportfolio/gh-pages/build/assets/ETscreenshot.png"
          alt="Employee Tracker Screen Shot"
        />
      </div>
      <div class="row">
        <p>
          This is a content management system using MySQL and Node. It uses the
          MySQL and Inquirer modules to dynamically update a MySQL schema which
          holds employee information. It has three tables with department, role,
          and employee data. The user can view, update, delete, and add to the
          schema with the command line. The repository for this application may
          be reviewed and forked here
          <a
            href="https://github.com/Mindyratcliff/EmployeeTracker"
            style={{ color: "#8c52ff" }}
          >
            Employee Tracker.
          </a>
        </p>
      </div>
      <div class="row">
        <h3 style={{ color: "#8c52ff" }}>Express Notetaker</h3>
      </div>

      <div class="row">
        <img
          src="https://github.com/Mindyratcliff/reactportfolio/blob/gh-pages/build/assets/screenshot.gif?raw=true"
          alt="Demo of Note Taker Application"
        />
      </div>
      <div class="row">
        <p>
          This is an application that can be used to write, save, and delete
          notes. This application uses an Express backend and saves and
          retrieves note data from a JSON file. The application can be accessed
          here
          <a
            href="https://ratcliffnotetaker.herokuapp.com"
            style={{ color: "#8c52ff" }}
          >
            {" "}
            Notetaker.
          </a>
          The repository for this application may be reviewed and forked here
          <a
            href="https://github.com/Mindyratcliff/notetaker"
            style={{ color: "#8c52ff" }}
          >
            {" "}
            Notetaker.
          </a>
        </p>
      </div>
      <div class="row">
        <h3 style={{ color: "#8c52ff" }}>Burger Tracker</h3>
      </div>

      <div class="row">
        <img
          src="https://raw.githubusercontent.com/Mindyratcliff/reactportfolio/gh-pages/build/assets/burgerScreenshot.jpg"
          alt="Burger App Screen Shot"
        />
      </div>
      <div class="row">
        <p>
          An app for burger tracking! This uses an ORM to update a MySQL schema
          and track burgers.My daughter designed the burger image for this
          application. The application can be accessed here
          <a
            href="https://agile-dusk-72385.herokuapp.com"
            style={{ color: "#8c52ff" }}
          >
            {" "}
            Eat-Da-Burger.{" "}
          </a>
          The repository for this application may be reviewed and forked here{" "}
          <a
            href="https://github.com/Mindyratcliff/Burger"
            style={{ color: "#8c52ff" }}
          >
            {" "}
            Eat-Da-Burger.
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectComponent;
