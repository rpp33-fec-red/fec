import React from 'react';
import './imageholder.scss';
import StyleSelector from '../../styleSelector.js';

function ImageHolder(props){
  console.log(props)

    return (<div className="image-holder">

    <div className="fixed-selector">
    <StyleSelector>

    </StyleSelector>
    </div>

    </div>)




}
export default ImageHolder;