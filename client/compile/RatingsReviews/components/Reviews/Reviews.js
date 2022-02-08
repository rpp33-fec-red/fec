import React from 'react';
import ReviewList from './ReviewsList.js'

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