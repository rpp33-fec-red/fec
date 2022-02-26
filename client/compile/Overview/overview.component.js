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
<<<<<<< HEAD
    this.props.getProducts('GET', ['products', 64620, 'styles'], function(data) {
      that.setState({ onProduct: data.results });
      if ( data.results) {
        var replicated =  this.state.onProduct;
        replicated.styles = data.results.results;
        that.setState({ onProduct: replicated });
=======
    this.props.getProducts({path:'products/'+64620+'/styles',params:{}}, function(data) {
      // that.setState({ onProduct: data.results });
      if ( data.results) {
        console.log(data.results)
        var newOnProduct = that.state.onProduct;
        newOnProduct.styles = data.results;
        that.setState({ onProduct: newOnProduct });
>>>>>>> 37a40a20c8dee18c563fcc2ee60389b1cae99088
      }
      // window.location = 'http://localhost:8080/?productid=499434';
    });
  }

  render() {
    return (
      <div className = "overview" >
        <LeftContainer styleIndex={this.state.styleIndex} onProduct={ this.state.onProduct } />
<<<<<<< HEAD
        <RightContainer/>
=======
        <RightContainer styleIndex={this.state.styleIndex} onProduct={ this.state.onProduct } />
>>>>>>> 37a40a20c8dee18c563fcc2ee60389b1cae99088
      </div>);
  }
}
Overview.propTypes = {
  onStyle: PropTypes.any,
  onProduct: PropTypes.any,
  getProducts: PropTypes.any
};
export default Overview;