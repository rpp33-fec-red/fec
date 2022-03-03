import React from 'react';
import './imageholder.scss';
import PropTypes from 'prop-types';

class ImageHolder extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      expandThumbModal:false,
      expandImageModal:false,
      imageIndex:0,
      thumbsArray:props.style.photos,
      image:props.style.photos[0]
    };
    this.expand = this.expand.bind(this);
    this.clickImage = this.clickImage.bind(this);
    this.ThumbModal = this.ThumbModal.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveUp = this.moveUp.bind(this);
  }
  static propTypes = {
    ThumbnailIndex: PropTypes.number,
    imageClick: PropTypes.func,
    style: PropTypes.any
  };

  ModalBigImage(){
    return (<img className="iframeclass" src={this.props.style.photos[0].url} /> );
  }

  expand(){
    var newexpanded = !this.state.expandThumbModal;
    this.setState({expandThumbModal:newexpanded});
  }

  clickImage(index){
    this.setState({image:props.style.photos[index]});
  }

  moveUp(){
    var el = this.state.thumbsArray[0];
    var newarray = this.state.thumbsArray.slice(1);
    console.log('newarray',newarray);
    newarray.push(el);
    console.log(newarray);
    this.setState({thumbsArray:newarray});
    var index = this.state.imageIndex+1;
    this.setState({image:this.state.thumbsArray[0]});
  }
  moveDown(){
    var el = this.state.thumbsArray[this.state.thumbsArray.length-1];
    var newarray = this.state.thumbsArray;
    console.log('newarray',newarray);
    newarray.pop();
    console.log('el',el);
    newarray.unshift(el);
    console.log('newarray',newarray);
    this.setState({thumbsArray:newarray});
    this.setState({image:this.state.thumbsArray[0]});
  }



  ThumbModal(){

    var that = this;
    var array = [<div className="box thumbup" onClick={this.moveUp} key={0}> <svg  style={{transform:'rotate(180deg)'}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></div> ];
    this.state.thumbsArray.map(function(photo,index){
      array.push(<div className="box " key={index+1}>
        <img onClick={function(){that.clickImage(index);}} className={that.state.clickedIndex === index ? "thumb-border" : ""}  src={photo.thumbnail_url} ></img>
      </div>);
    });


    array.push(<div className="box thumbdown" onClick={this.moveDown} key={array.length+1}> <svg   xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></div> );
    return array;
  }
  render(){
    return (<React.Fragment>
      { this.state.expandImageModal ? <this.ModalBigImage /> : null  }
      <div className="image-holder">
        <div className="mainImage-ct">
          <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
          <div className="img" style={{backgroundImage:"url("+this.state.image.url+")", backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}/>
          <svg   xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
        </div>
        <div className="hoverModal"   style={{background:"transparent", position:"absolute"}}></div>
        <div className="imageSelector" >
          <div className="box" > <svg  onClick={this.expand} className={"arrow"+ (this.state.expanded ? 'show-thumbmodal' : 'hide-thumbmodal')} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></div>
          { this.state.expandThumbModal ? <this.ThumbModal /> : null }
        </div>
      </div>
    </React.Fragment>);
  }


}


export default ImageHolder;