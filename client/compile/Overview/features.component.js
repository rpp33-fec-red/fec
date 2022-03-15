import React from 'react';

import PropTypes from 'prop-types';

function Features(props){
  return props.features.map(function(feature,index) {
    return <li key={index}> <span> {feature.feature}</span><span> {feature.value}</span></li>;
  });
}
Features.propTypes = {
  features:PropTypes.array
};
export default Features;