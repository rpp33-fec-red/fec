import React from 'react';
import '../ratings.scss';
import Reviews from './Reviews/Reviews.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="ratings">
        ratings component
        <Reviews/>
      </div>
    )
  }
}

export default RatingsReviews;