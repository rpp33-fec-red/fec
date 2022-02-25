import React from 'react';
import ReviewTile from './ReviewTile.js';
import ReviewsSorting from './ReviewsSorting.js';
import PropTypes from 'prop-types';

class ReviewsList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviewsDisplayed: []
    };
    this.updateReviewsDisplayed = this.updateReviewsDisplayed.bind(this);
  }

  componentDidUpdate(prevProps) {
    const previousProps = JSON.stringify(prevProps.reviews);
    const currentProps = JSON.stringify(this.props.reviews);
    if (previousProps !== currentProps) {
      if (this.props.reviews.length > 2) {
        const reviews = this.props.reviews.slice(0, 2);
        this.setState({
          reviewsDisplayed: reviews
        });
      } else {
        this.setState({
          reviewsDisplayed: this.props.reviews
        });
      }
    }
  }

  updateReviewsDisplayed () {
    const numberOfReviewsDisplayed = this.state.reviewsDisplayed.length;

    if (numberOfReviewsDisplayed < this.props.reviews.length) {
      const reviewsNotDisplayed = this.props.reviews.length - numberOfReviewsDisplayed;
      let updatedReviews;
      if (reviewsNotDisplayed === 1) {
        updatedReviews = this.props.reviews;
      } else {
        updatedReviews = this.props.reviews.slice(0, numberOfReviewsDisplayed + 2);
      }
      this.setState({
        reviewsDisplayed: updatedReviews
      });
    }
  }

  render () {

    let reviews;
    if (this.props.reviews.length < 2) {
      reviews = this.props.reviews;
    } else {
      reviews = this.state.reviewsDisplayed;
    }

    let moreReviewsButton;
    // shows more reviews button only when all reviews are not showing
    if (this.state.reviewsDisplayed.length !== this.props.reviews.length) {
      moreReviewsButton = <button onClick={this.updateReviewsDisplayed}>MORE REVIEWS</button>;
    }

    return (
      <>
        <ReviewsSorting numOfReviews={this.props.reviews.length} updateSorting={this.props.updateSorting}/>

        <div className ="reviews-list">
          {reviews.map((review) => {
            return <ReviewTile key={review.review_id} review={review}/>;
          })}
        </div>

        <div className ="reviews-buttons">
          {moreReviewsButton}
          <button>ADD A REVIEW +< /button>
        </div>

      </>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.any,
  updateSorting: PropTypes.any
};


export default ReviewsList;