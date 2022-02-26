import React from 'react';
import RatingsSummary from './RatingsSummary.js';
import RatingsBreakdown from './RatingsBreakdown.js';
import RatingsProductBreakdown from './RatingsProductBreakdown.js';

function Ratings() {
  return (
    <div className="ratings">
      <h4>Ratings &#38; Reviews</h4>
      <RatingsSummary/>
      <RatingsBreakdown/>
      <RatingsProductBreakdown/>
    </div>
  );
}

export default Ratings;