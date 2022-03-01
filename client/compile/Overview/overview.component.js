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
      productquery:64620,
      styles: testData.styles,
      onstyle:Object.assign(testData.styles[0],testData),
      image:testData.styles[0].photos[0].url,
      showBigImage:false,
    };
    console.log(this.state.onstyle.description);
    this.getData = this.getData.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.imageClick = this.imageClick.bind(this);
    this.returnFeatures = this.returnFeatures.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    var that = this;
    this.props.getProducts(['products',this.state.productquery,'styles'], function(data) {
      if ( data.results) {
        that.setState({ styles: data.results.results, onstyle:data.results.results[0],image:data.results.results[0].photos[0].url});
      }
      that.props.getProducts(['products',that.state.productquery], function(data) {
        if ( data.results) {
          var arrayOfStyles = that.state.styles.map(style=>{
            // console.log(data.results);
            return Object.assign(style,data.results);
          });
          that.setState({ styles: arrayOfStyles, onstyle:that.state.styles[0],image:that.state.styles[0].photos[0].url});
        }
      });
    });
  }

  changeStyle(index){
    var onstyle = this.state.styles[index];
    this.setState({onstyle:onstyle,image:onstyle.photos[0].url});
  }

  imageClick(index){
    var image = this.state.onstyle.photos[index].url;
    this.setState({image:image});
  }

  returnFeatures(){
    return this.state.onstyle.features.map(function(feature,index){
      return <li key={index}> <span> {feature.feature}</span><span> {feature.value}</span></li>;
    });
  }

  render() {
    return (<React.Fragment>
      <div className = "overview" >
        <LeftContainer image={this.state.image} imageClick={this.imageClick}  style={this.state.onstyle}/>
        <RightContainer changeStyle={this.changeStyle} styles={this.state.styles} productInfo={this.state.onstyle} />
      </div>
      <p>{this.state.onstyle.description}</p>
      <ul>
        { Array.isArray(this.state.onstyle.features) ?  this.returnFeatures(): null }
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