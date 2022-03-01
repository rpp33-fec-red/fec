import React from 'react';
import RatingsBreakdownBar from './RatingsBreakdownBar.js';
import PropTypes from 'prop-types';

function RatingsBreakdown (props) {
  const values = [1, 2, 3, 4, 5];
  const ratingsPercentage = props.ratingsPercentage || null;
  return (
    <div className="ratings-breakdown">
      {values.map((value) => {
        return <RatingsBreakdownBar key={value} value={value} ratingPercentage={ratingsPercentage ? props.ratingsPercentage[value] : 0}/>;
      })}
    </div>
  );
}

RatingsBreakdown.propTypes = {
  ratingsPercentage: PropTypes.any
};

export default RatingsBreakdown;