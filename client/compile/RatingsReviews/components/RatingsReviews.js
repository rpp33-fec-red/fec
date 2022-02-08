import React from 'react';
import '../ratings.scss';
import ReviewsList from './Reviews/ReviewsList.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsDisplayed: [],
    }
  }

  render () {
    return (
      <div className="ratings-and-reviews">
        <ReviewsList/>
      </div>
    )
  }
}

export default RatingsReviews;