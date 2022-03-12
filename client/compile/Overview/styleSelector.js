
import React from 'react';
import PropTypes from 'prop-types';
import Checkmark from '../icons/checkmark.js';
class StyleSelector extends React.Component {
//picks a certain style and shows all images for that style
//if props.showImages
//if props.showStyles

  constructor(props){
    super(props);
    this.changeStyle = this.changeStyle.bind(this);
  }

  changeStyle(index){
    this.props.changeStyle(index);
  }

  render(){
    var that = this;
    return (
      <div className="grid-ct">
        { that.props.styles.map(function(style,index){
          if (style.photos[0].url){
            var name = style.photos[0].url.split('=')[2];
          if (that.props.styleIndex === index){
            return <div className="style" style={{border:"2px solid red", borderRadius:"55px"}} onClick={function(){that.changeStyle(index);}} key={style.style_id}> <Checkmark ></Checkmark><img alt={name} src={style.photos[0].thumbnail_url}></img></div>;
          } else {
            return <div className="style" style={{border:"2px solid transparent"}} onClick={function(){that.changeStyle(index);}} key={style.style_id}> <img alt={name} src={style.photos[0].thumbnail_url}></img></div>;
          }
        } else {
          return <span>no image</span>
        }
        })
        }
      </div>);
  }



}

StyleSelector.propTypes = {
  changeStyle: PropTypes.any,
};

export default StyleSelector;