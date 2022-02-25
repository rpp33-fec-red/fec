import React from 'react';
import PropTypes from 'prop-types';

function ReviewImageWindow (props) {
  return (
    <div className="modal-window" onClick={props.closeModalWindow}>
      <img alt={`Close-up of review photo ${props.photoDisplayedInWindow.id} submitted by: ${props.photoDisplayedInWindow.reviewerName}`} className="modal-content" src={props.photoDisplayedInWindow.src}/>
    </div>
  );
}

ReviewImageWindow.propTypes = {
  photo: PropTypes.any,
  reviewerName: PropTypes.any,
  closeModalWindow: PropTypes.any,
  photoDisplayedInWindow: PropTypes.any
};

export default ReviewImageWindow;