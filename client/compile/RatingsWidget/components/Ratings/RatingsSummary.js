import React from 'react';

function RatingsSummary(props) {
  return (
    <div className="ratings-summary">
      <h2>3.5</h2>
      <p className="star-rating">* * * * *</p>
      <p>100% of the reviews recommend this product</p>
    </div>
  );
}

export default RatingsSummary;