import React from 'react';
import ReviewList from './ReviewsList.js';
import ReviewsSorting from './ReviewsSorting.js';
import AddReview from './AddReview.js';

// The purpose of this component is to hold the entirety of the reviews section.
function Reviews () {
  return (
    <div>
      <h1>Reviews</h1>
      <ReviewsSorting/>
      <ReviewList/>
      <AddReview/>
    </div>
  )
}

export default Reviews;