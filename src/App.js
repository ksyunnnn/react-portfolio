import React, {Component} from "react";
import styled from "styled-components";

// import logo from "./logo.svg";

import "./App.css";
import {HashRouter, Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";

// import Colors from "./variables/colors";
//
// import Header from "./components/Header"
// import HomeView from "./containers/HomeView"
// import AboutView from "./containers/AboutView"
// import WorkView from "./containers/WorkView"



/**
  varriavle, config
**/
const Colors = {
  black: '#111',
  white: '#fafafa',
  gray: '#eee',
};

// 生成タイミングを、routes使用時にするために関数化
const GetRoutes = () => {
  return [
    { path: '/', component: HomeView, label: 'home' },
    { path: '/about', component: AboutView, label: 'about' },
    { path: '/work', component: WorkView, label: 'work' },
    { path: '/wip', component: WipView, label: 'wip' },
  ];
}

/**
  shaerd: 別コンポーネントに依存しない
**/
const ClearFix = styled.div`
  clear: both;
`;

const Code = styled.code`
  background: ${Colors.gray};
  margin: 0 .2rem;
  padding: 0 .3rem;
`;

const FlexWrapper = props => {
  const StyledRoot = styled.div`
    display: flex;
    justify-content: space-between;
    ${props.isWrap
      ? `
flex-wrap: wrap;
`
      : ``};
    ${props.isStart
          ? `
    justify-content: flex-start;
    `
          : ``};
  `;
  return <StyledRoot>{props.children}</StyledRoot>;
};

const Message = props => {
  const Title = styled.div`
    font-size: 1.5rem;
  `;
  return (
    <div style={props.withStyle}>
      <div className="subtitle">{props.subtitle}</div>
      <Title className="title">
        {props.title}
        {props.children}
      </Title>
    </div>
  );
};

const Fontawesome = props => {
  const Root = styled.i`
    padding: 0 0.5rem;
    font-size: inherit;
  `;
  return <Root className={props.value} />;
};

const Card = styled.div`
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.5);
    background: white;
    color: black;
  `;

const DefaultContainer = styled.div`
  width: 900px;
`;

/**
  component: 別コンポーネントと依存可
**/

// const ConsoleText = props => {
//   const Root = styled.div`
//     background: ${Colors.black};
//     padding: 20px;
//     font-family: 'Monaco';
//     display: inline;
//   `;
//   return (
//     <Root className="console-container">
//       <span id={props.id}>{props.default}</span>
//       <div className="console-underscore" id="console">
//         {' '}
//         _
//       </div>
//     </Root>
//   );
// };

const Navigation = props => {
  const StyledList = styled.li`
    display: inline-block;
    padding: 0 10px;
    :not(:last-child) {
      margin-right: 20px;
    }
    :hover {
      box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.5);
    }
  `;

  return (
    <ul className="navigation">
      {GetRoutes().map((v,i) => {
        return (
          <StyledList key={i}>
            <Link to={v.path}>{v.label}</Link>
          </StyledList>
        );
      })}
      <Link target="_blank" to="https://github.com/ksyunnnn/react-portfolio"><Fontawesome value="fas fa-code" /></Link>
    </ul>
  );
};

const Logo = props => {
  const RootContainer = styled.div`
    letter-spacing: 1.5px;
    display: inline;
  `;
  return <RootContainer className="logo">syunsukekobashi.me</RootContainer>;
};

const Header = () => {
  const Root = styled.div`
    z-index: 10;
    position: fixed;
    width: 100%;
    height: 50px;
    background: ${Colors.white};
    color: ${Colors.black};
    padding: 0px 80px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
  `;
  const Shadow = styled.div`
    padding: 0 10px;
    :hover {box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.5);}
  `;
  return (
    <Root className="header">
      <Shadow>
        <Link to="/">
          <Logo />
        </Link>
      </Shadow>
      <Navigation />
    </Root>
  );
};

const Contents = () => {
  const Root = styled.main`
    min-height: 100vh;
    color: ${Colors.black};
    background: ${Colors.white};
    padding: 90px 116px;
    box-sizing: border-box;
  `;
    return (
      <Root className="content">
        <Switch>
          {GetRoutes().map((v,i) => {
            return <Route key={i} exact path={v.path} component={v.component} />;
          })}
        </Switch>
      </Root>
    );
}

/**
  HomeView
**/
const Menu = props => {
  const Root = styled.div`
  `;
  const Content = props => {
    return (
      <Link to={props.path} className={props.className} onClick={props.onClickContent}>
        {props.children}<Fontawesome value="fas fa-angle-right" />
      </Link>
    );
  };
  const StyledContent = styled(Content)`
    margin: 20px 0;
    padding: 20px;
    display: inline-block;
    :hover {box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.5);}
    ${props.isRight
      ? `
    float: right;
    `
      : `
    `} ${props.isLink
      ? `
    :hover {
      cursor: pointer;
    }
    `
      : ``};
  `;
  return (
    <Root>
      <StyledContent path={props.path} onClickContent={props.onClickRotate}>
        {props.children}
      </StyledContent>
      <ClearFix />
    </Root>
  );
};

const HomeView = () => {
  const HomeContainer = DefaultContainer.extend``;
  const MenuContainer = styled.div`
    width: 40%;
  `;
  const MessageContainer = styled.div`
    padding-bottom: 80px;
  `;
  const MenuValue = () => {
    let values = GetRoutes();
    values[0].label = <Logo />;

    return values;
  }
  return (
    <HomeContainer className="container">
      <MessageContainer>
        <Message subtitle="Hello, World.">
          This is syunsuke kobashi portfolio site.
        </Message>
      </MessageContainer>

      <FlexWrapper isWrap>
        <MenuContainer>
          {MenuValue().map((v,i)=>{
            if( i % 2 == 0 ) {
              return <Menu key={i} path={v.path}>{v.label}</Menu>
            }
            return <Menu key={i} path={v.path} isRight>{v.label}</Menu>
          })}
        </MenuContainer>

        <div style={{ width: '40%', paddingTop: '60px' }}>
          <img
            style={{ width: '100%' }}
            src="./top.png"
          />
        </div>
      </FlexWrapper>
    </HomeContainer>
  );
};


const AboutView = () => {
  const AboutContainer = DefaultContainer.extend``;
  const MessageContainer = styled.div`
    padding-bottom: 40px;
  `;
  const ProfileContainer = styled.div`
    padding: 20px;
  `;
  const ProfileCard = Card.extend`
    display: inline-block;
    padding: 20px;
  `;
  const TitleName = styled.div`
    font-size: 5rem;
    letter-spacing: 8px;
    margin-bottom: 40px;
  `;
  const DescriptionList = styled.dl`
    font-size: 1.8rem;
    line-height: 2em;
    letter-spacing: 8px;
  `;
  const Term = styled.dt`
    margin-right: 80px;
  `;
  const Description = styled.dd``;
  return (
    <AboutContainer className="container">
      <MessageContainer>
        <Message subtitle="This is about me." title="About me" />
      </MessageContainer>

      <ProfileContainer>
        <ProfileCard>
          <TitleName>SYUNSUKE KOBASHI</TitleName>

          <DescriptionList>
            {[
              {
                term: '名前',
                desc: '小橋俊介(コバシ シュンスケ)',
              },
              {
                term: '誕生日',
                desc: '1992/02/23',
              },
              {
                term: '職業',
                desc: 'フリーランス',
              },
            ].map((v,i)=>{
              return (
                <FlexWrapper key={i}>
                  <Term>{v.term}</Term>
                  <Description>{v.desc}</Description>
                </FlexWrapper>
              );
            })}
          </DescriptionList>

        </ProfileCard>
        <br/><br/><br/><br/>
        <ProfileCard>
          <TitleName>Social Account</TitleName>

          <DescriptionList>
            {[
              {
                term: <a href="https://twitter.com/ksyunnnn" target="_blank">Twitter</a>,
                desc:  <a href="https://twitter.com/ksyunnnn" target="_blank"><i className="fab fa-twitter-square"></i></a>,
              },
              {
                term: <a href="https://www.facebook.com/ksyunnnn" target="_blank">Facebook</a>,
                desc:  <a href="https://www.facebook.com/ksyunnnn" target="_blank"><i className="fab fa-facebook-square"></i></a>,
              },
              {
                term: <a href="https://medium.com/syunsukekobashi" target="_blank">Medium</a>,
                desc:  <a href="https://medium.com/syunsukekobashi" target="_blank"><i className="fab fa-medium"></i></a>,
              },
              {
                term: <a href="https://github.com/ksyunnnn" target="_blank">Github</a>,
                desc:  <a href="https://github.com/ksyunnnn" target="_blank"><i className="fab fa-github-square"></i></a>,
              },
            ].map((v,i)=>{
              return (
                <FlexWrapper key={i}>
                  <Term>{v.term}</Term>
                  <Description>{v.desc}</Description>
                </FlexWrapper>
              );
            })}
          </DescriptionList>

        </ProfileCard>
      </ProfileContainer>
    </AboutContainer>
  );
};

const WorkView = () => {
  const WorkContainer = DefaultContainer.extend``;
  const MessageContainer = styled.div`
    padding-bottom: 80px;
  `;
  const WorksContainer = styled.div``;

  const Work = props => {
    const Root = styled.div`
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
  return (
    <WorkContainer className="container">
      <MessageContainer>
        <Message
          subtitle="My work is"
          title="Web Developer and Software Engineer in Tokyo."
          />
      </MessageContainer>

      <WorksContainer>
        <Work skills="React, react-router, styled-components">
          I published{' '}
          <a href="http://syunsukekobashi.me/" target="_blank">
            syunsukekobashi.me
          </a>{' '}
          at April, 2018.
        </Work>

        <Work skills="React, react-router, redux, styled-components">
          I worked{' '}
          <a href="http://syunsukekobashi.me/" target="_blank">
            https://monooq.com/
          </a>{' '}
          from December, 2017.
        </Work>
      </WorksContainer>
    </WorkContainer>
  );
};

const WipView = () => {
  const WipContainer = DefaultContainer.extend``;
  const MessageContainer = styled.div`
    padding-bottom: 80px;
  `;
  const TodoContainer = styled.div``;
  const Todo = styled.li`
    line-height: 50px;
  `;
  return(
    <WipContainer>
      <MessageContainer>
        <Message subtitle="Work in progress.">
          このサイトについて実行したいこと<i className="em em-pick"></i>
        </Message>
      </MessageContainer>

      <TodoContainer>
        {[
          {
            id: '01',
            title: 'デザインのAtomic化',
            description: <span>リファクタリングと一緒にやりたい<i className="em em-woman-gesturing-ok"></i></span>,
          },
          {
            id: '02',
            title: <span>Sketchによるしっかりめデザイン<i className="em em-art"></i></span>,
            description: 'デザインデータの公開とかしたい',
          },
          {
            id: '03',
            title: <span>Reduxによるデータベース連携</span>,
            description: 'firebaseを利用して、データの登録/取得をReduxのActionを通してできるようにしたい',
          },
          {
            id: '04',
            title: <span>Routingを、すべて設定から参照する</span>,
            description: <span><Code>routes</Code>を<Code>path: '/', component: Home, getPath()=>this.path</Code>にすればいいのかな<i className="em em-thinking_face"></i></span>,
          },
        ].map((v,i)=>{
          return(
            <Todo key={i}>
              {v.title}
              <small>{v.description}</small>
            </Todo>
          );
        })}
      </TodoContainer>


    </WipContainer>
  );
}

const Sidebar = (props) => {
  let Root = (props) => {
    return (
      <div className={props.className} onClick={props.onClickSidebar}>
        {props.children}
      </div>
    );
  }
  Root = styled(Root)`
    z-index: 0;
    position: absolute;
    padding-top: 50px;
    left: 50px;
    width: 2rem;
    text-align: center;
    margin-right: 2rem;
    height: 90vh;
    line-height: 90vh;
    box-sizing: border-box;
    :hover {
      cursor: pointer;
      box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.5);
    }
  `;
  return (
    <Root onClickSidebar={props.onClickSidebar}>
      {props.children}
    </Root>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    // const userId = this.props.match.params.user_id;
  }
  Root = styled.div`
    border: 0;
    font-family: "Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    font-size: 18px;
  `;
  checkLocation (values) {
    const location = window.location.pathname;
    const check = values.filter(v=>{
      return location.match(v);
    })

    if(check.length){
      return (
        <Sidebar
          onClickSidebar={()=>window.history.back()}
          >
          <i className="fas fa-angle-double-left"></i>
        </Sidebar>
      );
    }else {
      console.log('no result!');
    }
    return false;
  }
  render() {
    return (
      <this.Root className="my-page">
        <Header />
        {this.checkLocation(['about', 'work', 'wip'])}
        <Contents />
      </this.Root>
    );
  }
}

export default App;
