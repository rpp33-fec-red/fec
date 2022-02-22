import React from 'react';
import PropTypes from 'prop-types';

class AddQuestionModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal" id="add-question-modal">
        <div className="modal-content">
          <a className="close-modal" onClick={this.props.close}>X</a>
          <h2>Ask Your Question</h2>
          <h3>About the {this.props.product_name}</h3>
          <form className="add-question-form" onSubmit={this.props.submit} >
            <div className="modal-form">
              <label>Your Question*</label>
              <textarea type="text" maxLength="1000" id="new-question-field" name="question"></textarea>
            </div>
            <div className="modal-form">
              <label>What is your nickname*</label>
              <input type="text" maxLength="60" placeholder="Example: jackson11!" name="nickname"></input>
              <p>For privacy reasons, do not use your full name or email address</p>
            </div>
            <div className="modal-form">
              <label>Your email*</label>
              <input type="email" maxLength="60" placeholder="Why did you like the product or not?" name="email"></input>
              <p>For authentication reasons, you will not be emailed</p>
            </div>
            <div className="modal-form">
              <input type="submit" value="Submit question"/>
            </div>
            {this.props.missing &&
              <p>You must enter the following: {this.props.missing}</p>
            }
          </form>
        </div>
      </div>
    );
  }
}

AddQuestionModal.propTypes = {
  missing: PropTypes.bool,
  close: PropTypes.func,
  submit: PropTypes.func,
  product_name: PropTypes.string

};

export default AddQuestionModal;