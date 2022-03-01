import React from 'react';
import RatingsSummary from './RatingsSummary.js';
import RatingsBreakdown from './RatingsBreakdown.js';
import RatingsProductBreakdown from './RatingsProductBreakdown.js';
import PropTypes from 'prop-types';

function Ratings (props) {

  const calculateRatingMetrics = (ratings) => {
    let weightedSum = 0;
    let count = 0;
    let ratingsPercentage = {};

    for (let val in ratings) {
      weightedSum += val * ratings[val];
      count += parseInt(ratings[val]);
    }

    for (let val in ratings) {
      ratingsPercentage[val] = (parseInt(ratings[val]) / count) * 100;
    }

    const averageRating = (Math.round((weightedSum/count) * 4) / 4).toFixed(2);

    const ratingsMetrics = {
      averageRating: averageRating,
      ratingsPercentage: ratingsPercentage
    };

    return ratingsMetrics;
  };

  const ratingsMetrics = calculateRatingMetrics(props.reviewsMetadata.ratings);
  const averageRating = ratingsMetrics.averageRating;
  const ratingsPercentage = ratingsMetrics.ratingsPercentage;

  return (
    <div className="ratings">
      <h4>Ratings &#38; Reviews</h4>
      <RatingsSummary product_id={props.product_id} averageRating={averageRating} recommendedPercentage={props.recommendedPercentage}/>
      <RatingsBreakdown ratingsPercentage={ratingsPercentage} ratings={props.reviewsMetadata.ratings} updateRatingFilter={props.updateRatingFilter} filteredBy={props.filteredBy} removeRatingFilter={props.removeRatingFilter}/>
      <RatingsProductBreakdown characteristics={props.reviewsMetadata.characteristics}/>
    </div>
  );
}

Ratings.propTypes = {
  product_id: PropTypes.number,
  reviewsMetadata: PropTypes.any,
  recommendedPercentage: PropTypes.any,
  updateRatingFilter: PropTypes.any,
  filteredBy: PropTypes.any,
  removeRatingFilter: PropTypes.any
};

export default Ratings;