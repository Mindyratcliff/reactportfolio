import React from "react";
import SocialCard from "../../SocialCard"
import Form from "../../Form";
import "./contact.css";

const Contact = () => (
  <div class="container">
    <h1>Contact Me</h1>
    <div class="row">
      <div class="col-6">
    <SocialCard/>
    </div>
    <div class="col-3">
    <Form/>
    </div>
    </div>
    
   
  </div>
);

export default Contact;
