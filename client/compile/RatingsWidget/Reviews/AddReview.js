import React, {useState} from 'react';
import ReviewCharacteristics from './AddReview/ReviewCharacteristics.js';
import axios from 'axios';
import {validateFields, formatReviewData} from '../helpers.js';
import createStarComponent from '../StarRatings.js';
import PropTypes from 'prop-types';

function AddReview (props) {

  // Creates a form input for users to rate any characteristic designated as applicable for the product (ex: quality, size, comfort)
  let characteristics;
  if (props.reviewsCharacteristics) {
    characteristics =
    Object.keys(props.reviewsCharacteristics).map((characteristic) => {
      return <ReviewCharacteristics key={props.reviewsCharacteristics[characteristic].id} characteristic={characteristic}/>;
    });
  }


  // Updates rating input value based on what the user has clicked
  const [starRating, updateStarRating] = useState(0);


  // Updates message under body input field with character count
  const [bodyCharacterCount, updateBodyCharacterCount] = useState(0);

  let bodyCharacterCountMessage;
  bodyCharacterCount < 50 ?
    bodyCharacterCountMessage = <p>Minimum required characters left: {50 - bodyCharacterCount}</p> :
    bodyCharacterCountMessage = <p>Minimum reached</p>;

  const [filePreview, updateFilePreviewed] = useState('');

  const showFileThumbnail = (event) => {
    const reader = new FileReader();
    const files = event.target.files;
    if (files.length > 5) {
      alert('You can only upload up to 5 photos!');
    }
    reader.onload = () => {
      updateFilePreviewed(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  let submissionMessage;

  const submitReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const applicableCharacteristics = props.reviewsCharacteristics;
    submissionMessage = validateFields(form.elements, applicableCharacteristics, starRating);
    if (submissionMessage === 'Your review has been submitted.') {
      const reviewData = formatReviewData(form.elements, applicableCharacteristics, starRating, props.product_id);
      axios.post('/reviews', reviewData)
        .then(() => {
          form.reset();
          updateStarRating(0);
          // alerts the user when review responses are successfully submitted to server
          alert(submissionMessage);
        }).catch(() => {
          alert('An error occured when submitting your review. Try again later.');
        });
    } else {
      // alerts the user when invalid responses are submitted
      alert(submissionMessage);
    }
  };

  const StarRatingInput = createStarComponent(starRating, updateStarRating);

  return (
    <div className="add-review modal-window">
      <form className="modal-content" onSubmit={submitReview}>
        <div className="form-content">
          <h2>Write Your Review</h2>
          <h3>About the [Product Name]</h3>
          <button onClick={props.closeAddReviewWindow}>Close</button>
          <div>
            <label htmlFor="rating">Overall Rating: </label>
            <StarRatingInput name="rating" updateStarRating={updateStarRating} starRating={starRating}/>
          </div>

          <div>
            <label htmlFor="recommend">Do you recommend this product? </label>
            <label>Yes </label>
            <input name="recommend" type="radio" value={true}/>
            <label>No </label>
            <input name="recommend" type="radio" value={false}/>
          </div>

          <div>
            <label htmlFor="characteristics">Characteristics: </label>
            {characteristics}
          </div>

          <div>
            <label htmlFor="summary">Review Summary: </label>
            <input name="summary" type="text" placeholder="Example: Best purchase ever!" maxLength="60"/>
          </div>

          <div>
            <label htmlFor="body">Review Body: </label>
            <input
              name="body"
              type="text"
              maxLength="1000"
              placeholder="Why did you like the product or not?"
              onChange={(event)=> {
                updateBodyCharacterCount(event.target.value.length);
              }}/>
            {bodyCharacterCountMessage}
          </div>

          <div>
            <label htmlFor="photos">Upload photos: </label>
            <input name="photos" type="file" onChange={showFileThumbnail} multiple/>
            <img src={filePreview} ></img>
          </div>

          <div>
            <label htmlFor="nickname">Nickname: </label>
            <input name="nickname" type="text" maxLength="60"/>
            <p>For privacy reasons, do not use your full name or email address</p>
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input name="email" type="text" maxLength="60"/>
            <p>For authentication reasons, you will not be emailed</p>
          </div>
          <input type="submit"/>
        </div>
      </form>
    </div>
  );
}

AddReview.propTypes = {
  reviewsCharacteristics: PropTypes.any,
  closeAddReviewWindow: PropTypes.func,
  getReviews: PropTypes.any,
  product_id: PropTypes.any
};

export default AddReview;