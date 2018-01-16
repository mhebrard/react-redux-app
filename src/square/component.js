import React from 'react';
import PropTypes from 'prop-types';

class Square extends React.Component {
  render() {
    // Import variable from props
    const {color, handleClick} = this.props;
    // CSS for React
    const cssContainer = {
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer'
    };
    const cssInteract = {
      width: '100px',
      height: '100px',
      backgroundColor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    // Template
    return (
      <div style={cssContainer}>
        <div style={cssInteract} onClick={handleClick}>
          Click Me !
          <br/>
          {color}
        </div>
      </div>
    );
  }
}

export default Square;

Square.propTypes = {
  color: PropTypes.string,
  handleClick: PropTypes.func
};

Square.defaultProps = {
  color: '#000',
  handleClick: () => {
    console.log('click');
  }
};
