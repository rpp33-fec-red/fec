const validateFields = (fields, applicableCharacteristics, rating) => {
  let success = true;

  const mandatoryFields = {
    recommend: fields.recommend.value,
    summary: fields.summary.value,
    body: fields.body.value,
    name: fields.nickname.value,
    email: fields.email.value
  };

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
