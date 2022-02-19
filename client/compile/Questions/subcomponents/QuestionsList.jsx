import React from 'react';
import Question from './Question.jsx';


class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let questions = this.props.questions;

    if (questions.length) {
      questions = questions.slice(0, this.props.displayed);

      return(
        <div className='questions-list'>
          {questions.map((question) =>
            <Question key={question.question_id} question={question} product_name={this.props.product_name}/>
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default QuestionsList;