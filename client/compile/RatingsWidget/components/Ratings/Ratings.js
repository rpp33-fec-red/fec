import React from 'react';
import RatingsBreakdown from './RatingsBreakdown.js';
import RatingsProductBreakdown from './RatingsProductBreakdown.js';
import RatingsSummary from './RatingsSummary.js';

function Ratings(props) {
  return (
    <div className='ratings'>
      <RatingsSummary/>
      <RatingsBreakdown/>
      <RatingsProductBreakdown/>
    </div>
  );
}

export default Ratings;