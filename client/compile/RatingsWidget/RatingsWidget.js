import React from 'react';
import './ratings.scss';
import Reviews from './Reviews/Reviews.js';
import Ratings from './Ratings/Ratings.js';
import PropTypes from 'prop-types';

class RatingsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedBy: 'relevant',
      filteredBy: {
        oneStar: false,
        twoStar: false,
        threeStar: false,
        fourStar: false,
        fiveStar: false,
      },
      reviews: [],
      reviewsMetadata: {}
    };
    this.getReviews = this.getReviews.bind(this);
    this.updateSorting = this.updateSorting.bind(this);
    this.getReviewsMetadata = this.getReviewsMetadata.bind(this);
  }

  componentDidMount () {
    this.getReviews();
    this.getReviewsMetadata();
  }


  getReviews() {
    const that = this;
    const count = 50;
    this.props.getReviews([`reviews?product_id=${this.props.product_id}%26sort=${this.state.sortedBy}%26count=${count}`, ``, ''], function(data) {
      if (data.results){
        that.setState({
          reviews: data.results.results
        });
      }
    });
  }

  getReviewsMetadata() {
    const that = this;
    this.props.getReviews([`reviews/meta?product_id=${this.props.product_id}`, ``, ''], function(data) {
      if (data.results){
        that.setState({
          reviewsMetadata: data.results
        });
      }
    });
  }


  updateSorting (event) {
    event.preventDefault();
    const sortedBy = event.target.value;
    this.setState({
      sortedBy: sortedBy
    }, () => {
      this.getReviews();
    });
  }


  render () {
    const reviews = this.state.reviews;
    return (
      <div className="ratings-and-reviews">
        <Ratings reviewsMetadata={this.state.reviewsMetadata} product_id={this.props.product_id}/>
        <Reviews product_id={this.props.product_id} reviews={reviews} updateSorting={this.updateSorting} reviewsCharacteristics={this.state.reviewsMetadata.characteristics}/>
      </div>
    );
  }
}

RatingsWidget.propTypes = {
  getReviews: PropTypes.any,
  product_id: PropTypes.any
};

export default RatingsWidget;