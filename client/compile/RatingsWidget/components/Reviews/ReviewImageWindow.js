import React from 'react';

function ReviewImageWindow (props) {
  return (
    <div className="modal-window" onClick={props.closeModalWindow}>
      <img className="modal-content" src=""/>
    </div>
  );
}

export default ReviewImageWindow;