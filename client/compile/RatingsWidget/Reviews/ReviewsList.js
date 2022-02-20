import React from 'react';
import ReviewTile from './ReviewTile.js';
import ReviewsSorting from './ReviewsSorting.js';
import PropTypes from 'prop-types';

class ReviewsList extends React.Component {
  constructor (props) {
    super(props);

  }
  render () {
    return (
      <div className ="reviews-list">
        <ReviewsSorting/>
        {this.props.reviews.map((review) => {
          return <ReviewTile key={review.review_id} review={review}/>;
        })}
      </div>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.any
};


export default ReviewsList;