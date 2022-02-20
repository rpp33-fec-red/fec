import React from 'react';
import PropTypes from 'prop-types';

function ReviewImageWindow (props) {
  return (
    <div className="modal-window" onClick={props.closeModalWindow}>
      <img className="modal-content" src=""/>
    </div>
  );
}

ReviewImageWindow.propTypes = {
  photo: PropTypes.any,
  reviewerName: PropTypes.any,
  closeModalWindow: PropTypes.any,
};

export default ReviewImageWindow;