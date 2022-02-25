import React from 'react';
import PropTypes from 'prop-types';
import UploadPhotosModal from './uploadPhotos.jsx';

class AddAnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUploadPhotosModal: false,
      uploadedPhotos: [],
      photoCount: 0
    };
    this.handlePhotoUploadModal = this.handlePhotoUploadModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSelectPhoto = this.handleSelectPhoto.bind(this);
  }

  handlePhotoUploadModal(event) {
    event.preventDefault();
    this.setState({
      showUploadPhotosModal: true
    });
  }

  closeModal() {
    this.setState({
      showUploadPhotosModal: false
    });
  }

  handleSelectPhoto(event) {
    event.preventDefault();
    let photos = this.state.uploadedPhotos;
    photos.push(event.target.photoUpload.value);
    this.setState({
      photoCount: this.state.photoCount + 1,
      uploadedPhotos: photos
    });
  }

  render() {
    return (
      <div className="questions-modals" id="add-answer-modal">
        <div className="questions-modals-content">
          <a className="close-modal" onClick={this.props.close}>X</a>
          <h4 className="modal-title">SUBMIT YOUR ANSWER</h4>
          <h4 className="modal-subtitle">{this.props.product_name}: {this.props.question}</h4>
          <form className="add-answer-form" onSubmit={this.props.submit} >
            <div className="modal-form">
              <label>Your Answer*</label>
              <textarea type="text" maxLength="1000" id="new-answer-field" name="answer"></textarea>
            </div>
            <div className="modal-form">
              <label>What is your nickname*</label>
              <input type="text" maxLength="60" placeholder="Example: jack543!" name="nickname"></input>
              <p className="modal-warning">For privacy reasons, do not use your full name or email address</p>
            </div>
            <div className="modal-form">
              <label>Your email*</label>
              <input type="email" maxLength="60" placeholder="Example: jack@email.com" name="email"></input>
              <p className="modal-warning">For authentication reasons, you will not be emailed</p>
            </div>
            <div className="modal-form">
              {(this.state.photoCount < 5) &&
                <input className="submit-modal"type="button" name="photos" onClick={this.handlePhotoUploadModal} value="UPLOAD PHOTOS"/>
              }
            </div>
            {(this.state.photoCount > 0) &&
              this.state.uploadedPhotos.map((photo) =>
                <p key={photo}>{photo}</p>
              )}
            <div className="modal-form">
              <input className="submit-modal" type="submit" value="SUBMIT ANSWER"/>
            </div>
            {this.props.missing &&
              <p className="modal-alert">You must enter the following:
                <span className="modal-alert-fields">
                  {this.props.missing}
                </span>
              </p>
            }
          </form>
          {this.state.showUploadPhotosModal &&
            <UploadPhotosModal
              product_name={this.props.product_name}
              close={this.closeModal}
              selectPhoto={this.handleSelectPhoto}
              photos={this.state}
            />
          }
        </div>
      </div>
    );
  }
}

AddAnswerModal.propTypes = {
  product_name: PropTypes.string,
  missing: PropTypes.string,
  close: PropTypes.func,
  question: PropTypes.string,
  submit: PropTypes.func
};

export default AddAnswerModal;