import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import SVGLogo from '../pictures/empatechLogo.svg';
import "../App.css";
class NavigationBar extends React.Component {
    render() { 
        return (
            <Container>
                <Navbar className='NavigBar'>                   
                    <Navbar.Brand className="NavLogo">
                        <img
                        src={ `${SVGLogo}` }
                        alt=""
                        />
                    </Navbar.Brand>
                    <Nav className="Nav-Icons" >
                        <Nav.Link >Team</Nav.Link>
                        <Nav.Link >Mission</Nav.Link>
                        <Nav.Link >Projects</Nav.Link>
                    </Nav>
                    
                </Navbar>
            </Container>
        );
    }
}
 
export default NavigationBar;