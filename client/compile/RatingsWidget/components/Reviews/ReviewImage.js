import React from 'react';

function ReviewImage (props) {
  return (
    <div className="reviews-image">
      <img src={props.photo.url}/>
    </div>
  );
}

export default ReviewImage;