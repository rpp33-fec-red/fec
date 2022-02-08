import React from 'react';
import ReviewTile from './ReviewTile.js'

// The purpose of this component is to display and filter the reviews based on user input.
function ReviewsList (props) {
  return (
    <div className ="reviews-list">
      <ReviewTile/>
      <button>More Reviews</button>
    </div>
  )
}

export default ReviewsList;