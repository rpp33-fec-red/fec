import React from 'react';
import PropTypes from 'prop-types';

class StarRatingInput extends React.Component{
  constructor(props){
    super(props);
    this.makeStars = this.makeStars.bind(this);
  }

  makeStars(){
    let array =[];

    for(let i=0; i< 5; i++){
      array.push(
        <div>
          <svg key={i}
            className="star"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill='#f8d448' ><g>
              <rect fill="none" height="24" width="24" x="0"/>
              <polygon onClick={(event) => { this.props.updateStarRating(parseInt(event.target.id)); }} id={i + 1} points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" stroke='#646464'/></g>
          </svg>
          {starRatingDescription}
        </div>
      );
    }

    let description = {
      1: 'Poor',
      2: 'Fair',
      3: 'Average',
      4: 'Good',
      5: 'Great'
    };

    let starRatingDescription = <p>{description[this.props.starRating]}</p>;

    return (
      <div>
        <div className="starContainer" style={{"display": "inline-flex", "alignItems": "center", "position": "relative", "paddingLeft": "0.5rem"}}>
          <div className="starBase" style={{ "display": "flex", "width": "100%"}}>{array}</div>
          <div className="starOverlay" style={{ "width": `${100-(this.props.starRating * 20)}%`, "backgroundColor": "white", "mixBlendMode": "color", "opacity": "unset", "position": "absolute", "top": "0", "right": "0", "bottom": "0", "zIndex": "1", "pointerEvents": "none" }}></div>
        </div>
        {starRatingDescription}
      </div>

    );
  }

  render (){
    return (
      <div className="starComponent">
        <div>{this.makeStars()}</div>
      </div>);
  }

}

StarRatingInput.propTypes = {
  product_id: PropTypes.any,
  ratingSelection: PropTypes.any,
  updateStarRating: PropTypes.any,
  starRating: PropTypes.any
};

export default StarRatingInput;