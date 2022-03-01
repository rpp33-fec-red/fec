import React from 'react';
import ReviewTile from './ReviewTile.js';
import ReviewsSorting from './ReviewsSorting.js';
import AddReview from './AddReview.js';
import PropTypes from 'prop-types';

class ReviewsList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filteredReviews: [],
      reviewsDisplayed: [],
      addReviewDisplayed: false
    };
    this.updateReviewsDisplayed = this.updateReviewsDisplayed.bind(this);
    this.showAddReviewWindow = this.showAddReviewWindow.bind(this);
    this.closeAddReviewWindow = this.closeAddReviewWindow.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      let updatedReviews = [];
      if (Object.keys(this.props.filteredBy).length !== 0) {

        this.props.reviews.forEach((review) => {
          if (this.props.filteredBy[review.rating]) {
            updatedReviews.push(review);
          }
        });
      } else {
        updatedReviews = this.props.reviews;
      }

      if (updatedReviews.length > 2) {
        const reviews = updatedReviews.slice(0, 2);
        this.setState({
          reviewsDisplayed: reviews,
          filteredReviews: updatedReviews
        });
      } else {
        this.setState({
          reviewsDisplayed: updatedReviews,
          filteredReviews: updatedReviews
        });
      }
    }
  }

  updateReviewsDisplayed () {
    const numberOfReviewsDisplayed = this.state.reviewsDisplayed.length;

    if (numberOfReviewsDisplayed < this.state.filteredReviews.length) {
      const reviewsNotDisplayed = this.state.filteredReviews.length - numberOfReviewsDisplayed;
      let updatedReviews;
      if (reviewsNotDisplayed === 1) {
        updatedReviews = this.state.filteredReviews;
      } else {
        updatedReviews = this.state.filteredReviews.slice(0, numberOfReviewsDisplayed + 2);
      }
      this.setState({
        reviewsDisplayed: updatedReviews
      });
    }
  }

  showAddReviewWindow () {
    this.setState({
      addReviewDisplayed: true
    });
  }

  closeAddReviewWindow () {
    this.setState({
      addReviewDisplayed: false
    });
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

    let addReviewsWindow;
    if(this.state.addReviewDisplayed) {
      return <AddReview reviewsCharacteristics={this.props.reviewsCharacteristics} closeAddReviewWindow={this.closeAddReviewWindow} product_id={this.props.product_id}/>;
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
          <button onClick={this.showAddReviewWindow}>ADD A REVIEW + </button>
        </div>

        {addReviewsWindow}
      </>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.any,
  updateSorting: PropTypes.any,
  reviewsCharacteristics: PropTypes.any,
  product_id: PropTypes.any,
  filteredBy: PropTypes.any
};


export default ReviewsList;