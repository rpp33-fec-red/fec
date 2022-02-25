import React from 'react';
import './ratings.scss';
import Reviews from './Reviews/Reviews.js';
import Ratings from './Ratings/Ratings.js';
import PropTypes from 'prop-types';

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
      reviews: []
    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount () {
    this.getReviews((reviews) => {
      this.setState({
        reviews: reviews
      });
    });
  }


  getReviews(callback) {
    const productID = '64621';
    this.props.getReviews([`reviews?product_id=${productID}%26sort=${this.state.sortedBy}`, ``, ''], function(data) {
      if (data.results){
        callback(data.results.results);
      }
    });
  }


  render () {
    const reviews = this.state.reviews;
    return (
      <div className="ratings-and-reviews">
        <Ratings/>
        <Reviews reviews={reviews} />
      </div>
    );
  }
}

RatingsWidget.propTypes = {
  getReviews: PropTypes.any
};

export default RatingsWidget;