import React from 'react';
import createStarComponent from '../StarRatings.js';
import PropTypes from 'prop-types';

function RatingsSummary(props) {
  const AverageStarRating = createStarComponent(props.averageRating);
  return (
    <div className="ratings-summary">
      <h2>{props.averageRating}</h2>
      <AverageStarRating/>
      <p>100% of the reviews recommend this product</p>
    </div>
  );
}

RatingsSummary.propTypes = {
  product_id: PropTypes.any,
  averageRating: PropTypes.any
};

export default RatingsSummary;