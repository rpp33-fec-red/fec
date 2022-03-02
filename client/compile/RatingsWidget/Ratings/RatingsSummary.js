import React from 'react';
import StarsComponent from '../../showStars.js';
import PropTypes from 'prop-types';

function RatingsSummary(props) {
  return (
    <div className="ratings-summary">
      <h2>3.5</h2>
      <StarsComponent product_id={props.product_id}/>
      <p>100% of the reviews recommend this product</p>
    </div>
  );
}

RatingsSummary.propTypes = {
  product_id: PropTypes.any
};

export default RatingsSummary;