import React from 'react';
import PropTypes from 'prop-types';

// the purpose of this component is to handle the sorting for the reviews
function ReviewsSorting (props) {
  return (
    <div className ="reviews-sorting">
      <label htmlFor="sorting-option">{props.numOfReviews} reviews, sorted by </label>
      <select name="sorting-option">
        <option value="relevance">relevant</option>
        <option value="helpfulness">helpful</option>
        <option value="newest">newest</option>
      </select>
    </div>
  );
}

ReviewsSorting.propTypes = {
  numOfReviews: PropTypes.any
};


export default ReviewsSorting;