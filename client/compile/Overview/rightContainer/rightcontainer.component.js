import React from 'react';
import './rightcontainer.scss';
import StyleSelector from '../styleSelector.js';

class RightContainer extends React.Component{

  constructor(props){
    super(props);
    console.log(props.productInfo);
  }

  //right container display flex;
  clickedReviews(e){
    //scroll page to reviews section;
    console.log('read all reviews clicked');
  }

  render (){
    return (<div className="rightCt" >

      <div className="main-content">
        <div className="reviewWrapper"><a onClick={this.clickedReviews}>readall reviews</a></div>
        <span className="mediumText">catagory</span>
        <div className="title"> {this.props.productInfo.name}</div>
        <span className="price">$ {this.props.productInfo.original_price}</span>
      </div>
      <div className="style-selectors">
        <StyleSelector changeStyle={this.props.changeStyle} showStyles={true} styles={this.props.styles}> </StyleSelector>
      </div>
      <div className="option-selectors">

      </div>
    </div>);
  }



}
export default RightContainer;