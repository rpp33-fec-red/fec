import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        helpful: false
      }
  }

  render() {
    return (
      <div className="answer">
        <p className="answerTitle">{this.props.answer.body}</p>
        <div className="answerLinks">
          <p>by {this.props.answer.answerer_name}, MONTH, DD, YEAR | Helpful? <a>Yes</a> ({this.props.answer.helpfulness}) | <a>Report</a></p>
        </div>
      </div>
    );
  }
}

export default Answer;