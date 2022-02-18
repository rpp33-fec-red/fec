import React from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswerModal from '../modals/addAnswer.jsx'

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: false,
      helpfulnessVoteCount: this.props.question.question_helpfulness,
      showAddAnswerModal: false,
      fields: ''
    }
    this.handleHelpfulnessVote = this.handleHelpfulnessVote.bind(this);
    this.handleAddAnswer = this.handleAddAnswer.bind(this);
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleHelpfulnessVote(event) {
    if  (!this.state.helpful) {
      this.setState({
        helpful: true,
        helpfulnessVoteCount: this.state.helpfulnessVoteCount + 1
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
    console.log('target', event.target)
    const answer = event.target.answer.value;
    const nickname = event.target.nickname.value;
    const email = event.target.email.value;
    const fields = {
      answer: answer,
      nickname: nickname,
      email: email
    }

    if (answer && nickname && email) {
      this.setState({
        showAddAnswerModal: false
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
    })
  }

  render() {
    return (
      <div className="question">
        {this.state.showAddAnswerModal &&
          <AddAnswerModal question={this.props.question.question_body} missing={this.state.missingFields} submit={this.handleSubmitAnswer} close={this.closeModal}/>
        }
        <div className="questionTitle">
          <p className="question-body">Q: {this.props.question.question_body}</p>
          <div className="questionLinks">
            <p>Helpful? <a className="question-link" onClick={this.handleHelpfulnessVote}>Yes</a> ({this.state.helpfulnessVoteCount}) | <a className="question-link" onClick={this.handleAddAnswer}>Add Answer</a></p>
          </div>
        </div>
          <AnswerList answers={this.props.question.answers} />
      </div>
    );
  }
}

export default Question;