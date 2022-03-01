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
      reviewsMetadata: {},
      recommendPercentage: 0,
      ratingsMetrics: {}
    };
    this.getReviews = this.getReviews.bind(this);
    this.updateSorting = this.updateSorting.bind(this);
    this.calculateRatingMetrics = this.calculateRatingMetrics.bind(this);
    this.getReviewsMetadata = this.getReviewsMetadata.bind(this);
    this.getRecommendedPercentage = this.getRecommendedPercentage.bind(this);
  }

  componentDidMount () {
    this.getReviews();
    this.getReviewsMetadata();
  }


  getReviews() {
    const that = this;
    const count = 10;
    this.props.getReviews([`reviews?product_id=${this.props.product_id}%26sort=${this.state.sortedBy}%26count=${count}`, ``, ''], function(data) {
      if (data.results){
        that.setState({
          reviews: data.results.results
        });
      }
    });
  }

  calculateRatingMetrics (ratings) {
    let weightedSum = 0;
    let count = 0;
    let ratingsPercentage = {};

    for (let val in ratings) {
      weightedSum += val * ratings[val];
      count += parseInt(ratings[val]);
    }

    for (let val in ratings) {
      ratingsPercentage[val] = (parseInt(ratings[val]) / count) * 100;
    }

    const averageRating = (Math.round((weightedSum/count) * 4) / 4).toFixed(2);

    const ratingsMetrics = {
      averageRating: averageRating,
      ratingsPercentage: ratingsPercentage
    };

    return ratingsMetrics;
  }

  getReviewsMetadata () {
    const that = this;
    this.props.getReviews([`reviews/meta?product_id=${this.props.product_id}`, ``, ''], function(data) {
      if (data.results){
        const ratingsMetrics = that.calculateRatingMetrics(data.results.ratings);
        const recommendedPercentage = that.getRecommendedPercentage(data.results.recommended);
        const averageRating = ratingsMetrics.averageRating;
        const ratingsPercentage = ratingsMetrics.ratingsPercentage;
        that.setState({
          reviewsMetadata: data.results,
          averageRating: averageRating,
          ratingsPercentage: ratingsPercentage,
          recommendedPercentage: recommendedPercentage
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

  getRecommendedPercentage (recommended) {
    let sum = 0;
    for (const value in recommended) {
      sum += parseInt(recommended[value]);
    }
    const recommendedPercentage = (parseInt(recommended[true]) / sum) * 100;
    return recommendedPercentage;
  }


  render () {
    const reviews = this.state.reviews;
    return (
      <div className="ratings-and-reviews">
        <Ratings averageRating={this.state.averageRating} ratingsPercentage={this.state.ratingsPercentage} product_id={this.props.product_id} recommendedPercentage={this.state.recommendedPercentage} />
        <Reviews product_id={this.props.product_id} reviews={reviews} updateSorting={this.updateSorting} reviewsCharacteristics={this.state.reviewsMetadata.characteristics}/>
      </div>
    );
  }
}

RatingsWidget.propTypes = {
  getReviews: PropTypes.func,
  product_id: PropTypes.number
};

export default RatingsWidget;