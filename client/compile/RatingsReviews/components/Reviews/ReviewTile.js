import React from 'react';

function ReviewTile () {
  return (
    <div className="review=tile">
        <div className="star-rating">* * * * *</div>
        <h3>Review Title...</h3>
        <h4 className="date-of-review">Month DD, YYYY</h4>
        <h4 className="review-summary">this is where the review summary would go</h4>
        <p className="review-body">this is where the review body would go</p>
        <div className="review-helpfulness-vote">
          <p>Helpful? <a> Yes</a> (#)</p>
        </div>
    </div>
  );
}

export default ReviewTile;