import React from 'react';
import {getCharacteristicsDescriptions} from '../../helpers.js';
import PropTypes from 'prop-types';

function ReviewCharacteristicRadioButton (props) {

  // Determines what descriptions to show based on the characteristic
  const valueDescriptions = getCharacteristicsDescriptions(props.characteristic);


  // Sets the description based on the characteristic and the rating selected
  const valueDescription = <div>{valueDescriptions[props.value]}</div>;

  return (
    <div>
      {props.descriptionShown ? valueDescription : <div></div>}
      <label htmlFor={props.characteristic}>{props.value}</label>
      <input name={props.characteristic} type="radio" value={props.value} onClick={props.showDescription} />
    </div>
  );
}

ReviewCharacteristicRadioButton.propTypes = {
  characteristic: PropTypes.any,
  value: PropTypes.any,
  showDescription: PropTypes.any,
  descriptionShown: PropTypes.any
};

export default ReviewCharacteristicRadioButton;