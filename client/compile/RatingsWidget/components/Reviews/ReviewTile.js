import React from 'react';

class ReviewTile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      recommended: false
    }
    this.convertDate = this.convertDate.bind(this);
  }

  // formats date from API
  convertDate (date) {
    let dateObject = new Date (date);
    var options = { month: 'long'};
    const month = new Intl.DateTimeFormat('en-US', options).format(dateObject);
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    return month + ' ' + day + ', ' + year;
  }

  render () {
    const formattedDate = this.convertDate(this.props.review.date);
    return (
      <div className="review=tile">
        <p className="star-rating">* * * * *</p>
        <h4 className="review-summary">{this.props.review.summary}</h4>
        <h4 className="date-of-review">{formattedDate}</h4>
        <h4 className="reviewer-name">{this.props.review.reviewer_name}</h4>
        <p className="review-body">{this.props.review.body}</p>
        <div className="review-helpfulness-voting">
          <p>Helpful? <a> Yes</a> ({this.props.review.helpfulness})</p>
        </div>
      </div>
    );
  }
}

export default ReviewTile;