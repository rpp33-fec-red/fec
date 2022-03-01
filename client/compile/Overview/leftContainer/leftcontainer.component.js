import React from 'react';
import './leftcontainer.scss';
import PropTypes from 'prop-types';
import ImageHolder from './imageholder/imageholder.component.js';
class LeftContainer extends React.Component{

  constructor(props){
    super(props);
  }

  static propTypes = {
    image:PropTypes.string,
    imageClick:PropTypes.func,
    style:PropTypes.any
  }

  render (){
    return (
      <div className="leftCt">
        <ImageHolder image={this.props.image} imageClick={this.props.imageClick} photos={this.props.style.photos}/>
      </div>);
  }
}


export default LeftContainer;


