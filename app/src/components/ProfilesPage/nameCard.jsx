import React, { Component } from "react";
import Wrapper from "../Helpers/Wrapper";

export default function nameCards(props) {
  return (
    <Wrapper>
      <img src="https://picsum.photos/200" alt="" />
      <span>Description for {props.name}</span>
    </Wrapper>
  );
}
