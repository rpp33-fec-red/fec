import React from 'react';
import RatingsProductBreakdownBar from './RatingsProductBreakdownBar.js';
import PropTypes from 'prop-types';

function RatingsProductBreakdown (props) {
  const characteristics = props.characteristics || {};
  console.log(characteristics)
  return (
    <div className="ratings-product-breakdown">
      {Object.keys(characteristics).map((characteristic) => {
        return <RatingsProductBreakdownBar characteristic={characteristic} key={characteristics[characteristic].id} value={characteristics[characteristic].value}/>;
      })}
    </div>
  );
}

RatingsProductBreakdown.propTypes = {
  characteristics: PropTypes.any
};

export default RatingsProductBreakdown;