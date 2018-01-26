import React from 'react';
import {Link} from 'react-router-dom';
/* eslint-disable import/no-unassigned-import */
import './style.css';
/* eslint-enable */

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/square">
              Square
            </Link>
          </li>
          <li>
            <Link to="/pokemon">
              Pokemon
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
