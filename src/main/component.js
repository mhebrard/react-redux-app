import React from 'react';
import {Route} from 'react-router-dom';
import Menu from '../menu';
import Square from '../square';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>
          My Main Wrapper
        </h1>
        <Menu/>
        <Route path="/square" component={Square}/>
      </div>
    );
  }
}

export default Main;
