import "../styles/intro.css";
import HomePic from "../pictures/HomePic.png";
import About from "./about.jsx";
import React, { Component, useRef } from "react";

export default function Intro() {

  const myRef = useRef(null);
  const scroll = () => myRef.current.scrollIntoView();

  return (
    <div>
      <div className="intro page" style={{ backgroundImage: `url(${HomePic})` }}>
        <span className="TextStyle intro  ">
          Illuminating Our Community, One Project at a Time
        </span>
        <span className="center  StartStyle">
          <button className="start" onClick={scroll}>Learn More</button>
        </span>
      </div>
      <div ref={myRef}>
        <About className="about" title="Who Are We?">EmpaTech is an organization which aims to nurture youth in the vast field of technology, via designing technologies for the benefit of the community.</About>
        <About className="QA" title="What Can We Provide?">We can get members experience building applications for the greater good. Get your service hours via programming! </About>
        <About className="another" title="What Do We Work On?"></About>
      </div>
    </div>
  );
}
