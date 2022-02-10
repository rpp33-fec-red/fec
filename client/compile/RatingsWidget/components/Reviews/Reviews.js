import React from 'react';
import ReviewsList from './ReviewsList.js';
import AddReview from './AddReview.js';

// The purpose of this component is to hold the entirety of the reviews section.
function Reviews () {
  return (
    <div className="reviews">
      <h1>Reviews</h1>
      <ReviewsList/>
      <AddReview/>
      <button>More Reviews</button>
    </div>
  );
}

export default Reviews;