import React from 'react';
import PropTypes from 'prop-types';

function ReviewResponse (props) {
  return (
    <div className="review-response">
      <h4>Response from seller</h4>
      <p>{props.response}</p>
    </div>
  );
}

ReviewResponse.propTypes = {
  response: PropTypes.any
};

export default ReviewResponse;