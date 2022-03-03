import React from 'react';
<<<<<<< HEAD
import {getCharacteristicsDescriptions} from '../../helpers.js';
=======
>>>>>>> 5ccae30fc28aa14f0b30218cf0e268788af916ed
import PropTypes from 'prop-types';

function ReviewCharacteristicRadioButton (props) {

  // Determines what descriptions to show based on the characteristic
<<<<<<< HEAD
  const valueDescriptions = getCharacteristicsDescriptions(props.characteristic);

=======
  let valueDescriptions;
  switch(props.characteristic){
  case 'Size':
    valueDescriptions = {
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too big',
      5: 'A size too wide'
    };
    break;
  case 'Width':
    valueDescriptions = {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide'
    };
    break;
  case 'Comfort':
    valueDescriptions = {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect'
    };
    break;
  case 'Quality':
    valueDescriptions = {
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect'
    };
    break;
  case 'Length':
    valueDescriptions = {
      1: 'Runs Short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    };
    break;
  case 'Fit':
    valueDescriptions = {
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    };
    break;
  }
>>>>>>> 5ccae30fc28aa14f0b30218cf0e268788af916ed

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