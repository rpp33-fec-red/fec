import React from 'react';

function ReviewResponse (props) {
  return (
    <div className="review-response">
      <h4>Response from seller</h4>
      <p>{props.response}</p>
    </div>
  );
}

export default ReviewResponse;