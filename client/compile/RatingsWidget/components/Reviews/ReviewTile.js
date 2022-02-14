import React from 'react';

class ReviewTile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      recommended: false,
      showFullReview: false
    }
    this.convertDate = this.convertDate.bind(this);
    this.showFullReview = this.showFullReview.bind(this);
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

  render () {
    const formattedDate = this.convertDate(this.props.review.date);

    // caps review summary string size to 60 characters
    const reviewSummary = this.props.review.summary.substring(0, 60);

    // showing only the first 250 characters of the review by default
    let reviewBody;
    const body = this.props.review.body || null;
    if (body.length > 250) {
      reviewBody = (
        <div className="review-body">
          <p>{body}</p>
        </div>
      );
    } else {
      reviewBody = (
        <div className="review-body">
          <p>{body}</p>
          <a onClick={this.showFullReview}>Show More</a>
        </div>
      );
    }

    return (
      <div className="review=tile">
        <p className="star-rating">* * * * *</p>
        <h4 className="review-summary">{reviewSummary}</h4>
        <h4 className="date-of-review">{formattedDate}</h4>
        <h4 className="reviewer-name">{this.props.review.reviewer_name}</h4>
        {reviewBody}
        <div className="review-helpfulness-voting">
          <p>Helpful? <a> Yes</a> ({this.props.review.helpfulness})</p>
        </div>
      </div>
    );
  }
}

export default ReviewTile;