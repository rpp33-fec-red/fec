import React from 'react';
import ReviewImage from './ReviewImage.js';
import ReviewImageWindow from './ReviewImageWindow.js';
import ReviewResponse from './ReviewResponse.js';
import PropTypes from 'prop-types';

class ReviewTile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showFullReview: false,
      helpfulnessVoteCount: 0,
      helpfulnessVoted: false,
      modalWindowDisplayed: false,
      photoDisplayedInWindow: {}
    };
    this.convertDate = this.convertDate.bind(this);
    this.showFullReview = this.showFullReview.bind(this);
    this.updateHelpfulnessVoteCount = this.updateHelpfulnessVoteCount.bind(this);
    this.showModalWindow = this.showModalWindow.bind(this);
    this.closeModalWindow = this.closeModalWindow.bind(this);
  }

  componentDidMount () {
    this.setState({
      helpfulnessVoteCount: this.props.review.helpfulness
    });
  }

  // formats date from API into Month DD, YYYY
  convertDate (date) {
    let dateObject = new Date (date);
    const options = { dateStyle: 'long'};
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObject);
    return formattedDate;
  }

  showFullReview () {
    this.setState({
      showFullReview: !this.state.showFullReview
    });
  }

  // increments helpfulness vote count if helpfulness has been voted for
  updateHelpfulnessVoteCount () {
    if (this.state.helpfulnessVoted) {
      this.setState({
        helpfulnessVoteCount: this.state.helpfulnessVoteCount - 1,
        helpfulnessVoted: false
      });
    } else {
      this.setState({
        helpfulnessVoteCount: this.state.helpfulnessVoteCount + 1,
        helpfulnessVoted: true
      });
    }
  }

  showModalWindow (event) {
    event.preventDefault();
    const reviewerNameID = event.target.id.split('_');
    const reviewerName = reviewerNameID[0];
    const id = reviewerNameID[1];
    const src = event.target.src;

    const photo = {
      reviewerName: reviewerName,
      id: id,
      src: src
    };

    this.setState({
      modalWindowDisplayed: true,
      photoDisplayedInWindow: photo
    });
  }

  closeModalWindow (event) {
    event.preventDefault();
    this.setState({
      modalWindowDisplayed: false
    });
  }

  render () {
    const formattedDate = this.convertDate(this.props.review.date);

    // caps review summary string size to 60 characters
    let reviewSummary;
    if (this.props.review.summary.length > 60) {
      reviewSummary = this.props.review.summary.substring(0, 60) + '...';
    } else {
      reviewSummary = this.props.review.summary;
    }


    // shows only the first 250 characters of the review by default
    let reviewBody;
    const body = this.props.review.body || null;
    const fullBody = (
      <div className="review-body">
        <p>{body}</p>
      </div>
    );
    const lessBody = (
      <div className="review-body">
        <p>{body.substring(0, 250)}</p>
        <a onClick={this.showFullReview}>Show More</a>
      </div>
    );
    if (body.length < 250 || this.state.showFullReview) {
      reviewBody = fullBody;
    } else {
      reviewBody = lessBody;
    }


    // shows "I recommend this product" if product is recommended by reviewer
    let recommend;
    if (this.props.review.recommend) {
      recommend = <div className="recommend">☑ I recommend this product</div>;
    }


    // shows response from seller if there is a response
    let reviewResponse;
    if (this.props.review.response) {
      reviewResponse = <ReviewResponse response={this.props.review.response}/>;
    }


    // shows modal window when review image is clicked
    let modalWindow;
    if (this.state.modalWindowDisplayed) {
      modalWindow = <ReviewImageWindow closeModalWindow={this.closeModalWindow} photoDisplayedInWindow={this.state.photoDisplayedInWindow}/>;
    }


    return (
      <div className="review-tile">

        <div className="review-header">
          <div className="star-rating">* * * * *</div>
          <div className="right-corner">{this.props.review.reviewer_name + ', ' + formattedDate}</div>
        </div>

        <h3 className="review-summary">{reviewSummary}</h3>

        <div className="review-main">

          {reviewBody}

          <div className="thumbnail-display">
            {this.props.review.photos.map((photo) => {
              return <ReviewImage key={photo.id} photo={photo} showModalWindow={this.showModalWindow} reviewerName={this.props.review.reviewer_name}/>;
            })}

            {modalWindow}

          </div>

          {recommend}
          {reviewResponse}

          <div className="review-helpfulness-voting">
            <p>Helpful? <a onClick={this.updateHelpfulnessVoteCount}> Yes</a> ({this.state.helpfulnessVoteCount})</p>
          </div>

        </div>

      </div>
    );
  }
}

ReviewTile.propTypes = {
  review: PropTypes.any
};

export default ReviewTile;