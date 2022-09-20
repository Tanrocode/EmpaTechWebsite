import React from "react";
import SVGLogo from "../pictures/EmpaTech.png";
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
      <Link to="/">
        <img className="LOGOsize" src={`${SVGLogo}`} alt=""></img>
      </Link>
      <ul>
        <MenuItem name="TEAM" href="/team_page" />
        <MenuItem name="MISSION" href="/" />
        <MenuItem name="PROJECTS" href="/projects" />

      </ul>
    </nav>
  );
}

