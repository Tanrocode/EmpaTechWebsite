import "../styles/about.scss";
import React from "react";
import Wrapper from "./Helpers/Wrapper";

export default function About(props) {
  const className = "page " + props.className;
  const cover= "page " + props.cover;
  return (
    <Wrapper>
      <div className={className}>
        <div className="align-card">
          <h1 className="title"> {props.title}</h1>
          <span className="content">{props.children}</span>
        </div>
      </div>
      <div className={cover}></div>
    </Wrapper>
  );
}
