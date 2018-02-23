import React from 'react';
import PropTypes from 'prop-types';
import {Entity, Scene} from 'aframe-react';
/* eslint-disable import/no-unassigned-import */
import 'aframe';
import 'aframe-animation-component';
/* eslint-enable */

class Aframe extends React.Component {
  render() {
    // Import variable from props
    const {color} = this.props;
    // Scene cursor: trigger event from both Gaze and Mouse
    // Need an explicit camera entity to add the gaze
    return (
      <Scene cursor="rayOrigin: mouse">
        <Entity
          primitive="a-box"
          color={color}
          position="0 4 -5"
          rotation="45 45 45"
          animation__rotate="property: rotation; to: 405 405 405; dur: 3000; startEvents: click"
        />

        <Entity id="camera" primitive="a-camera" position="0 0 0">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

export default Aframe;

Aframe.propTypes = {
  color: PropTypes.string
};

Aframe.defaultProps = {
  color: '#800080'
};
