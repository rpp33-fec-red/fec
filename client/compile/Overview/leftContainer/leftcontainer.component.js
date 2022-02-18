import React from 'react';
import './leftcontainer.scss';

import ImageHolder from './imageholder/imageholder.component.js';
class LeftContainer extends React.Component{

  constructor(props){
    super(props)
    console.log(this.props.onStyle)

  }


  render (){
    return (<div className="leftCt">

    <ImageHolder product={this.props.onStyle}/>


    </div>)
  }



}
export default LeftContainer;