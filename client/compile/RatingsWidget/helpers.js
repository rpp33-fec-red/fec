const validateFields = (formData, applicableCharacteristics, rating, files) => {
  let success = true;
  let formFields = {};
  const mandatoryFields = ['body', 'summary', 'email', 'nickname'];

  for (const [key, value] of formData.entries()) {
    formFields[key] = value;
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
  for (const field in formFields) {

    if (mandatoryFields.indexOf(field) !== -1 && formFields[field].length === 0) {
      addToErrorMessage(field);
    }
  }

  // checks if all characteristic fields are filled out and compiles error message
  for (var characteristic in applicableCharacteristics) {
    const characteristicId = applicableCharacteristics[characteristic].id;
    if (!formFields[characteristicId]) {
      addToErrorMessage(characteristic.toLowerCase());
    }
  }

  // checks if review body is less than 50 characters
  if (formFields.body.length < 50 && errorMessage.indexOf('body') === -1) {
    const characterCountError = 'more than 50 characters in your review body';
    addToErrorMessage(characterCountError);
  }

  // checks if email address is valid
  if (!formFields.email.includes('@') && !formFields.email.includes('.com') && errorMessage.indexOf('email') === -1) {
    const characterCountError = 'valid email address';
    addToErrorMessage(characterCountError);
  }

  // if no star rating provided
  if (rating === 0) {
    addToErrorMessage('rating');
  }

  // image count validatation [in-progress]
  if (files.length > 5) {
    addToErrorMessage('5 or less photos');
  }

  if (success) {
    const successMessage = 'Your review has been submitted.';
    return successMessage;
  } else {
    return errorMessage;
  }

};

const formatReviewData = (fields, applicableCharacteristics, starRating, product_id) => {

  // Converts characteristic rating details into format that works with the API ("rating_id": rating - ex: {"14": 5, "15": 5 //...})
  let reviewCharRating = {};
  for (var characteristic in applicableCharacteristics) {
    const characteristicRating_id = applicableCharacteristics[characteristic].id;
    const characteristicRating = event.target.elements[characteristic].value;
    reviewCharRating[characteristicRating_id] = parseInt(characteristicRating);
  }

  const recommend = fields.recommend.value === 'true' ? true : false;
  const summary = fields.summary.value;
  const body = fields.body.value;
  const name = fields.nickname.value;
  const email = fields.email.value;

  const reviewData = {
    product_id: product_id,
    rating: starRating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: [''],
    characteristics: reviewCharRating
  };

  return reviewData;
};

const getCharacteristicsDescriptions = (characteristic) => {
  let valueDescriptions;
  switch(characteristic){
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
  return valueDescriptions;
};

const calculateRatingMetrics = (ratings) => {
  let weightedSum = 0;
  let count = 0;
  let ratingsPercentage = {};

  for (let val in ratings) {
    weightedSum += val * ratings[val];
    count += parseInt(ratings[val]);
  }

  for (let val in ratings) {
    ratingsPercentage[val] = (parseInt(ratings[val]) / count) * 100;
  }

  const averageRating = (Math.round((weightedSum/count) * 4) / 4).toFixed(2);

  const ratingsMetrics = {
    averageRating: averageRating,
    ratingsPercentage: ratingsPercentage
  };

  return ratingsMetrics;
};

export {validateFields, formatReviewData, getCharacteristicsDescriptions, calculateRatingMetrics};
