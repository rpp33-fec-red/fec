import React from 'react';
import ReviewTile from './ReviewTile.js';
import ReviewsSorting from './ReviewsSorting.js';
import AddReview from './AddReview.js';
import PropTypes from 'prop-types';

class ReviewsList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviewsDisplayed: [],
      addReviewDisplayed: false
    };
    this.updateReviewsDisplayed = this.updateReviewsDisplayed.bind(this);
    this.showAddReviewWindow = this.showAddReviewWindow.bind(this);
    this.closeAddReviewWindow = this.closeAddReviewWindow.bind(this);
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
  product_id: PropTypes.any
};


export default ReviewsList;