import React, {Component} from "react";
import styled from "styled-components";

// import { Colors } from 'variables';

import Navigation from "./Navigation"
import { Logo } from "../App";

import { Link } from "react-router-dom";

const Colors = {
  black: '#111',
  white: '#fafafa',
};

export default () => {
  const Root = styled.div `
    position: absolute;
    width: 100%;
    height: 50px;
    background: ${Colors.black};
    color: ${Colors.white};
    padding: 0px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
  `;
  return (<Root className="header">
    <Link to="/" style={{
        textDecoration: "none"
      }}>
      <Logo/>
    </Link>
    <Navigation/>
  </Root>);
};
