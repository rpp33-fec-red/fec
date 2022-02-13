import React from 'react';
import ReviewTile from './ReviewTile.js';
import ReviewsSorting from './ReviewsSorting.js';

// The purpose of this component is to display and filter the reviews based on user input.
function ReviewsList (props) {
  return (
    <div className ="reviews-list">
      <ReviewsSorting/>
      {props.reviews.map((review) => {
        return <ReviewTile key={review.review_id} review={review}/>
      })}
      <button>More Reviews</button>
    </div>
  );
}

export default ReviewsList;