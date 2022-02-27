import React from 'react';
import PropTypes from 'prop-types';

function AddReview (props) {
  return (
    <div className="add-review">
      <form>
        <h2>Write Your Review</h2>
        <h3>About the [Product Name]</h3>

      </form>
    </div>
  );
}

AddReview.propTypes = {

};

export default AddReview;