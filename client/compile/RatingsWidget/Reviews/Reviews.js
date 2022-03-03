import React from 'react';
import ReviewsList from './ReviewsList.js';
import PropTypes from 'prop-types';

// The purpose of this component is to hold the entirety of the reviews section.
function Reviews (props) {
  const reviews = props.reviews;
  return (
    <div className ="reviews">
<<<<<<< HEAD
      <ReviewsList filteredBy={props.filteredBy} reviews={reviews} updateSorting={props.updateSorting} reviewsCharacteristics={props.reviewsCharacteristics} product_id={props.product_id} />
=======
      <ReviewsList reviews={reviews} updateSorting={props.updateSorting} reviewsCharacteristics={props.reviewsCharacteristics} product_id={props.product_id} />
>>>>>>> 5ccae30fc28aa14f0b30218cf0e268788af916ed
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.any,
  updateSorting: PropTypes.any,
  reviewsCharacteristics: PropTypes.any,
<<<<<<< HEAD
  product_id: PropTypes.any,
  filteredBy: PropTypes.any
=======
  product_id: PropTypes.any
>>>>>>> 5ccae30fc28aa14f0b30218cf0e268788af916ed
};


export default Reviews;