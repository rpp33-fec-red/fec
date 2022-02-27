import React from 'react';
import './imageholder.scss';
import StyleSelector from '../../styleSelector.js';
import PropTypes from 'prop-types';

function ImageHolder(props){
  console.log('array of photos',props);
  var [image,setImage] = React.useState(props.photos[0].url)
  // var photo = props.style[0];
  function imageClick(){
    setImage(props.photos[this.index].url);
  }
  return (
    <div className="image-holder">
      <img src={image}></img>
      <StyleSelector imageClick={imageClick} photos={props.photos} showImages={true}></StyleSelector>

    </div>);

}
ImageHolder.propTypes = {
  image: PropTypes.any
};
export default ImageHolder;