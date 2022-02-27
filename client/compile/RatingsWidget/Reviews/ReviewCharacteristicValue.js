import React from 'react';
import PropTypes from 'prop-types';

function ReviewCharacteristicValue (props) {
  let ratingDescription;
  props.descriptionShown ? ratingDescription = <div> hello!</div> : null;
  return (
    <div>
      <label htmlFor={props.characteristic}>{props.value}</label>
      <input name={props.characteristic} type="radio" value={props.value} onClick={props.showDescription}/>
      {ratingDescription}
    </div>
  );
}

ReviewCharacteristicValue.propTypes = {
  characteristic: PropTypes.any,
  value: PropTypes.any,
  showDescription: PropTypes.any,
  descriptionShown: PropTypes.any
};

export default ReviewCharacteristicValue;