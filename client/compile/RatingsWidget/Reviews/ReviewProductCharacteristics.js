import React from 'react';
import PropTypes from 'prop-types';

function ReviewProductCharacteristics (props) {
  return (
    <div>
      <label>{props.characteristics}</label>
      <input name="characteristics" type="radio"/>
    </div>
  );
}

ReviewProductCharacteristics.propTypes = {
  characteristics: PropTypes.any
};

export default ReviewProductCharacteristics;