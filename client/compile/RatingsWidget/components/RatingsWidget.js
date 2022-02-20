import React from 'react';
import '../ratings.scss';
import Reviews from './Reviews/Reviews.js';
import Ratings from './Ratings/Ratings.js';
import reviewsData from '../sample_data.js';

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
    this.getData = this.getData.bind(this);
  }


  componentDidMount () {
    this.getData();
  }


  getData () {
    var options = {
      sort: 'newest'
    };
    this.props.getReviews('GET', ['reviews', 64620, ''], options, (data) => {
      console.log('these are the reviews:', data);
    });
  }


  render () {
    return (
      <div className="ratings-and-reviews">
        <Ratings/>
        <Reviews reviews={reviewsData.results} />
      </div>
    );
  }
}

export default RatingsWidget;