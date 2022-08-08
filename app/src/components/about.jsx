import "../styles/about.scss";
import React from "react";

export default function About(props) {
  const titleClass = "title " + props.title;
  const className = "page " + props.className;
  return (
    <div>
      <div className={className}>
        <div className="shadow">
          <h1 className={titleClass}> {props.title}</h1>
          <span>{props.children}</span>
        </div>
      </div>
    </div>
  );
}
