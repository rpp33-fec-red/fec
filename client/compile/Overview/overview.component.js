import React from 'react';
import LeftContainer from './leftContainer/leftcontainer.component.js';
import RightContainer from './rightContainer/rightcontainer.component.js';
import './overview.scss';
import PropTypes from 'prop-types';
import testData from './testProducts.js';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: testData.styles,
      onStyle:0
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    var that = this;
    this.props.getProducts(['products',64620,'styles'], function(data) {
      if ( data.results) {
        console.log(data.results);
        that.setState({ styles: data.results.results});
      }
    });
  }

  render() {
    return (
      <div className = "overview" >
        <LeftContainer style={this.state.styles[this.state.onStyle]}/>
        {/* <RightContainer styleIndex={this.state.styleIndex} onProduct={ this.state.onProduct } /> */}
      </div>);
  }
}
Overview.propTypes = {
  onStyle: PropTypes.any,
  onProduct: PropTypes.any,
  getProducts: PropTypes.any
};
export default Overview;