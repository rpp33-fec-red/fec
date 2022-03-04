import React from 'react';
import testData from './testProducts.js';
import $ from 'jquery';
import GetRequests from '../getRequests.js';
var Get = new GetRequests();

class OverviewModel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product:this.props.ProductData,
      productId: 64620,
      styleIndex:0,
      ThumbnailIndex:0,
      reviews:[],
      ratings:5
    };
    this.config = {
      'serverURL':'/',
      "testURL":'http://localhost:8080/'
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getRatings = this.getRatings.bind(this);
  }

  getRatings(){
    var count =0;
    if (this.state.reviews.length >0){
      this.state.reviews.forEach((review,index)=>{
        if (index === 0){
          count+=4;
        } else {
          count+=review.rating;
        }
      });
      this.setState({ratings:parseFloat(count/this.state.reviews.length)});
    }
  }



  getReviews(){
    var that = this;
    var id = this.state.productId;
    Get.getData({path:'/reviews',params:{product_id:id}}, function(data) {
      var reviews = data.data.results;
      console.log(reviews);
      that.setState({reviews:reviews});
      that.getRatings();

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