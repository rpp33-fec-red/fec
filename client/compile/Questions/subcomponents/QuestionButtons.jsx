import React from 'react';
import axios from 'axios';
import AddQuestionModal from '../modals/AddQuestion.jsx';

class QuestionButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddQuestionModal: false
    }

    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleSubmitQuestion = this.handleSubmitQuestion.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleAddQuestion(event) {
    event.preventDefault();
    this.setState({
      showAddQuestionModal: true,
      missingFields: ''
    });
  }

  handleSubmitQuestion(event) {
    event.preventDefault();
    const request = {
      data: {
        body: event.target.question.value,
        name: event.target.nickname.value,
        email: event.target.email.value,
        product_id: parseInt(this.props.product_id)
      },
      endpoint: '/qa/questions',
      params: null
    }

    const fields = {
      question: request.data.body,
      nickname: request.data.name,
      email: request.data.email
    }

    if (fields.question && fields.nickname && fields.email) {
      this.setState({
        showAddQuestionModal: false
      }, () => {
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
      showAddQuestionModal: false
    })
  }

  render() {
    return (
      <div className="question-buttons">
        {this.state.showAddQuestionModal &&
          <AddQuestionModal product_name={this.props.product_name} missing={this.state.missingFields} submit={this.handleSubmitQuestion} close={this.closeModal}/>
        }
        {!this.props.allQuestionsDisplayed &&
          <button onClick={this.props.displayMore}>MORE ANSWERED QUESTIONS</button>
        }
        <button onClick={this.handleAddQuestion} missing={this.state.missingFields}>ADD A QUESTION +</button>
      </div>
    );
  }
}

export default QuestionButtons;