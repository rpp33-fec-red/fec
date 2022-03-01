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
      filteredBy: {},
      reviews: [],
      reviewsMetadata: {},
      recommendPercentage: 0,
      ratingsMetrics: {}
    };
    this.getReviews = this.getReviews.bind(this);
    this.updateSorting = this.updateSorting.bind(this);
    this.getReviewsMetadata = this.getReviewsMetadata.bind(this);
    this.getRecommendedPercentage = this.getRecommendedPercentage.bind(this);
    this.updateRatingFilter = this.updateRatingFilter.bind(this);
    this.removeRatingFilter = this.removeRatingFilter.bind(this);
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

  getReviewsMetadata () {
    const that = this;
    this.props.getReviews([`reviews/meta?product_id=${this.props.product_id}`, ``, ''], function(data) {
      if (data.results){
        const recommendedPercentage = that.getRecommendedPercentage(data.results.recommended);
        that.setState({
          reviewsMetadata: data.results,
          recommendedPercentage: recommendedPercentage
        });
      }
    });
  }

  getRecommendedPercentage (recommended) {
    let sum = 0;
    for (const value in recommended) {
      sum += parseInt(recommended[value]);
    }
    const recommendedPercentage = Math.round((parseInt(recommended[true]) / sum) * 100);
    return recommendedPercentage;
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

  updateRatingFilter (event) {
    const rating = parseInt(event.target.id);
    let filteredBy = this.state.filteredBy;
    if (filteredBy[rating]) {
      delete filteredBy[rating];
    } else {
      filteredBy[rating] = true;
    }

    this.setState({
      filteredBy: filteredBy
    });
  }

  removeRatingFilter () {
    this.setState({
      filteredBy: {}
    });
  }

  render () {
    const reviews = this.state.reviews;
    return (
      <div className="ratings-and-reviews">
        <Ratings
          reviewsMetadata={this.state.reviewsMetadata}
          product_id={this.props.product_id}
          recommendedPercentage={this.state.recommendedPercentage}
          updateRatingFilter={this.updateRatingFilter}
          filteredBy={this.state.filteredBy}
          removeRatingFilter={this.removeRatingFilter}/>
        <Reviews
          product_id={this.props.product_id}
          reviews={reviews}
          updateSorting={this.updateSorting}
          reviewsCharacteristics={this.state.reviewsMetadata.characteristics}
          filteredBy={this.state.filteredBy}/>
      </div>
    );
  }
}

RatingsWidget.propTypes = {
  getReviews: PropTypes.func,
  product_id: PropTypes.number
};

export default RatingsWidget;