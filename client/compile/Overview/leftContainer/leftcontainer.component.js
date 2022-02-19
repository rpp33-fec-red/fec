import React from 'react';
import './leftcontainer.scss';
import PropTypes from 'prop-types';
import ImageHolder from './imageholder/imageholder.component.js';
class LeftContainer extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.onStyle);

  }

  render (){
    return (
      <div className="leftCt">
        <ImageHolder product={this.props.onStyle}/>
      </div>);
  }
}
LeftContainer.propTypes = {
  onStyle: PropTypes.any,
};
export default LeftContainer;


