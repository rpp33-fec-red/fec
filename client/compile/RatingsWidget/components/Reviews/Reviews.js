import React from 'react';
import ReviewsList from './ReviewsList.js';

// The purpose of this component is to hold the entirety of the reviews section.
function Reviews (props) {
  return (
    <div className ="reviews">
      <ReviewsList reviews={props.reviews}/>
      <div className ="reviews-buttons">
        <button>MORE REVIEWS</button>
        <button>ADD A REVIEW</button>
      </div>
    </div>
  );
}

export default Reviews;