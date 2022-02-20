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
    this.image = props.onProduct.styles[props.styleIndex].photos[0];
  }

  render (){
    return (
      <div className="leftCt">
        <ImageHolder image={this.image}/>
      </div>);
  }
}


export default LeftContainer;


