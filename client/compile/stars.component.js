import React from 'react';
import Model from './model.js';
var model = new Model(false);
import PropTypes from 'prop-types';

class StarsComponent extends React.Component{
  constructor(props){
    super(props);
    this.starWidth = 30;
    this.starMargin = 5;
    this.starContainerWidth = (this.starWidth * 5) + (5 * this.starMargin);
    this.state = {
      percent:70
    };
    this.getRating = this.getRating.bind(this);
    this.makeStars = this.makeStars.bind(this);
  }
  //props will be product id

  componentDidMount(){
    this.getRating();
  }

  getRating () {
    model.getData(['reviews', `meta?product_id=${this.props.product_id}` ], (data) => {
      const allRatings = data.results.ratings;
      console.log('allratings', data);
      let sum = 0;
      let count = 0;
      for (let val in allRatings) {
        sum += val * allRatings[val];
        count += parseInt(allRatings[val]);
      }
      var rating = sum/count;
      //hypothetical rating 4.2
      rating = 4.2;
      var pecent =  4.2/5;
      this.setState({percent:pecent});
    });
  }


  makeStars(){
    let starsarray =[];
    let starsarrayFill=[];
    for(let i=0; i< 5; i++){
      starsarray.push(<svg key={i} style={{width:`${this.starWidth}`,"marginRight":`${this.starMargin}`}}   className="star" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"  fill='#ffffff00' ><g><rect fill="none" x="0"/><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" stroke='#646464'/></g></svg> );
      starsarrayFill.push(<svg key={i} style={{width:`${this.starWidth}`,"marginRight":`${this.starMargin}`}}   className="star" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"  fill='red' ><g><rect fill="none" x="0"/><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" stroke='#646464'/></g></svg> );
    }
    return (
      <div className="starContainer" style={ { position: "relative","display":"block","width":`${this.starContainerWidth}`,"overflow":"hidden"}}>
       <div className="starWrapper overlay" style={{display:"inlineBlock",top:"0px",left:"0px",position:"absolute", "zIndex":0,width:`${this.state.percent}%`,height: "100%"}}>{starsarrayFill}</div>
       <div className="starWrapper" style={{display:"inlineBlock",height: "100%"}}>{starsarray}</div>
      </div>
    );
  }

  render (){

    return (<div className="starComponent" >
      {this.makeStars()}
    </div>);
  }

}

StarsComponent.propTypes = {
  product_id: PropTypes.any
};

export default StarsComponent;