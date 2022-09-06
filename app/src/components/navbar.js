import React from "react";
import SVGLogo from "../pictures/logo.png";
import GITLogo from "../pictures/git-logo.png";
import "../styles/image.scss";
import { Link } from "react-router-dom";

function MenuItem(props) {
  return (
    <li>
      <Link to={props.href}>{props.name}</Link>
    </li>
  );
}


export default function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <img className="LOGOsize" src={`${SVGLogo}`} alt=""></img>
        </Link>
        <MenuItem name="Team" href="/team_page" />
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
