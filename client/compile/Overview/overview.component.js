import React from 'react';
import LeftContainer from './leftContainer/leftcontainer.component.js';
import RightContainer from './rightContainer/rightcontainer.component.js';
import './overview.scss';
import PropTypes from 'prop-types';
import OverviewModel from './overview.model.js';
import Features from './features.component.js';


class Overview extends OverviewModel {

  constructor(props) {
    super(props);
    this.Core = this.Core.bind(this);
  }

  componentDidMount(){
    this.getReviews();
    this.getProductData();
  }

  Core(){
    return (
      <React.Fragment>
        <div className="overview" style={{ backgroundImage:'url(./beach.jpeg)' }}>
          <LeftContainer clickImage={this.clickImage} moveUp={this.moveUp} moveDown={this.moveDown} image={ this.state.image} ThumbnailIndex={this.state.ThumbnailIndex} thumbArray={this.state.thumbArray} imageClick={this.imageClick}/>
          <RightContainer ratings={this.state.ratings} reviews={this.state.reviews.length} changeStyle={this.changeStyle} styles={this.state.product.styles} productInfo={this.state.product.styles[0]}  />
        </div>
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