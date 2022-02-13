import React from 'react';

function ReviewTile (props) {
  return (
    <div className="review=tile">
        <p className="star-rating">* * * * *</p>
        <h4 className="review-summary">{props.review.summary}</h4>
        <h4 className="date-of-review">{props.review.date}</h4>
        <h4 className="reviewer-name">{props.review.reviewer_name}</h4>
        <p className="review-body">{props.review.body}</p>
        <div className="review-helpfulness-voting">
          <p>Helpful? <a> Yes</a> ({props.review.helpfulness})</p>
        </div>
    </div>
  );
}

export default ReviewTile;