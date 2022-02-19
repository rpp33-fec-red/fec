import React from 'react';

class UploadPhotosModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (

      <div className="modal" id="upload-photo-modal">
        <div className="modal-content">
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

export default UploadPhotosModal;