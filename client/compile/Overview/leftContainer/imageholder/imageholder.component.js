import React from 'react';
import './imageholder.scss';
import StyleSelector from '../../styleSelector.js';
import PropTypes from 'prop-types';

function ImageHolder(props){
  console.log('array of photos',props);
  // var photo = props.style[0];
  return (
    <div className="image-holder">
      <img src={props.image.photos[0].url}></img>
      <StyleSelector images={props.image.photos} showImages={true}></StyleSelector>

    </div>);

}
ImageHolder.propTypes = {
  image: PropTypes.any
};
export default ImageHolder;