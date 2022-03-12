import React from 'react';
import LeftContainer from './leftContainer/leftcontainer.component.js';
import RightContainer from './rightContainer/rightcontainer.component.js';
import './overview.scss';
import PropTypes from 'prop-types';
import OverviewModel from './overview.model.js';
import Features from './features.component.js';
import $ from 'jquery';



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