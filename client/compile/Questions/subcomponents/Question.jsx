import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList.jsx';
import AddAnswerModal from '../modals/AddAnswer.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: false,
      helpfulnessVoteCount: this.props.question.question_helpfulness,
      showAddAnswerModal: false,
      fields: ''
    };
    this.handleHelpfulnessVote = this.handleHelpfulnessVote.bind(this);
    this.handleAddAnswer = this.handleAddAnswer.bind(this);
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleHelpfulnessVote(event) {
    event.preventDefault();
    let request = {
      data: null,
      endpoint: `/qa/questions/${this.props.question.question_id}/helpful`,
      params: {
        question_id: this.props.question.question_id
      }
    };

    if  (!this.state.helpful) {
      this.setState({
        helpful: true,
        helpfulnessVoteCount: this.state.helpfulnessVoteCount + 1
      }, function() {
        axios.put('/putData', request);
      });
    }
  }

  handleAddAnswer(event) {
    event.preventDefault();
    this.setState({
      showAddAnswerModal: true,
      missingFields: ''
    });
  }

  handleSubmitAnswer(event) {
    event.preventDefault();
    const request = {
      data: {
        body: event.target.answer.value,
        name: event.target.nickname.value,
        email: event.target.email.value,
        photos: [],
      },
      endpoint: `/qa/questions/${this.props.question.question_id}/answers`,
      params: {
        question_id: this.props.question.question_id
      }
    };
    const fields = {
      answer: request.data.body,
      nickname: request.data.name,
      email: request.data.email
    };

    if (fields.answer && fields.nickname && fields.email) {
      this.setState({
        showAddAnswerModal: false
      }, function() {
        axios.post('/postData', request);
      });
    } else {
      let missingFields = '';
      for (var field in fields) {
        if (!fields[field]) {
          missingFields = missingFields + field + ' ';
        }
        this.setState({
          missingFields: missingFields
        });
      }
    }
  }

  closeModal() {
    this.setState({
      showAddAnswerModal: false
    });
  }

  render() {
    return (
      <div className="question">
        {this.state.showAddAnswerModal &&
          <AddAnswerModal
            product_name={this.props.product_name}
            question={this.props.question.question_body}
            missing={this.state.missingFields}
            submit={this.handleSubmitAnswer}
            close={this.closeModal}
          />
        }
        <div className="question-title">
          <p className="question-body">Q: {this.props.question.question_body}</p>
          <div className="question-links">
            <p >Helpful?&nbsp;
              <a className="question-link" onClick={this.handleHelpfulnessVote}>Yes</a>
              &nbsp;({this.state.helpfulnessVoteCount})&nbsp;|&nbsp;
              <a className="question-link" onClick={this.handleAddAnswer}>Add Answer</a>
            </p>
          </div>
        </div>
        <AnswerList
          answers={this.props.question.answers}
        />
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.object,
  product_name: PropTypes.string
};

export default Question;