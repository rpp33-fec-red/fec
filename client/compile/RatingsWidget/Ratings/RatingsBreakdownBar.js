import React from 'react';
import PropTypes from 'prop-types';

function RatingsBreakdownBar (props) {
  return (
    <div className="ratings-breakdown-bar" onClick={props.updateRatingFilter} id={props.value}>
      <div className="star-label">{props.value + ' stars'}</div>
      <svg viewBox="0 0 100 5" xmlns="http://www.w3.org/2000/svg" style={{"fill": "grey", "pointerEvents": "none" }}>
        <rect width="100%" height="5"/>
        <rect width={props.ratingPercentage || 0 + '%'} height="5" style={{"fill": "green", "zIndex": "1", "pointerEvents": "none" }} />
      </svg>
      <div className="review-number-label">{props.reviewNumber}</div>
    </div>
  );
}

RatingsBreakdownBar.propTypes = {
  value: PropTypes.any,
  ratingPercentage: PropTypes.any,
  reviewNumber: PropTypes.any,
  updateRatingFilter: PropTypes.any
};

export default RatingsBreakdownBar;