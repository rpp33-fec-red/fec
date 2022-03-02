import React from 'react';
import './leftcontainer.scss';
import PropTypes from 'prop-types';
import ImageHolder from './imageholder/imageholder.component.js';
class LeftContainer extends React.Component{

  constructor(props){
    super(props);

  }

  static propTypes = {
    model:PropTypes.any,
  }

  render (){
    return (
      <div className="leftCt">
        <ImageHolder ThumbnailIndex={this.props.model.state.ThumbnailIndex} imageClick={this.props.model.imageClick} photos={this.props.model.product.styles[this.model.state.styleIndex].photos}/>
      </div>);
  }
}


export default LeftContainer;


