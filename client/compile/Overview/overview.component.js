import React from 'react';
import LeftContainer from './leftContainer/leftcontainer.component.js';
import RightContainer from './rightContainer/rightcontainer.component.js';
import './overview.scss';
import PropTypes from 'prop-types';
import OverviewModel from './overview.model.js';
import Features from './features.component.js';
import $ from 'jquery';
// import { PutObjectCommand, CreateBucketCommand } from "@aws-sdk/client-s3";

// import { S3Client } from "@aws-sdk/client-s3";
// // Set the AWS Region.
// const REGION = "us-east-1"; //e.g. "us-east-1"
// // Create an Amazon S3 service client object.
// const s3Client = new S3Client({ region: REGION });

// // var data =
// // const params = {
// //   Bucket: "fecbucket13", // The name of the bucket. For example, 'sample_bucket_101'.
// //   Key: "beach.png", // The name of the object. For example, 'sample_upload.txt'.
// //   Body: data, // The content of the object. For example, 'Hello world!".
// // };



class Overview extends OverviewModel {

  constructor(props) {
    super(props);
    this.Core = this.Core.bind(this);
  }

  componentDidMount(){
    this.getReviews();
    this.getProductData();
    var that = this;
    $('<img/>').attr('src', './beach.avif').on('load', function() {
      that.setState({backgroundImage:'./beach.avif'});
      $(this).remove();
    }).on("error",()=>{
      that.setState({backgroundImage:'./beach.jpeg'});
    });
  }


  Core(){

    return (
      <React.Fragment>
        <div className="overview" style={{ backgroundImage:'url('+this.state.backgroundImage+')'}}>
          <LeftContainer  clickImage={this.clickImage} moveUp={this.moveUp} moveDown={this.moveDown} image={ this.state.image} ThumbnailIndex={this.state.ThumbnailIndex} thumbArray={this.state.thumbArray} expandImage={this.expandImage}/>
          <RightContainer ratings={this.state.ratings} reviews={this.state.reviews.length} changeStyle={this.changeStyle} styleIndex={this.state.styleIndex} styles={this.state.styles} productInfo={this.state.product}  />
        </div>
        <p>{this.state.product.slogan}</p>

        <p>{this.state.product.description}</p>

        <ul>
          { Array.isArray(this.state.product.features) ?  <Features features={this.state.product.features}></Features>: null }
        </ul>
      </React.Fragment>
    );

  }

  render(){
    return this.getComponent(this.Core);
  }
}

Overview.propTypes = {
  model:PropTypes.any
};
export default Overview;