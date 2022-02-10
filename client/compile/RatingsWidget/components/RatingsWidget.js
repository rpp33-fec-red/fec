import React from 'react';
import '../ratings.scss';
import Reviews from './Reviews/Reviews.js';
import Ratings from './Ratings/Ratings.js';

class RatingsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsDisplayed: [],
    }
  }

  render () {
    return (
      <div className="ratings-and-reviews">
        <Reviews/>
        <Ratings/>
      </div>
    )
  }
}

export default RatingsWidget;