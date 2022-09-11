import "../styles/team.scss";
import Wrapper from "./Helpers/Wrapper";
import "../styles/projects.scss"
import {useState} from 'react';

export default function Project(props) {
    
    const className=props.className;
    const title=props.title;
    return (
      <Wrapper>
        <div className={className} >
            <h1 className="project-aligners">{title}</h1>
            <p className="project-aligners">{props.children}</p>
        </div>
      </Wrapper>
    );
  }
  