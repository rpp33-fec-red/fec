import React from 'react';
import ReviewImage from './ReviewImage.js';
import ReviewImageWindow from './ReviewImageWindow.js';
import $ from 'jquery';

class ReviewTile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showFullReview: false,
      helpfulnessVoteCount: 0,
      helpfulnessVoted: false,
      reviewImageDisplayed: ''
    }
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
    const imageId = event.target.id;
    const $image = $(`#${imageId}`);
    const url = $image.attr('src');
    const $modalContent = $('.modal-content');
    const $modal = $('.modal-window');
    $modalContent.attr('src', url);
    $modal.css('display', 'block');
  }

  closeModalWindow (event) {
    event.preventDefault();
    const $modal = $('.modal-window');
    console.log($modal)
    $modal.css('display', 'none');
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
      recommend = <div className="recommend">☑ I recommend this product</div>
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
              return <ReviewImage key={photo.id} photo={photo} showModalWindow={this.showModalWindow} reviewerName={this.props.review.reviewer_name}/>
            })}
            <ReviewImageWindow closeModalWindow={this.closeModalWindow}/>
          </div>

          {recommend}

          <div className="review-helpfulness-voting">
            <p>Helpful? <a onClick={this.updateHelpfulnessVoteCount}> Yes</a> ({this.state.helpfulnessVoteCount})</p>
          </div>
        </div>

      </div>
    );
  }
}

export default ReviewTile;