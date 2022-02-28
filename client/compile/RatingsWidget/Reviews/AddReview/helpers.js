const validateFields = (fields, applicableCharacteristics) => {

  const mandatoryFields = {
    rating: fields.rating.value,
    recommend: fields.recommend.value,
    summary: fields.summary.value,
    body: fields.body.value,
    name: fields.nickname.value,
    email: fields.email.value
  };

  let errorMessage = 'You must enter the following:';
  const addToErrorMessage = (field) => {
    const lastCharacter = errorMessage.charAt(errorMessage.length - 1);
    if (lastCharacter === ':') {
      errorMessage += ' ' + field;
      return errorMessage;
    }
    errorMessage += ', ' + field;
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
  return errorMessage;
};

// const formatReviewData = () => {
//   // Converts characteristic rating details into format that works with the API ("rating_id": rating - ex: {"14": 5, "15": 5 //...})
//   let reviewCharRating = {};
//   const applicableCharacteristics = props.reviewsCharacteristics;
//   for (var characteristic in applicableCharacteristics) {
//     const characteristicRating_id = applicableCharacteristics[characteristic].id;
//     const characteristicRating = event.target.elements[characteristic].value;
//     reviewCharRating[characteristicRating_id] = parseInt(characteristicRating);
//   }

// const rating = parseInt(event.target.elements.rating.value);
// const recommend = event.target.elements.recommend.value === 'true' ? true : false;
// const summary = event.target.elements.summary.value;
// const body = event.target.elements.body.value;
// const name = event.target.elements.nickname.value;
// const email = event.target.elements.email.value;

//   const reviewData = {
//     product_id: 64621,
//     rating: rating,
//     summary: summary,
//     body: body,
//     recommend: recommend,
//     name: name,
//     email: email,
//     photos: [''],
//     characteristics: reviewCharRating
//   };

//   return reviewData;
// };

export {validateFields};
