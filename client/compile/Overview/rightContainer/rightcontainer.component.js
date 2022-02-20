import React from 'react';
import './rightcontainer.scss';

import StarsComponent from '../../stars.component.js';

class RightContainer extends React.Component{

  constructor(props){
    super(props);
  }

  //right container display flex;


  render (){
    return (<div className="rightCt" >

      <div className="main-content">
        <StarsComponent color={'red'} count={5}></StarsComponent>
      </div>

      <div className="style-selectors">

      </div>
      <div className="option-selectors">

      </div>
    </div>)
  }



}
export default RightContainer;