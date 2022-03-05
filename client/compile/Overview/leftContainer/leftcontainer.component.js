import React from 'react';
import './leftcontainer.scss';
import PropTypes from 'prop-types';
import ImageHolder from './imageholder/imageholder.component.js';
class LeftContainer extends React.Component{

  constructor(props){
    super(props);
  }

  static propTypes = {
    style:PropTypes.any,
    ThumbnailIndex:PropTypes.any,
    imageClick:PropTypes.func
  }

  render (){
    console.log('props in left ct ', this.props);

    return (
      <div className="leftCt">
        <ImageHolder image={this.props.image} thumbArray={this.props.thumbArray} clickImage={this.props.clickImage}  ThumbnailIndex={this.props.ThumbnailIndex} imageClick={this.props.imageClick}  moveUp={this.props.moveUp} moveDown={this.props.moveDown}/>
      </div>);
  }
}


export default LeftContainer;


