import React from 'react';
import RatingsSummary from './RatingsSummary.js';
import RatingsBreakdown from './RatingsBreakdown.js';
import RatingsProductBreakdown from './RatingsProductBreakdown.js';
import {calculateRatingMetrics} from '../helpers.js';
import PropTypes from 'prop-types';

function Ratings (props) {
  const ratingsMetrics = calculateRatingMetrics(props.reviewsMetadata.ratings);
  const averageRating = ratingsMetrics.averageRating;
  const ratingsPercentage = ratingsMetrics.ratingsPercentage;

  return (
    <div className="ratings">
      <h4>Ratings &#38; Reviews</h4>
      <RatingsSummary
        product_id={props.product_id}
        averageRating={averageRating}
        recommendedPercentage={props.recommendedPercentage}/>
      <RatingsBreakdown ratingsPercentage={ratingsPercentage}
        ratings={props.reviewsMetadata.ratings}
        updateRatingFilter={props.updateRatingFilter}
        filteredBy={props.filteredBy}
        removeRatingFilter={props.removeRatingFilter}/>
      <RatingsProductBreakdown
        characteristics={props.reviewsMetadata.characteristics}/>
    </div>
  );
}

Ratings.propTypes = {
  product_id: PropTypes.any,
  reviewsMetadata: PropTypes.any,
  recommendedPercentage: PropTypes.any,
  updateRatingFilter: PropTypes.any,
  filteredBy: PropTypes.any,
  removeRatingFilter: PropTypes.any
};

export default Ratings;