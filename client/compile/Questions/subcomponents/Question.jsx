import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: false,
      helpfulness: 0
    }
  }

  render() {
    return (
      <div className="question">
      <div className="questionTitle">
        <p>Q: {this.props.question.question_body}</p>
        <div className="questionLinks">
          <p>Helpful? <a>Yes</a> ({this.props.question.question_helpfulness}) | <a>Add Answer</a></p>
        </div>
      </div>
      <div className="answerList">
        <p>A: INSERT ANSWER LIST COMPONENT HERE</p>
      </div>
    </div>
    )
  }
}

export default Question;