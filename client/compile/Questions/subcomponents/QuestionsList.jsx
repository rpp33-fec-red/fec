import React from 'react';

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
        <div className="question" >
          {questions.map((question) =>
            <div className="questionTitle" key={question.question_id}>
              <p>Q: {question.question_body}</p>
              <div className="questionLinks">
                <p>Helpful? <a>Yes</a> ({question.question_helpfulness}) | <a>Add Answer</a></p>
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default QuestionsList;