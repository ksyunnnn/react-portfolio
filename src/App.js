import React, {Component} from "react";
import styled from "styled-components";

import logo from "./logo.svg";

import "./App.css";

// import Colors from "./variables/colors";

import Header from "./components/Header"
import HomeView from "./containers/HomeView"
import AboutView from "./containers/AboutView"
import WorkView from "./containers/WorkView"

import {HashRouter, Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";

const Colors = {
  black: '#111',
  white: '#fafafa',
};

const ClearFix = styled.div `
  clear: both;
`;

export const FlexWrapper = props => {
  const StyledRoot = styled.div `
    display: flex;
    justify-content: space-between;
    ${props.isWrap
    ? `
flex-wrap: wrap;
`
    : ``};
  `;
  return <StyledRoot>{props.children}</StyledRoot>;
};

export const Logo = props => {
  const RootContainer = styled.div `
    letter-spacing: 1.5px;
    display: inline;
  `;
  return <RootContainer className="logo">syunsukekobashi.me</RootContainer>;
};

export const Message = props => {
  return (<div style={props.withStyle}>
    <div className="subtitle">{props.subtitle}</div>
    <div className="title">
      {props.title}
      {props.children}
    </div>
  </div>);
};

// [TODO]ちかちかさせたい
// const FlickerView = (props) => {
//   renderView = () => {
//     let n = 0;
//     n++;
//     return <h1>renderView{n}</h1>
//   }
//   return (
//     <div>
//       {this.renderView()}
//     </div>
//   );
// }

// const Fontawesome = props => {
//   const Root = styled.i`
//     padding: 0 0.5rem;
//     font-size: inherit;
//   `;
//   return <Root className={props.value} />;
// };

export const Rotate = props => {
  const Content = props => {
    return (<div className={props.className} onClick={props.onClickContent}>
      {props.children}
    </div>);
  };
  const StyledContent = styled(Content)`
    margin: 20px 0;
    padding: 20px;
    display: inline-block;
    ${props.isRight
    ? `
      float: right;
    `
    : ``}
    ${props.isLink
      ? `
    :hover {
      cursor: pointer;
      ::before {
        display: none;
        content: "\f007";
        font-family: "Font Awesome 5 Solid";
      }
    }
    `
      : ``}
  `;
  return (<div>
    <StyledContent onClickContent={props.onClickRotate}>
      {props.children}
    </StyledContent>
    <ClearFix/>
  </div>);
};

export const Card = props => {
  const Root = styled.div `
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.5);
    background: white;
    color: black;
  `;
  return <Root>{props.children}</Root>;
};

export const ConsoleText = props => {
  const Root = styled.div `
      color: #33bd26;
  `;
  return (<Root className="console-container">
    <span id={props.id}>{props.default}</span>
    <div className="console-underscore" id="console">
      {" "}
      _
    </div>
  </Root>);
};

class Contents extends React.Component {
  Root = styled.main `
    height: 100vh;
    color: ${Colors.white};
    background: ${Colors.black};
    padding: 15vh 0;
    box-sizing: border-box;
  `;
  routes = [
    {
      path: "/",
      component: HomeView,
      label: "home"
    }, {
      path: "/about",
      component: AboutView,
      label: "about"
    }, {
      path: "/work",
      component: WorkView,
      label: "work"
    }
  ];
  render() {
    return (<this.Root className="content">
      <Switch>
        {
          this.routes.map(v => {
            return <Route exact="exact" path={v.path} component={v.component}/>;
          })
        }
      </Switch>
    </this.Root>);
  }
}

class App extends React.Component {
  render() {
    return (<div className="my-page">
      <Header/>
      <Contents/>
    </div>);
  }
}

export default App;
