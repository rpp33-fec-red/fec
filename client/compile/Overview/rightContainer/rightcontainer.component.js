import React from 'react';
import './rightcontainer.scss';
import StyleSelector from '../styleSelector.js';
import PropTypes from 'prop-types';

import ShowStars from '../../showStars.js';

import OptionSelector from './optionselector.js';
import QuantiySelector from './qtyBtnInput.js';

class RightContainer extends React.Component{

  static propTypes = {
    productInfo:PropTypes.object,
    styles:PropTypes.array,
    changeStyle:PropTypes.func,
    reviews:PropTypes.number,
    styleIndex: PropTypes.number,
    ratings: PropTypes.number,
    addToCart: PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {
      sku:null,
      maxquantity:1,
      quantity:1
    };
    this.clickSku = this.clickSku.bind(this);
    this.clickQty = this.clickQty.bind(this);
  }

  clickedReviews() {
    window.scrollTo(0,2800);
  }

  clickSku(sku,max){
    console.log(this.state)

    if (sku === null || sku === undefined){
      max =1;
    }
    this.setState({sku:sku,maxquantity:max},function(){
      console.log(this.state)
    });
  }
  clickQty(qty){
    this.setState({quantity:qty});
  };

  render (){

    var addToCart = this.props.addToCart;

    console.log('renderering right container')

    return (

      <div className="rightCt" >
        <div className="main-content">
          <div className="reviewWrapper"><a onClick={this.clickedReviews}><ShowStars product_id={this.props.productInfo.id}></ShowStars>readall reviews ({this.props.reviews})</a></div>
          <span className="mediumText">Category:{this.props.productInfo.category}</span>
          <div className="title"> {this.props.productInfo.name}</div>
          <span className="price">$ {this.props.styles[this.props.styleIndex].original_price}</span>
        </div>
        <div className="style-selectors">
          <StyleSelector changeStyle={this.props.changeStyle} showStyles={true} styles={this.props.styles} styleIndex={this.props.styleIndex} > </StyleSelector>
        </div>
        <div className="option-selectors">
          <div className="selector">
            <OptionSelector clickSku={this.clickSku}  styles={this.props.styles} styleIndex={this.props.styleIndex}></OptionSelector>
            <QuantiySelector maxquantity={this.state.maxquantity} clickQty={this.clickQty}></QuantiySelector>
          </div>
          <div className="selector">
            { this.state.quantity > 0 ? <button className="addToCart" onClick={()=>{ if (this.state.sku !== null && this.state.sku !== undefined){addToCart(this.props.styles[this.props.styleIndex].style_id,this.state.quantity);}}}>Add to Cart</button> : null }
            <button className="addFavorite">star</button>
          </div>
        </div>
      </div>);
  }



}
export default RightContainer;