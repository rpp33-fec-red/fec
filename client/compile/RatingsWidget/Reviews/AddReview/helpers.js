const validateFields = (formData, applicableCharacteristics, rating) => {
  let success = true;

  const entries = formData.entries();
  const mandatoryFields = {};
  for(var pair of entries) {
    mandatoryFields[pair[0]] = pair[1];
  }

  let errorMessage = 'You must enter the following:';

  const addToErrorMessage = (message) => {
    if (success === true) {
      success = false;
    }
    const lastCharacter = errorMessage.charAt(errorMessage.length - 1);
    if (lastCharacter === ':') {
      errorMessage += ' ' + message;
      return;
    }
    errorMessage += ', ' + message;
  };

  // checks if all mandatory fields (expect for characteristics) are filled out and compiles error message
  for (const field in mandatoryFields) {
    if (!mandatoryFields[field] && field !== 'characteristics') {
      addToErrorMessage(field);
    }
  }

  // checks if all characteristic fields are filled out and compiles error message
  for (var characteristic in applicableCharacteristics) {
    const characteristicRating = fields[characteristic].value;
    if (!characteristicRating) {
      addToErrorMessage(characteristic);
    }
  }

  // checks if review body is less than 50 characters
  if (mandatoryFields.body.length < 50 && errorMessage.indexOf('body') === -1) {
    const characterCountError = 'more than 50 characters in your review body';
    addToErrorMessage(characterCountError);
  }

  // checks if email address is valid
  if (!mandatoryFields.email.includes('@') && !mandatoryFields.email.includes('.com') && errorMessage.indexOf('email') === -1) {
    const characterCountError = 'valid email address';
    addToErrorMessage(characterCountError);
  }

  // if no star rating provided
  if (rating === 0) {
    addToErrorMessage(rating);
  }

  // adding image validatation [in-progress]


  if (success) {
    const successMessage = 'Your review has been submitted.';
    return successMessage;
  } else {
    return errorMessage;
  }

};

export {validateFields};
