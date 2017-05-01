import React, {Component} from 'react';
import logo from './logo.svg';
import Main from './components/main';
/* eslint-disable import/no-unassigned-import */
import './app.css';
/* eslint-enable */

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
          To get started, edit <code>src/app.js</code> and save to reload.
        </p>
        <Main {...this.props}/>
      </div>
    );
  }
}

export default App;
