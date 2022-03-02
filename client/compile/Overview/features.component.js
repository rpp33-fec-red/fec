import React from 'react';


function Features(props){

  return props.product.features.map(function(feature,index) {
    return <li key={index}> <span> {feature.feature}</span><span> {feature.value}</span></li>;
  });

}
Features.propTypes = {

};
export default Features;