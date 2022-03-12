import React from 'react';
import RatingsBreakdownBar from './RatingsBreakdownBar.js';
import PropTypes from 'prop-types';

function RatingsBreakdown (props) {
  const values = [5, 4, 3, 2, 1];
  const ratingsPercentage = props.ratingsPercentage;
  const ratingsCount = props.ratings;

  // Updates filter message to show what filters are being applied
  // Adds remove filter message when filters are applied
  let filterMessage;
  let removeFilterMessage;
  if (Object.keys(props.filteredBy).length !== 0) {
    filterMessage = 'Filtered by: ';
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
          ratingPercentage={ratingsPercentage ? props.ratingsPercentage[value] : '0'}
          reviewNumber={ratingsCount ? props.ratings[value] : '0'}
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