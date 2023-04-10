import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id='about'>
    <h2>About Me</h2>
    <p>At 28 Jeffrey moved to Medellin where he has been happily living for the past 3 years.</p>
    <img src= {image} alt ="I made this"></img>
  </div>
  )
}

export default About;
