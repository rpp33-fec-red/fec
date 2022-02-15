import React from 'react';
import Answer from './Answer.jsx';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAllAnswers: false,
      answerData: this.props.answers
    }

    this.createAnswerDataArray = this.createAnswerDataArray.bind(this);
  }

  createAnswerDataArray(objectData) {
    let answers = [];
    for (const answer in this.state.answerData) {
      answers.push(this.state.answerData[answer]);
    }
    return answers;
  }

  componentDidMount() {
    this.setState({
      answerData: this.createAnswerDataArray(this.state.answerData)
    })
  }

  render() {
    if (this.state.answerData.length) {
      if (!this.state.displayAllAnswers) {
        this.state.answerData = this.state.answerData.slice(0, 2);
      }

      return(
        <div className="answers">
        <p>A:&nbsp;</p>
        <div className="answerList" >
          {this.state.answerData.map((answer) =>
            <Answer key={answer.id} answer={answer} />
          )}
          {this.state.answerData.length > 2 &&
            <a>See more answers</a>
          }
        </div>
      </div>
      );
    } else {
      return null;
    }
  }
}

export default AnswerList;