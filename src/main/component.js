import React from 'react';
import {Route} from 'react-router-dom';
import Aframe from '../aframe';
import Menu from '../menu';
import Pokemon from '../pokemon';
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
        <Route path="/pokemon" component={Pokemon}/>
        <Route path="/aframe" component={Aframe}/>
      </div>
    );
  }
}

export default Main;
