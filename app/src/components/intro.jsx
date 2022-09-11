import "../styles/team.scss";
import "../styles/intro.scss";
import "../styles/main.scss";
import HomePic from "../pictures/HomePic.png";
import About from "./about.jsx";
import Wrapper from "./Helpers/Wrapper";
import React, { useRef } from "react";

export default function Intro() {
  const myRef = useRef(null);
  // const scroll = () => myRef.current.scrollIntoView();
  const ScrollToQA = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper>
      <div className="total_page">
        <div
          className="intro page"
          style={{ backgroundImage: `url(${HomePic})` }}
        >
          <span className="TextStyle intro  ">
            Illuminating Our Community, One Project at a Time
          </span>
          <span className="center  StartStyle">
            <button className="start" onClick={ScrollToQA}>
              Learn More
            </button>
          </span>
        </div>
        <div ref={myRef} className="card_page">
          <About className="about" title="Who Are We?" cover="about_cover">
            EmpaTech is an organization which aims to nurture youth in the vast
            field of technology, via designing technologies for the benefit of the
            community.
          </About>
          <About className="QA" title="What Can We Provide?" cover="QA_cover">
            We can get members experience building applications for the greater
            good. Get your service hours via programming!
          </About>
        </div>
      </div>
      
    </Wrapper>
  );
}
