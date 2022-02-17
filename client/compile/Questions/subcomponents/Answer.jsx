import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: false,
      helpfulnessVoteCount: this.props.answer.helpfulness,
      reported: false
    }
    this.handleHelpfulnessVote = this.handleHelpfulnessVote.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  handleHelpfulnessVote(event) {
    if  (!this.state.helpful) {
      this.setState({
        helpful: true,
        helpfulnessVoteCount: this.state.helpfulnessVoteCount + 1
      });
    }
  }

  handleReport(event) {
    if (!this.state.reported) {
      this.setState({
        reported: true
      })
    }
  }

  render() {
    return (
      <div className="answer">
        <p className="answerTitle">{this.props.answer.body}</p>
        <div className="answerLinks">
          <p>by {this.props.answer.answerer_name}, MONTH, DD, YEAR | Helpful?
            <a onClick={this.handleHelpfulnessVote}>Yes</a>
            ({this.state.helpfulnessVoteCount}) | &nbsp;
            {!this.state.reported ?
              <a onClick={this.handleReport}>Report</a> :
              <a onClick={this.handleReport}>Reported</a>
            }
          </p>
        </div>
      </div>
    );
  }
}

export default Answer;