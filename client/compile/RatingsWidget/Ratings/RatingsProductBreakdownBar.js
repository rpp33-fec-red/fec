import React from 'react';
import {getCharacteristicsDescriptions} from '../helpers.js';
import PropTypes from 'prop-types';

function RatingsProductBreakdownBar (props) {
  const valueDescriptions = getCharacteristicsDescriptions(props.characteristic);
  return (
    <div className="ratings-product-breakdown-bar">
      <div>{props.characteristic}</div>
      <svg viewBox="0 0 100 5" xmlns="http://www.w3.org/2000/svg" style={{"fill": "grey", "pointerEvents": "none" }}>
        <rect width="100%" height="3"/>
        <polygon points="0,0 5,0 2.5,5" transform={`translate(${props.value * 20}, 0)`} style={{"fill": "black", "pointerEvents": "none", "zIndex": "1"}} />
      </svg>
      <div>{valueDescriptions[1]}</div>
      <div>{valueDescriptions[5]}</div>
    </div>
  );
}

RatingsProductBreakdownBar.propTypes = {
  value: PropTypes.any,
  characteristic: PropTypes.any
};

export default RatingsProductBreakdownBar;