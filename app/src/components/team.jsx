import "../styles/team.scss";
import Wrapper from "./Helpers/Wrapper";
import {useState} from 'react';

export default function Team(props) {
    const [isHovering, setIsHovering] = useState(false);
    const className=props.className;
    const className2=props.className2;
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };
    return (
      <Wrapper>
        <div className={className} >
            <div className={className2} style={props.style} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              {isHovering && <div className="abt_person">
                  <h1>{props.children}</h1>
                </div>}
            </div>
          </div>
      </Wrapper>
    );
  }
  