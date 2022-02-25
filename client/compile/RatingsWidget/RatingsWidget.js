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
      reviews: []
    };
    this.getReviews = this.getReviews.bind(this);
    this.updateSorting = this.updateSorting.bind(this);
  }

  componentDidMount () {
    this.getReviews();
  }


  getReviews() {
    const that = this;
    const productID = '64620';
    const count = 10;
    this.props.getReviews([`reviews?product_id=${productID}%26sort=${this.state.sortedBy}%26count=${count}`, ``, ''], function(data) {
      if (data.results){
        that.setState({
          reviews: data.results.results
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
    console.log('ratingswidget', reviews);
    return (
      <div className="ratings-and-reviews">
        <Ratings/>
        <Reviews reviews={reviews} updateSorting={this.updateSorting}/>
      </div>
    );
  }
}

RatingsWidget.propTypes = {
  getReviews: PropTypes.any
};

export default RatingsWidget;