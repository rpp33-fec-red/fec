import React from 'react';

function ReviewImage (props) {
  return (
    <div className="modal-image">
      <img id={props.reviewerName + '_' + props.photo.id} src={props.photo.url} onClick={props.displayModal}/>
    </div>
  );
}

export default ReviewImage;