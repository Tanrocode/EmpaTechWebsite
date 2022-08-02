import '../styles/intro.css'
import HomePic from '../pictures/HomePic.png'
 
export default function Intro() {

        return (
            <div className="intro page" style={{backgroundImage:`url(${HomePic})` }}>
                    
                <span className="TextStyle intro  ">Illuminating Our Community, One Project at a Time</span>
                <span className="center  StartStyle"><button className="start">Learn More</button></span>
             
            </div>
        );

}
 