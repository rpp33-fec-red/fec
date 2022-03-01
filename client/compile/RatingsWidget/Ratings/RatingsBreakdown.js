import React from 'react';
import RatingsBreakdownBar from './RatingsBreakdownBar.js';
import PropTypes from 'prop-types';

function RatingsBreakdown (props) {
  const values = [1, 2, 3, 4, 5];
  const ratingsPercentage = props.ratingsPercentage || null;
  const ratingsCount = props.ratings || null;

  let filterMessage;
  let removeFilterMessage;
  if (Object.keys(props.filteredBy).length !== 0) {
    filterMessage = 'Filtered by:';
    for (const rating in props.filteredBy) {
      filterMessage += '' + rating + ' star ';
    }
    removeFilterMessage = 'Remove all filters';
  }
  return (
    <div className="ratings-breakdown">
      {values.map((value) => {
        return <RatingsBreakdownBar
          key={value}
          value={value}
          ratingPercentage={ratingsPercentage ? props.ratingsPercentage[value] : 0}
          reviewNumber={ratingsCount ? props.ratings[value] : 0}
          updateRatingFilter={props.updateRatingFilter} />;
      })}
      <div>{filterMessage}</div>
      <a onClick={props.removeRatingFilter}>{removeFilterMessage}</a>
    </div>
  );
}

RatingsBreakdown.propTypes = {
  ratingsPercentage: PropTypes.any,
  ratings: PropTypes.any,
  updateRatingFilter: PropTypes.any,
  filteredBy: PropTypes.any,
  removeRatingFilter: PropTypes.any
};

export default RatingsBreakdown;