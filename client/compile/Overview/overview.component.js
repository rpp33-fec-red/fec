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
    this.getProductData();
    this.getReviews();
  }

  Core(props){
    console.log(this.state.reviews)
    return (
      <React.Fragment>
        <div className="overview">
          <LeftContainer style={this.state.product.styles[this.state.styleIndex]} ThumbnailIndex={this.state.ThumbnailIndex} imageClick={this.imageClick}/>
          <RightContainer reviews={this.state.reviews} changeStyle={this.changeStyle} styles={this.state.product.styles} productInfo={this.state.product.styles[0]} styleIndex={this.state.styleIndex} />
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