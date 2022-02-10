import React from 'react';

function ReviewTile (props) {
  return (
    <div className="review=tile">
        <p className="star-rating">* * * * *</p>
        <h3>Review Title...</h3>
        <h4 className="date-of-review">Month DD, YYYY</h4>
        <h4 className="review-summary">This is where the review summary would go</h4>
        <p className="review-body">This is where the review body would go</p>
        <div className="review-helpfulness-voting">
          <p>Helpful? <a> Yes</a> (#)</p>
        </div>
    </div>
  );
}

export default ReviewTile;