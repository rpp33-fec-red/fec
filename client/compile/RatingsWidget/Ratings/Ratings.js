import React from 'react';
import RatingsSummary from './RatingsSummary.js';
import RatingsBreakdown from './RatingsBreakdown.js';
import RatingsProductBreakdown from './RatingsProductBreakdown.js';
import PropTypes from 'prop-types';

function Ratings (props) {
  return (
    <div className="ratings">
      <h4>Ratings &#38; Reviews</h4>
      <RatingsSummary product_id={props.product_id}/>
      <RatingsBreakdown/>
      <RatingsProductBreakdown/>
    </div>
  );
}

Ratings.propTypes = {
  product_id: PropTypes.any
};

export default Ratings;