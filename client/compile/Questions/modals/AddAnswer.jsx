import React from 'react';
import UploadPhotosModal from './uploadPhotos.jsx';

class AddAnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUploadPhotosModal: false
    }
    this.handlePhotoUploads = this.handlePhotoUploads.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handlePhotoUploads(event) {
    this.setState({
      showUploadPhotosModal: true
    });
  }

  closeModal() {
    this.setState({
      showUploadPhotosModal: false
    })
  }

  submitAnswer(event) {

  }

  render() {
    return (
      <div className="modal" id="add-answer-modal">
        <div className="modal-content">
          <a className="close-modal" onClick={this.props.close}>X</a>
          <h2>Submit your Answer</h2>
          <h3>{this.props.product_name}: {this.props.question}</h3>
          <form className="add-answer-form" onSubmit={this.props.submit} >
            <div className="modal-form">
              <label>Your Answer*</label>
              <textarea type="text" maxLength="1000" id="new-answer-field" name="answer"></textarea>
            </div>
            <div className="modal-form">
              <label>What is your nickname*</label>
              <input type="text" maxLength="60" placeholder="Example: jack543!" name="nickname"></input>
              <p>For privacy reasons, do not use your full name or email address</p>
            </div>
            <div className="modal-form">
              <label>Your email*</label>
              <input type="email" maxLength="60" placeholder="Example: jack@email.com" name="email"></input>
              <p>For authentication reasons, you will not be emailed</p>
            </div>
            <div className="modal-form">
              <label>upload Photos</label>
              <input type="button" name="photos" onClick={this.handlePhotoUploads}></input>
            </div>
            <div className="modal-form">
              <input type="submit" value="Submit answer"/>
            </div>
            {this.props.missing &&
              <p>You must enter the following: {this.props.missing}</p>
            }
          </form>
          {this.state.showUploadPhotosModal &&
            <UploadPhotosModal close={this.closeModal}/>
          }
        </div>
      </div>
    );
  }
}

export default AddAnswerModal;