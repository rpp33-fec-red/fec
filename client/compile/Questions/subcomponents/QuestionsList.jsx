/*global React */
/*eslint no-undef: "error"*/
import PropTypes from 'prop-types';
import Question from './Question.jsx';


class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let questions = this.props.questions;

    if (questions.length) {
      questions = questions.slice(0, this.props.displayed);

      return(
        <div className='questions-list'>
          {questions.map((question) =>
            <Question
              key={question.question_id}
              question={question}
              product_name={this.props.product_name}
            />
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

QuestionsList.propTypes = {
  questions: PropTypes.any,
  displayed: PropTypes.number,
  product_name: PropTypes.string
};

export default QuestionsList;