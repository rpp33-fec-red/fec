import React from 'react';
import './imageholder.scss';
import StyleSelector from '../../styleSelector.js';
import PropTypes from 'prop-types';

function ImageHolder(props){
  var [showBigImage,setshowBigImage] = React.useState(false);
  // var photo = props.style[0];

  function toggle(){
    setshowBigImage(!showBigImage);
  }
  function Modal(){
    return (<img onClick={toggle} className="iframeclass" src={props.photos[0].url} /> );

  }
  return (<React.Fragment>
    { showBigImage ? <Modal /> : null  }
    <div className="image-holder">
      <img src={props.image || props.photos[0].url}></img>
      <div className="hoverModal" onClick={toggle}  style={{background:"transparent", position:"absolute"}}></div>
      <StyleSelector imageClick={props.imageClick} photos={props.photos} showImages={true}></StyleSelector>
    </div>
  </React.Fragment>);

}
ImageHolder.propTypes = {
  image: PropTypes.any,
  imageClick: PropTypes.any,
  photos: PropTypes.array
};
export default ImageHolder;