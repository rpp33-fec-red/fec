import React from 'react';
import RatingsBreakdownBar from './RatingsBreakdownBar.js';

function RatingsBreakdown() {
  const values = [1, 2, 3, 4, 5];
  return (
    <div className="ratings-breakdown">
      {values.map((value) => {
        return <RatingsBreakdownBar key={value} value={value}/>;
      })}
    </div>
  );
}

export default RatingsBreakdown;