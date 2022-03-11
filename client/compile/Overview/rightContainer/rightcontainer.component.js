import React from 'react';
import './rightcontainer.scss';
import StyleSelector from '../styleSelector.js';
import PropTypes from 'prop-types';
class RightContainer extends React.Component{

  static propTypes = {
    productInfo:PropTypes.object,
    styles:PropTypes.array,
    changeStyle:PropTypes.func,
    reviews:PropTypes.number
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
    window.scrollTo(0,2800)
  }

  clickSku(){
    var sku = this.data;
    this.setState({maxquantity:sku.quantity});
  }


  range(qty){
    var array=[];
    if (qty > 15){qty =15;}
    for (let i=1; i < qty; i ++){array.push(i);}
    return array;
  }


  render (){

    var ratings =this.props.ratings;
    function ShowStars(){

      var percent = parseInt(ratings/5 *100)*10;
      return (<div className="starCt">
        <div className="stars">
          {[0,1,2,3,4].map(function(index){
            return <svg key={index} className="star" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill='#f8d448' ><g><rect fill="none" height="24" width="24" x="0"><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" stroke='#646464'/></rect></g></svg>;
          })}
        </div>
        <div className="starOverlay" style={{ width: `${ratings}%` ,position:'absolute'}}> </div>

      </div>);

    }



    var that = this;
    function clickQty(){
      that.setState({quantity:this.qty});
    }

    function returnSkus(){
      var arrayOfOptions=[<option key={0}>Select size</option>];
      Object.keys(that.props.productInfo.skus).map((key,index)=>{
        var sku = that.props.productInfo.skus[key];
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
        <div className="reviewWrapper"><a onClick={this.clickedReviews}><ShowStars></ShowStars>readall reviews({this.props.reviews})</a></div>
        <span className="mediumText">Catagory:{this.props.productInfo.category}</span>
        <div className="title"> {this.props.productInfo.name}</div>
        <span className="price">$ {this.props.productInfo.original_price}</span>
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
          { this.state.quantity > 0 ? <button className="addToCart">Add to Cart</button> : null }
          <button className="addFavorite">star</button>
        </div>
      </div>

    </div>);
  }



}
export default RightContainer;