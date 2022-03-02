import React from 'react';
import LeftContainer from './leftContainer/leftcontainer.component.js';
import RightContainer from './rightContainer/rightcontainer.component.js';
import './overview.scss';
import PropTypes from 'prop-types';
import testData from './testProducts.js';
import OverviewModel from './overview.model.js';
import Features from './features.component.js';
class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.model = new OverviewModel(props);
  }

  render() {
    return (<React.Fragment>
      <div className = "overview" >
       <LeftContainer model={this.model}/>
        {/* <LeftContainer image={this.model.state.image} imageClick={this.model.imageClick}  style={this.state.product}/> */}
        <RightContainer changeStyle={this.changeStyle} styles={this.model.state.product.styles} productInfo={this.model.state.product.styles[0]} />
      </div>
      <p>{this.model.state.product.description}</p>
      <ul>
        { Array.isArray(this.model.state.product.stylesonstyle.features) ?  <Features product={this.model.state.product}></Features>: null }
      </ul>
    </React.Fragment>
    );
  }
}

Overview.propTypes = {
  onStyle: PropTypes.any,
  onProduct: PropTypes.any,
  getProducts: PropTypes.any
};
export default Overview;