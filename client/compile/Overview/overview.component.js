import React from 'react';
import LeftContainer from './leftContainer/leftcontainer.component.js';
import RightContainer from './rightContainer/rightcontainer.component.js';
import './overview.scss';
import PropTypes from 'prop-types';
import testProduct from './testProducts.json';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onProduct: testProduct,
      styleIndex: 0
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    var that = this;
    this.props.getProducts('GET', ['products', 64620, 'styles'], function(data) {
      // that.setState({ onProduct: data.results });
      if ( data.results) {
        var newOnProduct = that.state.onProduct;
        newOnProduct.styles = data.results;
        that.setState({ onProduct: newOnProduct });
      }
      // window.location = 'http://localhost:8080/?productid=499434';
    });
  }

  render() {
    return (
      <div className = "overview" >
        <LeftContainer styleIndex={this.state.styleIndex} onProduct={ this.state.onProduct } />
        <RightContainer styleIndex={this.state.styleIndex} onProduct={ this.state.onProduct } />
      </div>);
  }
}
Overview.propTypes = {
  onStyle: PropTypes.any,
  onProduct: PropTypes.any,
  getProducts: PropTypes.any
};
export default Overview;