import React from 'react';
import './rightcontainer.scss';

import StarsComponent from '../../stars.component.js';

class RightContainer extends React.Component{

  constructor(props){
    super(props);
    console.log(props.onProduct);
  }

  //right container display flex;
  clickedReviews(e){
    //scroll page to reviews section;
    console.log('read all reviews clicked');
  }

  render (){
    return (<div className="rightCt" >

      <div className="main-content">
        <div className="reviewWrapper"><StarsComponent className="star-ct" color={'red'} count={5}></StarsComponent><a onClick={this.clickedReviews}>readall reviews</a></div>
        <span className="mediumText">catagory</span>
        <div className="title"> {this.props.onProduct.name}</div>
        <span className="price">$ {this.props.onProduct.default_price}</span>
      </div>
      <div className="style-selectors">

      </div>
      <div className="option-selectors">

      </div>
    </div>);
  }



}
export default RightContainer;