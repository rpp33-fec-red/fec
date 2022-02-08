import React from 'react';
import ReviewList from './ReviewsList.js'

// The purpose of this component is to hold the entirety of the reviews section.
function Reviews () {
  return (
    <div>
      <h1>Reviews</h1>
      <ReviewList/>
      <button>More Reviews</button>
      <button>Add a Review</button>
    </div>
  )
}

export default Reviews;