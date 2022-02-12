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
        <div className="questionList" >
          {questions.map((question) =>
            <div className="question" key={question.question_id}>
              <div className="questionTitle">
                <p>Q: {question.question_body}</p>
                <div className="questionLinks">
                  <p>Helpful? <a>Yes</a> ({question.question_helpfulness}) | <a>Add Answer</a></p>
                </div>
              </div>
              <div className="answerList">
                <p>A: INSERT ANSWER LIST COMPONENT HERE</p>
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