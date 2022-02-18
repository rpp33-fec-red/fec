import React from 'react';
import Answer from './Answer.jsx';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAllAnswers: false,
      answerData: this.props.answers
    }
    this.seeAllAnswers = this.seeAllAnswers.bind(this);
    this.createAnswerDataArray = this.createAnswerDataArray.bind(this);
  }

  createAnswerDataArray(objectData) {
    let answers = [];
    for (const answer in this.state.answerData) {
      answers.push(this.state.answerData[answer]);
    }
    const sellerSorted = answers.sort((a, b) => {
      if ((a.answerer_name !== 'Seller') && (b.answerer_name === 'Seller')) {
        return 1;
      }
      if ((a.answerer_name === 'Seller') && (b.answerer_name !== 'Seller')) {
        return -1;
      }
      return b.helpfulness - a.helpfulness;
    });
    return answers;
  }

  componentDidMount() {
    this.setState({
      answerData: this.createAnswerDataArray(this.state.answerData)
    });
  }

  seeAllAnswers(event) {
    this.setState({
      displayAllAnswers: true
    });
  }

  render() {
    if (this.state.answerData.length) {
      var answers = this.state.answerData;
      if (!this.state.displayAllAnswers) {
        answers = answers.slice(0, 2);
      }

      return(
        <div className="answers">
        <p className="a">A:&nbsp;</p>
        <div className='answer-list'>
          {answers.map((answer) =>
            <Answer key={answer.id} answer={answer} />
          )}
          {(this.state.answerData.length > 2 && !this.state.displayAllAnswers) &&
            <a className="load-more-answers" onClick={this.seeAllAnswers}>SEE MORE ANSWERS</a>
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