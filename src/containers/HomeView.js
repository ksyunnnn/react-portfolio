import React, {Component} from "react";
import styled from "styled-components";

import { Message, ConsoleText, FlexWrapper, Rotate, Logo } from "../App";

export default () => {
  const alertThisIsHere = v => {
    const currentTarget = v.target;
    const currentHtml = currentTarget.innerHTML;

    currentTarget.innerHTML = "This is here!";

    const returnHtml = () => {
      currentTarget.innerHTML = currentHtml;
    };
    setTimeout(v => {
      returnHtml();
    }, 1000);
  };
  const RotatesContainer = styled.div `
    width: 40%;
  `;
  const MessageContainer = styled.div `
    padding-bottom: 80px;
  `;
  return (<div className="container">
    <MessageContainer>
      <Message subtitle="Hello, World.">
        <ConsoleText id="home-msg" default="This is syunsuke kobashi portfolio site."/>
      </Message>
    </MessageContainer>

    <FlexWrapper isWrap="isWrap">
      <RotatesContainer>
        <Rotate isLink="isLink" onClickRotate={alertThisIsHere}>
          <Logo/>
        </Rotate>
        <Rotate isRight="isRight">about</Rotate>

        <Rotate>works</Rotate>
      </RotatesContainer>

      <div style={{
          width: "40%"
        }}>
        <img style={{
            width: "100%"
          }} src="http://placehold.jp/000/eee/400x400.png"/>
      </div>
    </FlexWrapper>
  </div>);
};
