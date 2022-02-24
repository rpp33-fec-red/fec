import React from 'react';
import ReviewsList from './ReviewsList.js';
import PropTypes from 'prop-types';

// The purpose of this component is to hold the entirety of the reviews section.
function Reviews (props) {
  return (
    <div className ="reviews">
      <ReviewsList reviews={props.reviews}/>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.any
};


export default Reviews;