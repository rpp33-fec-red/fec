import React from 'react';

function ReviewImageWindow (props) {
  return (
    <div className="modal-window">
      <img className="modal-content" src={props.url}/>
    </div>
  );
}

export default ReviewImageWindow;