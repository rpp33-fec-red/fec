import React from 'react';
import './imageholder.scss';
import PropTypes from 'prop-types';

class ImageHolder extends React.Component{
  constructor(props){

    super(props);
    this.state= {
      expandThumbModal:false,
      expandImageModal:false,
    };
    this.expand = this.expand.bind(this);
    this.ThumbModal = this.ThumbModal.bind(this);
    this.mainImageClick = this.mainImageClick.bind(this);
    this.ModalBigImage = this.ModalBigImage.bind(this);
  }
  static propTypes = {
    ThumbnailIndex: PropTypes.number,
    imageClick: PropTypes.func,
    style: PropTypes.any,
    thumbArray: PropTypes.any
  };

  ModalBigImage(){
    return (<img className="iframeclass" style={{top:"0px"}} src={this.state.image} /> );
  }

  expand(){
    var newexpanded = !this.state.expandThumbModal;
    this.setState({expandThumbModal:newexpanded});
  }

  mainImageClick(){
    var that =  this;
    this.setState({expandImageModal:!that.state.expandImageModal});
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
  render(){
    var that = this;
    return (<React.Fragment>
      <div className="image-holder" >
        <div className="mainImage-ct" >
          <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
          <div className="img"  style={{backgroundImage:"url("+this.props.image+")", backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}/>
          <svg   xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
        </div>
        <div className="hoverModal" onClick={this.mainImageClick}   style={{background:"transparent", position:"absolute"}}></div>
        <div className="imageSelector" >
          <div className="box boxsvg" > <svg  onClick={this.expand} className={"arrow"+ (this.state.expanded ? 'show-thumbmodal' : 'hide-thumbmodal')} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></div>
          { this.state.expandThumbModal ? <this.ThumbModal /> : null }
        </div>
      </div>
      { this.state.expandImageModal ? <this.ModalBigImage /> : null  }

    </React.Fragment>);
  }


}


export default ImageHolder;