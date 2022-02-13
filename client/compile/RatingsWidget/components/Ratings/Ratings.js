import React from 'react';
import RatingsSummary from './RatingsSummary.js';
import RatingsBreakdown from './RatingsBreakdown.js';
import RatingsProductBreakdown from './RatingsProductBreakdown.js';

function Ratings(props) {
  return (
    <div className="ratings">
      <RatingsSummary/>
      <RatingsBreakdown/>
      <RatingsProductBreakdown/>
    </div>
  );
}

export default Ratings;