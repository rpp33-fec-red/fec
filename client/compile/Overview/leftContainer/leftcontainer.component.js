import React from 'react';
import './leftcontainer.scss';
import PropTypes from 'prop-types';
import ImageHolder from './imageholder/imageholder.component.js';
class LeftContainer extends React.Component{

  constructor(props){
    super(props);

  }

  static propTypes = {
    model:PropTypes.any
  }

  render (){
    return (
      <div className="leftCt">
        <ImageHolder style={this.props.style} ThumbnailIndex={this.props.ThumbnailIndex} imageClick={this.props.imageClick} />
      </div>);
  }
}


export default LeftContainer;


