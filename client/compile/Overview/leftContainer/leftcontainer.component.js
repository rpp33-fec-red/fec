import React from 'react';
import './leftcontainer.scss';
import PropTypes from 'prop-types';
import ImageHolder from './imageholder/imageholder.component.js';
class LeftContainer extends React.Component{
  static get propTypes() {
    return {
      style: PropTypes.any,
    };
  }
  constructor(props){
    super(props);
    console.log('props LeftCOntainer',props);
    this.photos = this.props.style.photos;
  }

  render (){
    return (
      <div className="leftCt">
        <ImageHolder photos={this.photos}/>
      </div>);
  }
}


export default LeftContainer;


