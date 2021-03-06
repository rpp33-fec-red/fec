/* eslint-disable no-undef */
import React from 'react';

function createStarComponent (starRating, clickHandler) {
  return class StarReviewRating extends React.Component{
    constructor(props){
      super(props);
    }

    makeStars(){
      let array =[];
      for(let i=0; i< 5; i++){
        array.push(<svg key={i}
          className="star"
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 15 15" height="15" viewBox="0 0 15 15" width="15" fill='#f8d448' ><g>
            <rect fill="none" height="15" width="15" x="0"/>
            <polygon
              onClick={(event) => { clickHandler ? clickHandler(parseInt(event.target.id)) : null; }}
              id={i + 1}
              points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"
              stroke='#646464'
              transform="scale(.60)"/></g></svg> );
      }

      let description = {
        1: 'Poor',
        2: 'Fair',
        3: 'Average',
        4: 'Good',
        5: 'Great'
      };

      let starRatingDescription = clickHandler ? <p>{description[starRating]}</p> : null;

      return (
        <div className="star-rating-input">
          <div className="starContainer" style={{"display": "inline-flex", "alignItems": "center", "position": "relative"}}>
            <div className="starBase" style={{ "display": "flex", "width": "100%"}}>{array}</div>
            <div className="starOverlay" style={{ "width": `${100-(starRating * 20)}%`, "backgroundColor": "white", "mixBlendMode": "color", "opacity": "unset", "position": "absolute", "top": "0", "right": "0", "bottom": "0", "zIndex": "1", "pointerEvents": "none" }}></div>
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
  };
}

export default createStarComponent;