import React from 'react';
import createStarComponent from '../StarRatings.js';
import PropTypes from 'prop-types';

function RatingsSummary(props) {
  const averageRating = props.averageRating;
  const AverageStarRating = createStarComponent(averageRating);
  return (
    <div className="ratings-summary">
      <h2>{averageRating}</h2>
      <AverageStarRating/>
      <p>{props.recommendedPercentage}% of the reviews recommend this product</p>
    </div>
  );
}

RatingsSummary.propTypes = {
  product_id: PropTypes.any,
  averageRating: PropTypes.any,
  recommendedPercentage: PropTypes.any
};

export default RatingsSummary;