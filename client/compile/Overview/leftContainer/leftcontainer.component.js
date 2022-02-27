import React from 'react';
import './leftcontainer.scss';
import PropTypes from 'prop-types';
import ImageHolder from './imageholder/imageholder.component.js';
class LeftContainer extends React.Component{

  constructor(props){
    super(props);
    console.log('props LeftCOntainer',props);
  }

  render (){
    return (
      <div className="leftCt">
        <ImageHolder photos={this.props.style.photos}/>
      </div>);
  }
}


export default LeftContainer;


