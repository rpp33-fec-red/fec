import React from 'react';
import testData from './testProducts.js';
import Model from '../model.js';
var model = new Model(false);

class OverviewModel extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      product:testData,
      productId: 64620,
      styleIndex:0,
      ThumbnailIndex:0
    };
    this.getProductData = this.getProductData.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.getProductData();
  }


  getProductData() {
    var that = this;
    var id = this.state.productId;
    model.getData(['products',id], function(data) {
      var product = data.results;
      console.log(product)
      model.getData(['products',id,'styles'], function(data) {
        that.setState({product: Object.assign(product,{styles:data.results.results})});
      });
    });
    console.log(that.state);
  }

  changeStyle(index){
    this.setState({styleIndex:index});
  }
  imageClick(index){
    this.setState({ThumbnailIndex:index});
  }



  addToCart(sku){
    // look through styles of product and find sku get info and put in apu
  }







}
export default OverviewModel;