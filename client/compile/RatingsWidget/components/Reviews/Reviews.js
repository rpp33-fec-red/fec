import React from 'react';
import ReviewsList from './ReviewsList.js';
import AddReview from './AddReview.js';

// The purpose of this component is to hold the entirety of the reviews section.
function Reviews (props) {
  return (
    <div>
      <h1>Reviews</h1>
      <ReviewsList reviews={props.reviews}/>
      <AddReview/>
    </div>
  );
}

export default Reviews;