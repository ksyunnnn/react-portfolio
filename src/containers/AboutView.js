import React, {Component} from "react";
import styled from "styled-components";

import { Message } from "../App";

export default () => {
  return (<div className="container">
    <Message subtitle="Hello, React." title="This is about view."/>
  </div>);
};
