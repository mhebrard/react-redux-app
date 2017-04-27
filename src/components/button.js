import React, {Component} from 'react';
import {Link} from 'react-router';

class Button extends Component {
  render() {
    return (
      <Link to="/todoapp">
        <button>
          Todo App
        </button>
      </Link>
    );
  }
}

export default Button;
