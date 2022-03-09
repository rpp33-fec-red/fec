import React from 'react';
import PropTypes from 'prop-types';

class AddQuestionModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="questions-modals" id="add-question-modal">
        <div className="questions-modals-content">
          <a className="close-modal" onClick={this.props.close}>X</a>
          <h4 className="modal-title">ASK YOUR QUESTION</h4>
          <h4 className="modal-subtitle">About the {this.props.product_name}</h4>
          <form className="add-question-form" onSubmit={this.props.submit} >
            <div className="modal-form">
              <label htmlFor="new-question-field">Your Question*</label>
              <textarea type="text" maxLength="1000" id="new-question-field" name="question"></textarea>
            </div>
            <div className="modal-form">
              <label htmlFor="question-nickname">What is your nickname*</label>
              <input type="text" maxLength="60" id="question-nickname" placeholder="Example: jackson11!" name="nickname"></input>
              <p className="modal-warning">For privacy reasons, do not use your full name or email address</p>
            </div>
            <div className="modal-form">
              <label htmlFor="question-email">Your email*</label>
              <input type="email" maxLength="60" id="question-email" placeholder="Why did you like the product or not?" name="email"></input>
              <p className="modal-warning">For authentication reasons, you will not be emailed</p>
            </div>
            <div className="modal-form">
              <input className="submit-modal" type="submit" value="SUBMIT QUESTION"/>
            </div>
            {this.props.missing &&
              <p className="modal-alert">You must enter the following:
                <span className="modal-alert-fields">
                  {this.props.missing}
                </span>
              </p>
            }
          </form>
        </div>
      </div>
    );
  }
}

AddQuestionModal.propTypes = {
  missing: PropTypes.string,
  close: PropTypes.func,
  submit: PropTypes.func,
  product_name: PropTypes.string

};

export default AddQuestionModal;