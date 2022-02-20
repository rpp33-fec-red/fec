import React from 'react';
import PropTypes from 'prop-types';

class StarsComponent extends React.Component{

  constructor(props){
    super(props);
    this.makeStars = this.makeStars.bind(this);
  }

  //right container display flex;
  makeStars(){
    var array =[];
    var count = this.props.count;
    var color = this.props.color;

    for(let i=0; i< count; i++){
      array.push(<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill={color}><g><rect fill="none" height="24" width="24" x="0"/><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/></g></svg> );
    }
    return array;
  }

  render (){

    return (<div className="starCt" >
      {this.makeStars()}
    </div>);
  }

}
StarsComponent.PropTypes = {
  color: PropTypes.string,
  count: PropTypes.number
}
export default StarsComponent;