import React from 'react';
import PropTypes from 'prop-types';

// the purpose of this component is to handle the sorting for the reviews
function ReviewsSorting (props) {
  return (
    <div className ="reviews-sorting">
      <label htmlFor="sorting-option">{props.numOfReviews} reviews, sorted by </label>
      <select onChange={props.updateSorting} name="sorting-option">
        <option value="relevant">relevance</option>
        <option value="helpful">helpfulness</option>
        <option value="newest">newest</option>
      </select>
    </div>
  );
}

ReviewsSorting.propTypes = {
  numOfReviews: PropTypes.any,
  updateSorting: PropTypes.any
};


export default ReviewsSorting;