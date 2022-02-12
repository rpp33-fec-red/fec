import React from 'react';
import '../ratings.scss';
import Reviews from './Reviews/Reviews.js';
import Ratings from './Ratings/Ratings.js';

class RatingsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedBy: 'relevance',
      filteredBy: {
        oneStar: false,
        twoStar: false,
        threeStar: false,
        fourStar: false,
        fiveStar: false,
      },
      reviewsDisplayed: []
    }
  }

  render () {
    return (
      <div className="ratings-and-reviews">
        <Reviews reviewsDisplayed={this.props.reviewsDisplayed}/>
        <Ratings/>
      </div>
    );
  }
}

export default RatingsWidget;