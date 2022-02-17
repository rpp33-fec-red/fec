import React from 'react';
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
    const question = event.target.question.value;
    const nickname = event.target.nickname.value;
    const email = event.target.email.value;
    const fields = {
      question: question,
      nickname: nickname,
      email: email
    }

    if (question && nickname && email) {
      this.setState({
        showAddQuestionModal: false
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
          <AddQuestionModal missing={this.state.missingFields} submit={this.handleSubmitQuestion} close={this.closeModal}/>
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