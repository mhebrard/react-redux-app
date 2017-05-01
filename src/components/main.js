import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const Main = ({children}) => (
  <div>
    <h2>
      <Link to="/">
        React Main Component
      </Link>
    </h2>
    {React.cloneElement(children)}
  </div>
);

Main.propTypes = {
  children: PropTypes.element.isRequired
};

export default Main;
