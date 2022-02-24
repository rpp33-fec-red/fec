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
          <a className="close-window" onClick={this.props.close}>X</a>
          <h3>Upload Photos for {this.props.product_name}</h3>
          {(this.props.photos.photoCount < 5) &&
            <form onSubmit={this.props.selectPhoto}>
              <div>
                <label htmlFor="photo-upload">Choose photo to upload</label>
                <input type="file" id="upload-answer-photo" accept="image/png, image/jpeg" name="photoUpload"></input>
              </div>
              <div>
                <input type="submit" value="Upload Photo"/>
              </div>
            </form>
          }
          <div className="selected-photos">
            {this.props.photos.uploadedPhotos.map((photo) =>
              <p key={photo}>{photo}</p>
            )}
          </div>
          {(this.props.photos.photoCount > 0) &&
            <button onClick={this.props.close}>Submit Photos</button>
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