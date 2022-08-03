import "../styles/intro.css";
import HomePic from "../pictures/HomePic.png";
import About from "./about.jsx";
import React, { Component } from "react";

export default function Intro() {
  return (
    <div>
        <div className="intro page" style={{ backgroundImage: `url(${HomePic})` }}>
            <span className="TextStyle intro  ">
                Illuminating Our Community, One Project at a Time
            </span>
            <span className="center  StartStyle">
                <button className="start">Learn More</button>
            </span>
        </div>
        <About/>
    </div>
  );
}
