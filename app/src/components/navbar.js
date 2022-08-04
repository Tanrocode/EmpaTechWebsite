import React, { Component } from "react";
import SVGLogo from "../pictures/logo.png";
import GITLogo from "../pictures/git-logo.png";
import "../styles/image.css";
import { Link } from 'react-router-dom';

function MenuItem(props) {
  return (
    <li>
      <Link to={props.href}>{props.name}</ Link>
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
        <MenuItem name="Team" href="/team" />
        <MenuItem name="Projects" href="/projects" />
        <MenuItem name="Contact" href="/contact" />
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
