import React from 'react';
import '../ratings.scss';
import Reviews from './Reviews/Reviews.js';
import Ratings from './Ratings/Ratings.js';
import reviewsData from '../sample_data.js'

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
      }
    }
  }

  componentDidMount () {

  }



  render () {
    return (
      <div className="ratings-and-reviews">
        <h4>Ratings &#38; Reviews</h4>
        <Reviews reviews={reviewsData.results} />
        <Ratings/>
      </div>
    );
  }
}

export default RatingsWidget;