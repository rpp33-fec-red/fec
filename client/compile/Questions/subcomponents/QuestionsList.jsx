import React from 'react';
import Question from './Question.jsx';


class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxQuestionsDisplayed: 2
    }
  }

  render() {
    console.log('questions!', this.props.questions)
    let questions = this.props.questions;

    if (questions.length) {
      questions = questions.slice(0, this.state.maxQuestionsDisplayed);

      return(
        <div className="questionList" >
          {questions.map((question) =>
            <Question key={question.question_id} question={question} />
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default QuestionsList;