import React, { Component } from 'react';
import SVGLogo from '../pictures/logo.png';
function MenuItem(props) {
	return (
		<li>
			<a href={props.href}>
				{props.name}
			</a>
		</li>
	);
};
export default function Nav(){
     return (
        <nav>
            <ul >
                <img src={ `${SVGLogo}` } alt="" />
                <MenuItem name="Team" href="/"/>
                <MenuItem name="Mission" href="/"/>
                <MenuItem name="Projects" href="/" />
            </ul>
        </nav>
    );
}
 
