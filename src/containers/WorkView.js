import React, {Component} from "react";
import styled from "styled-components";

import { Message, Card } from "../App";

export default () => {
  const MessageContainer = styled.div `
    padding-bottom: 80px;
  `;
  const WorksContainer = styled.div ``;

  const Work = props => {
    const Root = styled.div `
      padding-left: 30px;
      letter-spacing: 1.1px;
      cursor: default;
      height: 50px;
      line-height: 50px;
      margin-bottom: 60px;
      ::after {
        display: inline-block;
        padding: 0px 10px;
        margin-left: 10px;
        font-size: 0.9rem;
        background: #000;
        color: #fff;
        border-radius: 5px;
        positon: absolute;
        top: -10px;
      }
      :hover::after {
        content: attr(data-skills);
      }
    `;
    return <Root data-skills={props.skills}>{props.children}</Root>;
  };
  return (<div className="container">
    <Card>
      <MessageContainer>
        <Message subtitle="My work is" title="Web Developer and Software Engineer in Tokyo."/>
      </MessageContainer>

      <WorksContainer>
        <Work skills="React, react-router, styled-components">
          I published{" "}
          <a href="http://syunsukekobashi.me/" target="_blank">
            syunsukekobashi.me
          </a>{" "}
          at April, 2018.
        </Work>

        <Work skills="React, react-router, redux, styled-components">
          I worked{" "}
          <a href="http://syunsukekobashi.me/" target="_blank">
            https://monooq.com/
          </a>{" "}
          from December, 2017.
        </Work>
      </WorksContainer>
    </Card>
  </div>);
};
