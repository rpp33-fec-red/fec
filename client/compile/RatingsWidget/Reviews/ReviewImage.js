import React from 'react';
import PropTypes from 'prop-types';

function ReviewImage (props) {
  return (
    <div>
      <img alt={`Review photo ${props.photo.id} submitted by: ${props.reviewerName}`} className="review-image" id={props.reviewerName + '_' + props.photo.id} src={props.photo.url} onClick={props.showModalWindow}/>
    </div>
  );
}

ReviewImage.propTypes = {
  photo: PropTypes.any,
  reviewerName: PropTypes.any,
  showModalWindow: PropTypes.any
};

export default ReviewImage;