import React from 'react';
import testData from './testProducts.js';
import $ from 'jquery';



class OverviewModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product:testData,
      productId: 64620,
      styleIndex:0,
      ThumbnailIndex:0,
      reviews:0
    };
    this.config = {
      'serverURL':'/',
      "testURL":'http://localhost:8080/'
    };
    this.getProductData = this.getProductData.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getData = this.getData.bind(this);
    this.compareOptions = this.compareOptions.bind(this);

  }



  checkURL(data) {
    var errorcheck = null;
    if (typeof data !== 'string'){
      errorcheck = "path is not a string please make sure the path is passed in the options";
    }
    if (data[data.length -1] === '/'){
      errorcheck = 'make sure the path does not end with / please remove it should look like get/19191/styles';
    }
    if (errorcheck !== null){
      throw new Error(errorcheck);
    }
  }
  checkParams(data){
    var errorcheck = null;
    if (typeof data !== 'object' || Array.isArray(data)){
      errorcheck = "params accepts a object of params  options:{params:{product_id:4}}";
    }
    if (data === undefined){
      errorcheck = null;
    }
    if (errorcheck !== null){
      throw new Error(errorcheck);
    }
  }

  compareOptions(options){
    Object.keys(options).forEach(key=>{
      switch (key ){
      case 'path': this.checkURL(options[key]);
        break;
      case 'params': this.checkParams(options[key]);
        break;
      }
    });
  }

  getData(options,callback){
    this.compareOptions(options);
    if (options.params === undefined){
      options.params = {};
    }
    options.params['path'] = options.path;
    if (options.path === undefined){
      options.path = '';
    }
    var url = this.config.serverURL+'getDatav2?' + $.param(options.params);
    var ajaxoptions = {
      url: url,
      method: 'GET',
      contentType:'application/json',
      success: function(info){
        if (info){
          callback(info);
        } else {
          throw new Error('there is no data send back please fix your error!');
        }
      }
    };
    $.ajax(ajaxoptions);

  }

  getProductData() {
    var that = this;
    var id = this.state.productId;
    this.getData({path:'/products/'+id}, function(data) {
      var product = data.data;
      that.getData({path:'/products/'+id+'/styles'}, function(data) {
        that.setState({product: Object.assign(product,{styles:data.data.results})});
      });
    });
  }

  getReviews(){
    var that = this;
    var id = this.state.productId;
    that.getData({path:'/reviews',params:{product_id:id}}, function(data) {
      var reviews = data.data.results;
      var count =reviews.length -1;
      console.log('count',count);
      that.setState({reviews:count});
    });
  }

  changeStyle(index){
    this.setState({styleIndex:index});
  }

  imageClick(index){
    this.setState({ThumbnailIndex:index});
  }

  scrollToReviews(){

  }

  addToCart() {
    // look through styles of product and find sku get info and put in apu
  }

  getComponent(Component) {
    return <Component model={this} ></Component>;
  }



}
export default OverviewModel;