import React from 'react';
import createStarComponent from '../StarRatings.js';
import PropTypes from 'prop-types';

function RatingsSummary(props) {
  const averageRating = props.averageRating;
  const AverageStarRating = createStarComponent(averageRating);
  return (
    <div>
      <div className="ratings-summary">
        <h1>{averageRating}</h1>
        <AverageStarRating/>
      </div>
      <p id="percentage">{props.recommendedPercentage}% of the reviews recommend this product</p>
    </div>
  );
}

RatingsSummary.propTypes = {
  product_id: PropTypes.any,
  averageRating: PropTypes.any,
  recommendedPercentage: PropTypes.any
};

export default RatingsSummary;