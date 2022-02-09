import React from 'react';
// import './leftcontainer.scss';

import ImageHolder from './imageholder/imageholder.component.js';
class LeftContainer extends React.Component{

  constructor(props){
    super(props)

  }


  render (){
    return (<div className="leftCt">

    <ImageHolder product={this.props.product}/>


    </div>)
  }



}
export default LeftContainer;