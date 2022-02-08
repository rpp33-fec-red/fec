import React from 'react';
import '../ratings.scss';
import ReviewsList from './Reviews/ReviewsList.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="ratings">
        ratings component
        <ReviewsList/>
      </div>
    )
  }
}

export default RatingsReviews;