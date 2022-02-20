
import React from 'react';
import PropTypes from 'prop-types';

var StyleSelector = function (props) {

  console.log('url',props.url);
  return (
    <div className="styleSelector">
    </div>);


};

StyleSelector.propTypes = {
  url: PropTypes.any,
};

export default StyleSelector;