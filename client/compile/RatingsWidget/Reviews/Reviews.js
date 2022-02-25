import React from 'react';
import ReviewsList from './ReviewsList.js';
import PropTypes from 'prop-types';

// The purpose of this component is to hold the entirety of the reviews section.
function Reviews (props) {
  const reviews = props.reviews;
  return (
    <div className ="reviews">
      <ReviewsList reviews={reviews} updateSorting={props.updateSorting}/>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.any,
  updateSorting: PropTypes.any
};


export default Reviews;