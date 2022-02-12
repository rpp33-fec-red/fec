import React from 'react';
import Answer from './Answer.jsx';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAllAnswers: false,
      answerData: this.props.answers
    }
  }

  render() {
    let answers = [];
    for (const answer in this.state.answerData) {
      answers.push(answer);
    }

    if (!answers.length) {
      return null;
    } else {
      if (!this.state.displayAllAnswers) {
        answers = answers.slice(0, 2);
      }

      return(
        <div className="answerList" >
          {answers.map((answer) =>
            <Answer key={answer.id} answer={answer} />
          )}
        </div>
      );
    }
  }
}

export default AnswerList;