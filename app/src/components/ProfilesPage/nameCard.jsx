import React, { Component } from 'react';

export default function nameCards(props) {
    return (
        <div>
                <img src='https://picsum.photos/200' alt=""/>
                <span>Description for { props.name }</span>       
        </div>
    );
}
 