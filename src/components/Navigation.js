import React, {Component} from "react";
import styled from "styled-components";

import routes from "../config/routes"

import {Link} from "react-router-dom";

export default props => {
  const StyledList = styled.li `
    display: inline-block;
    :not(:last-child) {
      margin-right: 10px;
    }
  `;
  return (<ul className="navigation">
    {
      routes.map(v => {
        return (<StyledList>
          <Link to={v.path}>{v.label}</Link>
        </StyledList>);
      })
    }
  </ul>);
};
