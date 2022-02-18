import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: false,
      helpfulnessVoteCount: this.props.answer.helpfulness,
      reported: false,
    }
    this.handleHelpfulnessVote = this.handleHelpfulnessVote.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  handleHelpfulnessVote(event) {
    if  (!this.state.helpful) {
      this.setState({
        helpful: true,
        helpfulnessVoteCount: this.state.helpfulnessVoteCount + 1,
        date: ''
      });
    }
    this.convertDate = this.convertDate.bind(this);
  }

  handleReport(event) {
    if (!this.state.reported) {
      this.setState({
        reported: true
      })
    }
  }

  convertDate(dateTime) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let date = new Date(dateTime);
    let answerDate = months[date.getMonth()] + ', ' + date.getDate() + ', ' + date.getFullYear();
    return answerDate;
  }

  render() {
    this.convertDate(this.props.answer.date);

    return (
      <div className="answer">
        <p className="answer-title">{this.props.answer.body}</p>
        <div className="answer-links">
          <p>by <span className={(this.props.answer.answerer_name === 'Seller') ? 'answerer-seller' : 'answerer-other'}>{this.props.answer.answerer_name}</span>
          , {this.convertDate(this.props.answer.date)}&nbsp; | &nbsp;Helpful?
            <a className="answer-link" onClick={this.handleHelpfulnessVote}>Yes</a> ({this.state.helpfulnessVoteCount})&nbsp; | &nbsp;
            {!this.state.reported ?
              <a className="answer-link" onClick={this.handleReport}>Report</a> :
              <a className="answer-link" onClick={this.handleReport}>Reported</a>
            }
          </p>
        </div>
      </div>
    );
  }
}

export default Answer;