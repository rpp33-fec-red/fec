import React from 'react';
import Model from './model.js';
var model = new Model(false);
import PropTypes from 'prop-types';

class StarsComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rating: 0,
      percentage: 0
    };
    this.convertStar = this.convertStar.bind(this);
    this.getRating = this.getRating.bind(this);
    this.makeStars = this.makeStars.bind(this);
  }
  //props will be product id
  componentDidMount () {
    this.getRating();
  }

  convertStar (rating) {
    let ratingPercentage;
    const int = parseInt(rating);
    const modulo = rating - int;
    if ( modulo >= 0 && modulo < 0.125) {
      ratingPercentage = int;
    } else if ( modulo >= 0.125 && modulo < 0.375 ) {
      ratingPercentage = int + 0.35;
    } else if ( modulo >= 0.375 && modulo < 0.625 ) {
      ratingPercentage = int + 0.45;
    } else if ( modulo >= 0.625 && modulo < 0.875 ) {
      ratingPercentage = int + 0.55;
    } else {
      ratingPercentage = int + 1;
    }
    ratingPercentage = ratingPercentage * 20;
    return ratingPercentage;
  }
  getRating () {
    model.getData(['reviews', `meta?product_id=${this.props.product_id}` ], (data) => {
      const allRatings = data.results.ratings;
      let sum = 0;
      let count = 0;
      for (let val in allRatings) {
        sum += val * allRatings[val];
        count += parseInt(allRatings[val]);
      }
      const rating = sum/count;
      const percentage = this.convertStar(rating);
      if (percentage !== 0) {
        this.setState({ rating: Math.round(sum/count*10)/10, percentage: percentage});
      }
    });
  }
  makeStars(){
    let array =[];
    for(let i=0; i< 5; i++){
      array.push(<svg key={i} className="star" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill='#f8d448' ><g><rect fill="none" height="24" width="24" x="0"/><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" stroke='#646464'/></g></svg> );
    }

    return (
      <div className="starContainer" style={{"display": "inline-flex", "alignItems": "center", "position": "relative", "paddingLeft": "0.5rem"}}>
        <div className="starBase" style={{ "display": "flex", "width": "100%"}}>{array}</div>
        <div className="starOverlay" style={{ "width": `${100-this.state.percentage}%`, "backgroundColor": "white", "mixBlendMode": "color", "opacity": "unset", "position": "absolute", "top": "0", "right": "0", "bottom": "0", "zIndex": "1" }}></div>
      </div>
    );
  }

  render (){

    return (<div className="starComponent" >
      {this.state.percentage === 0 || !this.state.percentage
        ? <div></div>
        : <div>{this.makeStars()}</div>
      }
    </div>);
  }

}

StarsComponent.propTypes = {
  product_id: PropTypes.any
};

export default StarsComponent;