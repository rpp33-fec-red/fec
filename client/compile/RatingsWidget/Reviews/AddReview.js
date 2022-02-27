import React from 'react';
import ReviewProductCharacteristics from './ReviewProductCharacteristics.js';
import PropTypes from 'prop-types';

function AddReview (props) {
  return (
    <div className="add-review">
      <form>
        <h2>Write Your Review</h2>
        <h3>About the [Product Name]</h3>

        <div>
          <label htmlFor="rating">Overall Rating: </label>
          <input name="rating" type="text" required="required"/>
        </div>

        <div>
          <label htmlFor="recommend" required="required">Do you recommend this product? </label>

          <label>Yes </label>
          <input name="recommend" type="radio"/>
          <label>No </label>
          <input name="recommend" type="radio"/>
        </div>

        <div>
          <label htmlFor="characteristics" required="required">Characteristics </label>
          <ReviewProductCharacteristics/>
        </div>

      </form>
    </div>
  );
}

AddReview.propTypes = {

};

export default AddReview;