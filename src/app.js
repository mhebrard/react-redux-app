import React from 'react';
import logo from './logo.svg';
/* eslint-disable import/no-unassigned-import */
import './app.css';
/* eslint-enable */
import Main from './main';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo"/>
          <h1 className="app-title">
            Welcome to React
          </h1>
        </header>
        <p className="app-intro">
          To get started, edit&nbsp;
          <code>
          src/app.js
          </code>
          &nbsp;and save to reload.
        </p>
        <Main/>
      </div>
    );
  }
}

export default App;
