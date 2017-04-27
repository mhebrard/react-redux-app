import React, {Component} from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

class Main extends Component {
  render() {
    return (
      <div>
        <h2>
          <Link to="/">
            React Main Component
          </Link>
        </h2>
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element.isRequired
};

export default Main;
