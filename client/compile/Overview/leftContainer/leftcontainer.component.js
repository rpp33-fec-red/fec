import React from 'react';
import './leftcontainer.scss';
import PropTypes from 'prop-types';
import ImageHolder from './imageholder/imageholder.component.js';
class LeftContainer extends React.Component{
  static get propTypes() {
    return {
      onStyle: PropTypes.any,
    };
  }
  constructor(props){
    super(props);
    console.log('props LeftCOntainer',props);
    this.images = props.onProduct.styles[props.styleIndex];
  }

  render (){
    return (
      <div className="leftCt">
        <ImageHolder image={this.images}/>
      </div>);
  }
}


export default LeftContainer;


