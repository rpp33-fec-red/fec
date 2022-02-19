import React from 'react';

class UploadPhotosModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photosUploaded: 0,
    }
    this.handleSelectPhoto = this.handleSelectPhoto.bind(this);
  }

  handleSelectPhoto(event) {
    event.preventDefault();
    console.log(event.target.photoUpload)
  }

  render() {
    return (

      <div className="modal" id="upload-photo-modal">
        <div className="modal-content">
          <a className="close-window" onClick={this.props.close}>X</a>
          <h3>Upload Photos for {this.props.product_name}</h3>
          <form>
            <div>
              <label htmlFor="photo-upload">Choose photo to upload</label>
              <input type="file" id="upload-answer-photo" accept="image/png, image/jpeg" name="photoUpload"></input>
            </div>
            <button onSubmit={this.handleSelectPhoto}>Submit Photo</button>
            <div className="selected-photos"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default UploadPhotosModal;