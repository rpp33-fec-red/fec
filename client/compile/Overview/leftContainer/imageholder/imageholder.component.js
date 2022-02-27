import React from 'react';
import './imageholder.scss';
import StyleSelector from '../../styleSelector.js';
import PropTypes from 'prop-types';

function ImageHolder(props){
  var [showBigImage,setshowBigImage] = React.useState(false)
  // var photo = props.style[0];
  function showbigImage(){
    setshowBigImage(true)
  }
  function hidebigImage(){
    setshowBigImage(false)
  }

  function Modal(){
   return ( <div className="bigImage">
    <img src={props.image || props.photos[0].url} style={{width:"800px",height:"1000px"}}></img>
    </div>);
  }
  return (
    <div className="image-holder">
      <img src={props.image || props.photos[0].url}></img>
      { showBigImage ? <Modal /> : null }
      <div className="hoverModal" onMouseLeave={hidebigImage} onMouseOver={showbigImage} style={{background:"transparent", position:"absolute"}}></div>
      <StyleSelector imageClick={props.imageClick} photos={props.photos} showImages={true}></StyleSelector>
    </div>);

}
ImageHolder.propTypes = {
  image: PropTypes.any
};
export default ImageHolder;