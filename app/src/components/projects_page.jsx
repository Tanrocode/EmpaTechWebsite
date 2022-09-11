import "../styles/team.scss";
import "../styles/intro.scss";
import "../styles/projects.scss"
import Project from "./projects.jsx"
import Wrapper from "./Helpers/Wrapper";


export default function Projects_Page() {
    return (
      <Wrapper>
        <div className="projects_page total_projects_page">
          <div className="page project">
            <Project className="project1" title="First Project">This is the first project</Project>
            <Project className="project1" title="First Project">This is the first project</Project>
            <Project className="project1" title="First Project">This is the first project</Project>
          </div>
  
        </div>
        
      </Wrapper>
    );
  }