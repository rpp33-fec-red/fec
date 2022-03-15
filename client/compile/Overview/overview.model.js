import React from 'react';
import testData from './testProducts.js';
import $ from 'jquery';
import GetRequests from '../getRequests.js';
import PropTypes from 'prop-types';

var Get = new GetRequests();

class OverviewModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product:testData,
      productId: this.props.productId,
      ThumbnailIndex:0,
      reviews:[],
      ratings:5,
      styleIndex: 0,
      styles:testData.styles,
      thumbArray:testData.styles[0].photos,
      image:testData.styles[0].photos[0].url,
      imageIndex: 0,
      expandImage:false
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
    this.getProductData = this.getProductData.bind(this);
  }

  static propTypes = {
    productId:PropTypes.number
  }

  getRatings(){
    //get rid of later
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
      that.setState({reviews:reviews});
      that.getRatings();
    });
  }

  addToCart(sku,qty){


  }

  clickImage(index){
    this.setState({image:this.state.thumbArray[index].url,ThumbnailIndex:index});
  }
  moveUp(){
    var el = this.state.thumbArray[0];
    var newarray = this.state.thumbArray.slice(1);
    newarray.push(el);
    this.setState({thumbArray:newarray,image:newarray[0].url});
    this.setState({});
  }
  moveDown(){
    var newarray = this.state.thumbArray.slice(0);
    var el = newarray.pop();
    newarray.unshift(el);
    this.setState({thumbArray:newarray,image: newarray[0].url});
  }
  getProductData(){
    var id = this.state.productId;
    var that = this;
    Get.getProductData(id, function(data) {
      that.setState({product:data.product,styles:data.product.styles, image:data.product.styles[0].photos[0].url,ThumbnailIndex:0,thumbArray:data.product.styles[0].photos,imageIndex:0,ratings:5},function(){
      });
      that.getReviews();
    });
  }

  changeStyle(index){
    this.setState({thumbArray:this.state.styles[index].photos});
    this.setState({image:this.state.styles[index].photos[this.state.ThumbnailIndex].url,styleIndex:index});

  }

  imageClick(index){
    this.setState({ThumbnailIndex:index});
  }

  scrollToReviews(){

  }

  getComponent(Component) {
    return <Component ></Component>;
  }



}
export default OverviewModel;