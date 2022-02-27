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
      onstyle:testData.styles[0],
      image:testData.styles[0].photos[0].url,
      showBigImage:false
    };
    this.getData = this.getData.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.imageClick = this.imageClick.bind(this)
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    var that = this;
    this.props.getProducts(['products',64620,'styles'], function(data) {
      if ( data.results) {
        console.log(data.results);
        that.setState({ styles: data.results.results, onstyle:data.results.results[0],image:data.results.results[0].photos[0].url});
      }
    });
  }
  changeStyle(index){
    var onstyle = this.state.styles[index];
    this.setState({onstyle:onstyle,image:onstyle.photos[0].url});
  }
  imageClick(index){
    console.log('ssfs',this.state.onstyle.photos[index].thumbnail_url)
    var image = this.state.onstyle.photos[index].url;
    this.setState({image:image});
  }

  render() {
    return (
      <div className = "overview" >
        <LeftContainer image={this.state.image} imageClick={this.imageClick}  style={this.state.onstyle}/>
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