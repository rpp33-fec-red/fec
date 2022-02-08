import React from 'react';
import ReviewTile from './ReviewTile.js'

function ReviewsList () {
  return (
    <div>
      <h1>ReviewsList</h1>
      <ReviewTile/>
      <button>More Reviews</button>
      <button>Add a Review</button>
    </div>
  )
}

export default ReviewsList;