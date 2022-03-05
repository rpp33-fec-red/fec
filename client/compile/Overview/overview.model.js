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
      ThumbnailIndex:0,
      reviews:[],
      ratings:5,
      thumbArray:this.props.ProductData.styles[0].photos,
      image:this.props.ProductData.styles[0].photos[0].url,
      imageIndex: 0
    };
    this.config = {
      'serverURL':'/',
      "testURL":'http://localhost:8080/'
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getRatings = this.getRatings.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.clickImage = this.clickImage.bind(this);
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
    //fix reviews set product id
    Get.getData({path:'/reviews',params:{product_id:id}}, function(data) {
      var reviews = data.data.results;
      that.setState({reviews:reviews});
      that.getRatings();

    });
  }
  clickImage(index){
    this.setState({image:this.state.thumbArray[index].url});
  }
  moveUp(){
    var el = this.state.thumbArray[0];
    var newarray = this.state.thumbArray.slice(1);
    console.log('newarray',newarray);
    newarray.push(el);
    this.setState({thumbArray:newarray});
    this.setState({image:this.state.thumbArray[0].url});
  }
  moveDown(){
    var el = this.state.thumbArray[this.state.thumbArray.length-1];
    var newarray = this.state.thumbArray;
    newarray.pop();
    newarray.unshift(el);
    this.setState({thumbArray:newarray});
    this.setState({image:this.state.thumbArray[0]});
  }

  changeStyle(index){
    this.setState({thumbArray:this.state.product.styles[index].photos});
    this.setState({image:this.state.product.styles[index].photos[0].url});
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
    return <Component ></Component>;
  }



}
export default OverviewModel;