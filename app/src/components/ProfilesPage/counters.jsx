import React, { Component } from "react";
import Wrapper from "../Helpers/Wrapper";
import nameCards from "./nameCard";

class Counters extends React.Component {
  names = ["Tanush", "Rishit", "Vishal"];

  state = {};

  render() {
    return (
      <Wrapper>
        <nameCards name={this.names[0]}></nameCards>
        <nameCards name={this.names[1]}></nameCards>
        <nameCards name={this.names[2]}></nameCards>
      </Wrapper>
    );
  }
}

export default Counters;
