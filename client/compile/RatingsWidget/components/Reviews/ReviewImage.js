import React from 'react';

function ReviewImage (props) {
  return (
    <div >
      <img className="review-image" id={props.reviewerName + '_' + props.photo.id} src={props.photo.url} onClick={props.updateReviewImageDisplayed}/>
    </div>
  );
}

export default ReviewImage;