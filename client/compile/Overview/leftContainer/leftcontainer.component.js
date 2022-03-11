import React from 'react';
import './leftcontainer.scss';
import PropTypes from 'prop-types';
import ImageHolder from './imageholder/imageholder.component.js';
class LeftContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      expandImage:false
    };
    this.expandImage=this.expandImage.bind(this);
  }

  static propTypes = {
    style:PropTypes.any,
    ThumbnailIndex:PropTypes.any,
    imageClick:PropTypes.func
  }

  expandImage(boolean){
    this.setState({expandImage:boolean},function(){
      console.log('expanding image',this.state);
    });
  }

  render (){
    return (
      <div   className={"leftCt " + (this.state.expandImage ? 'expandImage' : 'leftCt')} >
        <ImageHolder expandImage={this.expandImage} image={this.props.image} thumbArray={this.props.thumbArray} clickImage={this.props.clickImage}  ThumbnailIndex={this.props.ThumbnailIndex} imageClick={this.props.imageClick}  moveUp={this.props.moveUp} moveDown={this.props.moveDown}/>
      </div>);
  }
}


export default LeftContainer;


