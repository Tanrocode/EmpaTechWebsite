import "../styles/about.scss";
import React from "react";

export default function About(props) {
  const className = "page " + props.className;
  return (
    <div>
      <div className={className}>
        <div className="align-card">
          <h1 className="title"> {props.title}</h1>
          <span>{props.children}</span>
        </div>
      </div>
    </div>
  );
}
