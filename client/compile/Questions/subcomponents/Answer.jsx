import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: false,
      helpfulnessVoteCount: this.props.answer.helpfulness
    }
    this.handleHelpfulnessVote = this.handleHelpfulnessVote.bind(this);
  }

  handleHelpfulnessVote(event) {
    if  (!this.state.helpful) {
      this.setState({
        helpful: true,
        helpfulnessVoteCount: this.state.helpfulnessVoteCount + 1
      });
    }
  }

  render() {
    return (
      <div className="answer">
        <p className="answerTitle">{this.props.answer.body}</p>
        <div className="answerLinks">
          <p>by {this.props.answer.answerer_name}, MONTH, DD, YEAR | Helpful? <a onClick={this.handleHelpfulnessVote}>Yes</a> ({this.state.helpfulnessVoteCount}) | <a>Report</a></p>
        </div>
      </div>
    );
  }
}

export default Answer;