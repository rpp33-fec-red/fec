import React from 'react';
import PropTypes from 'prop-types';

function ReviewProductCharacteristics (props) {
  return (
    <div>
      <label>{props.characteristic}</label>
      <input name="characteristics" type="radio"/>
    </div>
  );
}

ReviewProductCharacteristics.propTypes = {
  characteristic: PropTypes.any
};

export default ReviewProductCharacteristics;