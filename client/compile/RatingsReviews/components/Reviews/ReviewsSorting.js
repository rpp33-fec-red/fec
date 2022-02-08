import React from 'react';

// the purpose of this component is to handle the sorting for the reviews
function ReviewsSorting (props) {
  return (
    <div className ="reviews-sorting">
      <label for="sorting-option">238 reviews, sorted by </label>
      <select name="sorting-option">
        <option value="relevance">relevance</option>
        <option value="helpfulness">helpfuness</option>
        <option value="newest">newest</option>
      </select>
    </div>
  )
}

export default ReviewsSorting;