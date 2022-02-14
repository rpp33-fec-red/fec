import React from 'react';

class ReviewTile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      recommended: false,
      showFullReview: false,
      helpfulnessVoteCount: 0,
      helpfulnessVoted: false

    }
    this.convertDate = this.convertDate.bind(this);
    this.showFullReview = this.showFullReview.bind(this);
    this.updateHelpfulnessVoteCount = this.updateHelpfulnessVoteCount.bind(this);
  }

  componentDidMount () {
    this.setState({
      helpfulnessVoteCount: this.props.review.helpfulness
    });
  }

  // formats date from API into Month DD, YYYY
  convertDate (date) {
    let dateObject = new Date (date);
    var options = { month: 'long'};
    const month = new Intl.DateTimeFormat('en-US', options).format(dateObject);
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    return month + ' ' + day + ', ' + year;
  }

  showFullReview () {
    this.setState({
      showFullReview: !this.state.showFullReview
    });
  }

  updateHelpfulnessVoteCount () {
    if (this.state.helpfulnessVoted) {
      this.setStte({
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

  render () {
    const formattedDate = this.convertDate(this.props.review.date);

    // caps review summary string size to 60 characters
    const reviewSummary = this.props.review.summary.substring(0, 60);

    // showing only the first 250 characters of the review by default
    let reviewBody;
    const body = this.props.review.body || null;
    const fullBody = (
      <div className="review-body">
        <p>{body}</p>
      </div>
    );
    const lessBody = (
      <div className="review-body">
        <p>{body}</p>
        <a onClick={this.showFullReview}>Show More</a>
      </div>
    );
    if (body.length < 250 || this.state.showFullReview) {
      reviewBody = fullBody;
    } else {
      reviewBody = lessBody;
    }

    // show "I recommend this product" if product is recommended by reviewer
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

        <h4 className="review-summary">{reviewSummary}</h4>

        {reviewBody}
        {recommend}
        <div className="review-helpfulness-voting">
          <p>Helpful? <a onClick={this.updateHelpfulnessVoteCount}> Yes</a> ({this.state.helpfulnessVoteCount})</p>
        </div>
      </div>
    );
  }
}

export default ReviewTile;