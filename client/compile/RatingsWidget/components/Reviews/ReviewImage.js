import React from 'react';

function ReviewImage (props) {
  return (
    <div >
      <img alt={`Review submitted by: ${props.reviewerName}`} className="review-image" id={props.reviewerName + '_' + props.photo.id} src={props.photo.url} onClick={props.showModalWindow}/>
    </div>
  );
}

export default ReviewImage;