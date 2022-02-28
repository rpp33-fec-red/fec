import React from 'react';
import PropTypes from 'prop-types';

function ReviewCharacteristicRadioButton (props) {

  // Determines what descriptions to show based on the characteristic
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

  // Sets the description based on the value
  let ratingDescription;
  const valueDescription = valueDescriptions[props.value];
  props.descriptionShown ? ratingDescription = <div>{valueDescription}</div> : <div>   </div>;

  return (
    <div>
      {ratingDescription}
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