import React from 'react';
import ReviewsList from './ReviewsList.js';
import PropTypes from 'prop-types';

// The purpose of this component is to hold the entirety of the reviews section.
function Reviews (props) {
  const reviews = props.reviews;
  return (
    <div className ="reviews">
      <ReviewsList filteredBy={props.filteredBy} reviews={reviews} updateSorting={props.updateSorting} reviewsCharacteristics={props.reviewsCharacteristics} product_id={props.product_id} />
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.any,
  updateSorting: PropTypes.any,
  reviewsCharacteristics: PropTypes.any,
  product_id: PropTypes.any,
  filteredBy: PropTypes.any
};


export default Reviews;