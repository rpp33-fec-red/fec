import React from 'react';
import './imageholder.scss';
import StyleSelector from '../../styleSelector.js';
import PropTypes from 'prop-types';

function ImageHolder(props){
  console.log('array of photos',props);
  // var photo = props.style[0];

  return (
    <div className="image-holder">
      <img src={props.image.url}></img>
        <StyleSelector></StyleSelector>
    </div>);

}
ImageHolder.propTypes = {
  image: PropTypes.any
};
export default ImageHolder;