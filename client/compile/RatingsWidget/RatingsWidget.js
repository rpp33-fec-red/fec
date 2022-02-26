import React from 'react';
import './ratings.scss';
import Reviews from './Reviews/Reviews.js';
import Ratings from './Ratings/Ratings.js';
<<<<<<< HEAD:client/compile/RatingsWidget/components/RatingsWidget.js
import reviewsData from '../sample_data.js';
import PropTypes from 'prop-types';
=======
import reviewsData from './sample_data.js';
>>>>>>> 526977b206bd75aa82f9ff922a92541aa035a75f:client/compile/RatingsWidget/RatingsWidget.js

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

RatingsWidget.propTypes = {
  getReviews: PropTypes.any
};


export default RatingsWidget;