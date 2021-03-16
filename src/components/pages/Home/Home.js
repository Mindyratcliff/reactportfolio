import React from "react";
import "./home.css";
import Nav from "../../Nav"



const Home = () => {
  return(
  <div id="landing">
   <img src="{`${process.env.PUBLIC_URL}/assets/Mindy Ratcliff-3.png`}" id="hero" alt="sun with the words Hi I'm Mindy"/>
   <h2>full-stack web developer</h2>
  </div>
  )};

export default Home;
