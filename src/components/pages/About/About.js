import React from "react";
import "./about.css";

const About = () => (
  <div class="container">
    <h1 style={{color: "#8c52ff"}}>Get to know me</h1>
    <img
      src="https://raw.githubusercontent.com/Mindyratcliff/reactportfolio/gh-pages/build/assets/Mindy-2.jpg"
      id="headshot"
      alt="Website owner headshot"
    />
    <br></br>
    <div class="row">
      <div col="4"></div>
      <div col="4" id="aboutme">
        <p>
          I'm a mom, yoga teacher, runner, and avid video game player. I love
          spending time with my husband and kids, walking our tiny dog Chu. I
          enjoy sunshine and laughing. I teach Ashtanga yoga at{" "}
          <a href="http://www.ashtangayogacolumbus.com/" style={{color: "#8c52ff"}}>
            Ashtanga Yoga Columbus
          </a>{" "}
          when I'm not coding, and I'm grateful to have the support of my yoga
          community.
        </p>
        <p>
          I take my work, not myself, seriously. I have experience managing
          classrooms, working independently, and being busy since I worked as an
          English professor for nine years. Mountains of papers don't grade
          themselves, and no two students are the same. I'm adept at overcoming
          challenges, personally and professionally.
        </p>
        <p>
          I find coding very meditative, and I love creating. I'll always choose
          a relational database over a non-relational one, but I won't hold it
          against you if you disagree with me.{" "}
          <a href="mailto:mindy.ratcliff@gmail.com" style={{color: "#8c52ff"}}>Email me</a> if you would
          like to work together.
        </p>
      </div>
      <div col="4"></div>
    </div>
  </div>
);

export default About;
