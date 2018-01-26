import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    // Import properties
    const {items, handleNext, handlePrevious, handleRequest} = this.props;
    // CSS Style for React
    const cssDiv = {
      textAlign: 'left',
      display: 'inline-block'
    };
    // Template
    return (
      <div style={cssDiv}>
        <button type="button" onClick={handleRequest}>
          Request
        </button>
        <ul>
          {items.map(item => {
            return (
              <li key={item.num}>
                {item.num}
                &nbsp; - &nbsp;
                {item.name}
              </li>
            );
          })}
        </ul>
        <button type="button" onClick={handlePrevious}>
          &lt; prev
        </button>
        <button type="button" onClick={handleNext}>
          next &gt;
        </button>
      </div>
    );
  }
}

export default Pokemon;

Pokemon.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    num: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired),
  handleNext: PropTypes.func,
  handlePrevious: PropTypes.func,
  handleRequest: PropTypes.func
};

Pokemon.defaultProps = {
  items: [
    {
      num: 0,
      name: 'initiate',
      url: ''
    }
  ],
  handleNext: () => {
    console.log('next');
  },
  handlePrevious: () => {
    console.log('prev');
  },
  handleRequest: () => {
    console.log('click');
  }
};
