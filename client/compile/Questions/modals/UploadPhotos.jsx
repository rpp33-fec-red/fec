/*global React */
/*eslint no-undef: "error"*/
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
          {(this.props.photoCount < 5) &&
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
          {this.props.uploadedPhotos &&
            <div className="selected-photos">
              {this.props.uploadedPhotos.map((photo) =>
                <img className="answer-photos" key={photo} src={photo}></img>
              )}
            </div>
          }
          {(this.props.photoCount > 0) &&
            <button className="submit-modal" onClick={this.props.close}>DONE</button>
          }
        </div>
      </div>
    );
  }
}

UploadPhotosModal.propTypes = {
  photoCount: PropTypes.number,
  uploadedPhotos: PropTypes.array,
  close: PropTypes.func,
  selectPhoto: PropTypes.func,
  product_name: PropTypes.string
};

export default UploadPhotosModal;