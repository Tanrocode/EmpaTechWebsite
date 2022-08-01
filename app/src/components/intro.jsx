import '../styles/intro.css'
import React, { Component, useRef } from 'react';
import HomePic from '../pictures/HomePic.png'
 
export default function Intro() {

    const ref = useRef(null);


    return (
            <div className="intro-page">
                <div>
                    <img src= { HomePic } alt='' className='HomePic'></img>
                    <h1 className='centered'>Illuminating Our Community, One Project at a Time</h1>
                    <span><a href="#"></a></span>             
                </div>
            </div>
    );

}
 