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
      onstyle:testData.styles[0]
    };
    this.getData = this.getData.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    var that = this;
    this.props.getProducts(['products',64620,'styles'], function(data) {
      if ( data.results) {
        console.log(data.results);
        that.setState({ styles: data.results.results, onstyle:data.results.results[0]});
      }
    });
  }
  changeStyle(index){
    var onstyle = this.state.styles[index];
    console.log(this);
    console.log(onstyle);
    console.log(this.state)
    this.setState({onstyle:onstyle});
  }
  render() {
    return (
      <div className = "overview" >
        <LeftContainer style={this.state.onstyle}/>
        <RightContainer changeStyle={this.changeStyle} styles={this.state.styles} productInfo={this.state.onstyle} />
      </div>);
  }
}
Overview.propTypes = {
  onStyle: PropTypes.any,
  onProduct: PropTypes.any,
  getProducts: PropTypes.any
};
export default Overview;