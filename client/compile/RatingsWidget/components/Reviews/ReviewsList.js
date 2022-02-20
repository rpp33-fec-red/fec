import React from 'react';
import ReviewTile from './ReviewTile.js';
import ReviewsSorting from './ReviewsSorting.js';
import PropTypes from 'prop-types';

// The purpose of this component is to display and filter the reviews based on user input.
function ReviewsList (props) {
  return (
    <div className ="reviews-list">
      <ReviewsSorting/>
      {props.reviews.map((review) => {
        return <ReviewTile key={review.review_id} review={review}/>;
      })}
    </div>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.any
};


export default ReviewsList;