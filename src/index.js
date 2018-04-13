import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
  HashRouter,
  Switch,
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.querySelector('.app'));
registerServiceWorker();



// [TODO]Reactコンポーネントの中に入れたい
const consoleText = ( words, id, color='inherit' ) => {

  const console = document.getElementById('console');
  const textContainer = document.getElementById(id);

  const time = { display: 120, restart: 1000, return: 1000 };
  const timeToggle = 400;

  const letters = 1;


  let visible = true;

  let letterCount = 1;
  let x = letters;

  let waiting = false;

  textContainer.setAttribute('style', 'color:#33bd26;')

  window.setInterval(() => {

    let isRestart = (letterCount === 0 && waiting === false);
    let isDisplay = (waiting === false);
    let isReturn = (letterCount === words[0].length + 1 && waiting === false);

    if (isRestart) {

      waiting = true;
      textContainer.innerHTML = words[0].substring(0, letterCount)

      window.setTimeout(() => {

        words.push(words.shift());

        x = letters;
        letterCount += x;
        waiting = false;
      }, time.restart)

    } else if (isReturn) {

      waiting = true;

      window.setTimeout(() => {
        // x = -1*letters;
        letterCount += x;
        waiting = false;
      }, time.return)
    } else if (isDisplay) {

      textContainer.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;

    }
  }, time.display)


  window.setInterval(() => {
    if (visible === true) {
      console.className = 'console-underscore hidden'
      visible = false;

    } else {
      console.className = 'console-underscore'

      visible = true;
    }
  }, timeToggle)
}



consoleText([
  'This is syunsuke kobashi portfolio site.',
], 'home-msg');
