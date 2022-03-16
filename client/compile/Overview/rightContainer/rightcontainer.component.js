import React from 'react';
import './rightcontainer.scss';
import StyleSelector from '../styleSelector.js';
import PropTypes from 'prop-types';

import ShowStars from '../../showStars.js';
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
  }

  clickedReviews() {
    window.scrollTo(0,2800);
  }

  clickSku(){
    var sku = this.data;
    this.setState({maxquantity:sku.quantity,sku:sku});
  }

  range(qty){
    var array=[];
    if (qty > 15){qty =15;}
    for (let i=1; i < qty; i ++){array.push(i);}
    return array;
  }

  render (){

    var that = this;
    function clickQty(){
      that.setState({quantity:this.qty});
    }
    var addToCart = this.props.addToCart;

    function returnSkus(){
      var arrayOfOptions=[<option key={0}>Select size</option>];
      Object.keys(that.props.styles[that.props.styleIndex].skus).map((key,index)=>{
        var sku = that.props.styles[that.props.styleIndex].skus[key];
        if (index === 0){
          that.state.maxquantity=sku.quantity;
        }
        if (sku.quantity > 0){
          arrayOfOptions.push(<option onClick={that.clickSku.bind({data:sku})} key={key+1}>{sku.size}</option>);
        }
      });
      if (arrayOfOptions.length > 0){
        return arrayOfOptions;
      } else {
        return <option>OUT OF STOCk</option>;
      }
    }


    return (<div className="rightCt" >
      <div className="main-content">
        <div className="reviewWrapper"><a onClick={this.clickedReviews}><ShowStars product_id={this.props.productInfo.id}></ShowStars>readall reviews ({this.props.reviews})</a></div>
        <span className="mediumText">Category:{this.props.productInfo.category}</span>
        <div className="title"> {this.props.productInfo.name}</div>
        <span className="price">$ {that.props.styles[that.props.styleIndex].original_price}</span>
      </div>
      <div className="style-selectors">
        <StyleSelector changeStyle={this.props.changeStyle} showStyles={true} styles={this.props.styles} styleIndex={this.props.styleIndex} > </StyleSelector>
      </div>
      <div className="option-selectors">
        <div className="selector">
          <label htmlFor="styles">Choose a style_id:</label>
          <select className="drop-down sku-dropdown" name="styles" id="styles">
            {returnSkus()}
          </select>
          <select className="drop-down" name="qty" id="qty">
            {
              that.range(that.state.maxquantity).map((qty)=>{
                return <option onClick={clickQty.bind({qty:qty})} key={qty}>{qty}</option>;
              })
            }
          </select>
        </div>
        <div className="selector">
          { this.state.quantity > 0 ? <button className="addToCart" onClick={function(){ if (that.state.sku !== null && that.state.sku !== undefined){addToCart(that.props.styles[that.props.styleIndex].style_id,that.state.quantity)}}}>Add to Cart</button> : null }
          <button className="addFavorite">star</button>
        </div>
      </div>

    </div>);
  }



}
export default RightContainer;