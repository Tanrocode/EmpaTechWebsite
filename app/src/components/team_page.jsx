import "../styles/team.scss";
import "../styles/intro.scss";
import HomePic from "../pictures/HomePic.png";
import Team from "./team.jsx"
import Wrapper from "./Helpers/Wrapper";


export default function Team_Page() {
    return (
      <Wrapper>
        <div className="team_page ">
          <div className="page team">
            <Team className="pic" className2="pic_1" style={{ backgroundImage: `url(${HomePic})` }}> This is Rishit</Team>
            <span className="center_team"> Team</span>
            <Team className="pic" className2="pic_1" style={{ backgroundImage: `url(${HomePic})` }}> This is Tanush</Team>
          </div>
        <div className="team_page ">
          <div className="page team_cont">
          <Team className="pic" className2="pic_1" style={{ backgroundImage: `url(${HomePic})` }}> This is Vishal</Team>
          <Team className="pic" className2="pic_1" style={{ backgroundImage: `url(${HomePic})` }}> This is Ryan</Team>
          </div>
  
        </div>
        <div className="team_page ">
          <div className="page team_cont2">
          <Team className="pic2" className2="pic_2" style={{ backgroundImage: `url(${HomePic})` }}> This is Sriram</Team>
          </div>
  
        </div>
  
        </div>
        
      </Wrapper>
    );
  }