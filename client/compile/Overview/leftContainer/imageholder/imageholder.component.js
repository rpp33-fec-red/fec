import React from 'react';
import './imageholder.scss';
import PropTypes from 'prop-types';

class ImageHolder extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      expandThumbModal:false,
      expandImage:false,
      scale:false,
      zoomFeature: {size: "contain", scale:"scale(1)" ,position: "center center"}
    };
    this.expand = this.expand.bind(this);
    this.ThumbModal = this.ThumbModal.bind(this);
    this.expandImage = this.expandImage.bind(this);
    this.backgroundPosition = this.backgroundPosition.bind(this);
  }
  static propTypes = {
    ThumbnailIndex: PropTypes.number,
    imageClick: PropTypes.func,
    style: PropTypes.any,
    image: PropTypes.any,
    thumbArray: PropTypes.any,
    moveUp: PropTypes.func,
    moveDown: PropTypes.func,
    expandImage: PropTypes.func
  };

  expand(){
    var newexpanded = !this.state.expandThumbModal;
    this.setState({expandThumbModal:newexpanded});
  }

  expandImage(){
    this.setState({expandImage:!this.state.expandImage},function(){
      this.props.expandImage(this.state.expandImage);
    });
  }

  ThumbModal(){
    var that = this;
    var array = [];
    this.props.thumbArray.map(function(photo,index){
      if (that.props.ThumbnailIndex === index){
        array.push(<div className="box " style={{border:'2px solid red'}} key={index}>
          <img onClick={function(){that.props.clickImage(index);}} className={that.state.clickedIndex === index ? "thumb-border" : ""}  src={photo.thumbnail_url} ></img>
        </div>);
      } else {
        array.push(<div className="box " key={index}>
          <img onClick={function(){that.props.clickImage(index);}} className={that.state.clickedIndex === index ? "thumb-border" : ""}  src={photo.thumbnail_url} ></img>
        </div>);
      }
    });
    return (<React.Fragment>
      <div className="box thumbup" onClick={this.props.moveUp} key={0}> <svg  style={{transform:'rotate(180deg)'}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></div>
      <div className="thumbs">{array}</div>
      <div className="box thumbdown" onClick={this.props.moveDown} key={array.length+1}> <svg   xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></div>
    </React.Fragment>);
  }

  backgroundPosition(e){
    var Left =  parseInt(e.target.offsetLeft) - parseInt(e.screenX);
    console.log(Left);
    console.log(e);
    if (this.state.expandImage){
      this.setState({zoomFeature:{size:"cover", scale:"scale(2)",position: "top center"}});
    }
  }

  render(){
    var that = this;
    return (<React.Fragment>
      <div className="image-holder" >
        <div className="mainImage-ct" >
          <svg style={{ transform: 'rotate(90deg)'}} onClick={that.props.moveUp} xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 24 24" width="44px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
          <div  onClick={that.backgroundPosition} className="img"  style={{backgroundImage:"url("+this.props.image+")",transform:this.state.zoomFeature.scale, backgroundPosition:this.state.zoomFeature.position, backgroundSize:this.state.zoomFeature.size, backgroundRepeat:"no-repeat",maxWidth:"90%"}}><svg  onClick={that.expandImage} className="expand-arrow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><polygon points="21,11 21,3 13,3 16.29,6.29 6.29,16.29 3,13 3,21 11,21 7.71,17.71 17.71,7.71"/></svg></div>
          <svg  style={{ transform: 'rotate(270deg)'}}  onClick={that.props.moveDown}  xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 24 24" width="44px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
        </div>
        <div className="imageSelector" >
          <div className="box boxsvg" > <svg  onClick={this.expand} className={"arrow"+ (this.state.expanded ? 'show-thumbmodal' : 'hide-thumbmodal')} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></div>
          { this.state.expandThumbModal ? <this.ThumbModal /> : null }
        </div>
      </div>
    </React.Fragment>);
  }


}


export default ImageHolder;