import React from "react";
import SVGLogo from "../pictures/logo.png";
import GITLogo from "../pictures/git-logo.png";
import "../styles/image.scss";
function MenuItem(props) {
  return (
    <li>
      <a href={props.href}>{props.name}</a>
    </li>
  );
}

export default function Nav() {
  return (
    <nav>
      <ul>
        <a href="/">
          <img className="LOGOsize" src={`${SVGLogo}`} alt=""></img>
        </a>
        <MenuItem name="Team" href="/" />
        <MenuItem name="Mission" href="/" />
        <MenuItem name="Projects" href="/" />
        <a
          className="align"
          href="https://github.com/EmpaTechOrg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="GITsize" src={`${GITLogo}`} alt=""></img>
        </a>
      </ul>
    </nav>
  );
}
