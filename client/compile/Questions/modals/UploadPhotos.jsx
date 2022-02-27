import React from 'react';
import PropTypes from 'prop-types';

class UploadPhotosModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="questions-modals" id="upload-photo-modal">
        <div className="questions-modals-content">
          <a className="close-modal" onClick={this.props.close}>X</a>
          <h4 className="modal-title">Upload Photos for {this.props.product_name}</h4>
          {(this.props.photos.photoCount < 5) &&
            <form id="photo-upload-form" className="upload-photos-form" encType="multipart/form-data" onSubmit={this.props.selectPhoto}>
              <div className="modal-form">
                <label htmlFor="photo-upload">Choose photo to upload</label>
                <input type="file" id="upload-answer-photo" accept="image/png, image/jpeg" name="photoUpload"></input>
              </div>
              <div>
                <input className="submit-modal" type="submit" value="Upload Photo"/>
              </div>
            </form>
          }
          <div className="selected-photos">
            {this.props.photos.uploadedPhotos.map((photo) =>
              <img className="answer-photos" key={photo} src={require({photo}).default}></img>
            )}
          </div>
          {(this.props.photos.photoCount > 0) &&
            <button className="submit-modal" onClick={this.props.close}>DONE</button>
          }
        </div>
      </div>
    );
  }
}

UploadPhotosModal.propTypes = {
  photos: PropTypes.object,
  close: PropTypes.func,
  selectPhoto: PropTypes.func,
  product_name: PropTypes.string
};

export default UploadPhotosModal;