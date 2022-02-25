import React from 'react';
import './ratings.scss';
import Reviews from './Reviews/Reviews.js';
import Ratings from './Ratings/Ratings.js';
import reviewsData from './sample_data.js';
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
    this.getData = this.getData.bind(this);
  }

  componentDidMount () {
    this.getData();
  }


  getData() {
    const productID = '64620';
    this.props.getReviews([`reviews?product_id=${productID}`, '', ''], function(data) {
      if (data.results){
        this.setState({
          reviews: data.results
        });
      }
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