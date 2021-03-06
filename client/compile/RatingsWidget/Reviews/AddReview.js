import React, {useState} from 'react';
import ReviewCharacteristics from './AddReview/ReviewCharacteristics.js';
import axios from 'axios';
import {validateFields} from '../helpers.js';
import createStarComponent from '../StarRatings.js';
import PropTypes from 'prop-types';

function AddReview (props) {

  // Creates a form input for users to rate any characteristic designated as applicable for the product (ex: quality, size, comfort)
  let characteristics;
  if (props.reviewsCharacteristics) {
    characteristics =
    Object.keys(props.reviewsCharacteristics).map((characteristic) => {
      return <ReviewCharacteristics key={props.reviewsCharacteristics[characteristic].id} id={props.reviewsCharacteristics[characteristic].id} characteristic={characteristic}/>;
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

    let formContent = document.getElementById('add-review');
    const formData = new FormData (formContent);
    const files = event.target.photos.files;
    const applicableCharacteristics = props.reviewsCharacteristics;

    submissionMessage = validateFields(formData, applicableCharacteristics, starRating, files);
    if (submissionMessage === 'Your review has been submitted.') {
      // re-formatting review characteristic data for the API
      for (const key in applicableCharacteristics) {
        const characteristicData = applicableCharacteristics[key];
        if (formData.has(characteristicData.id)) {
          formData.delete(characteristicData.id);
          formData.append(`characteristics['${characteristicData.id}']`, characteristicData.value);
        }
      }
      formData.append('product_id', props.product_id);
      formData.append('rating', starRating);

      const photos = [];
      for (var i = 0; i < files.length; i++) {
        photos.push(files[i]);
      }
      formData.append('photos', photos);

      axios.post('/reviews', formData
      ).then(() => {
        event.target.reset();
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
      <form id="add-review" className="modal-content" onSubmit={submitReview} encType='multipart/form-data'>
        <div className="form-content">
          <h2>Write Your Review</h2>
          <h3>About the {props.product_name}</h3>
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
            <label  htmlFor="summary">Review Summary: </label>
            <input className="review-summary" name="summary" type="text" placeholder="Example: Best purchase ever!" maxLength="60"/>
          </div>

          <div>
            <label htmlFor="body">Review Body: </label>
            <input
              name="body"
              className="review-body"
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
            <img id="add-review-thumbnail"src={filePreview} ></img>
          </div>

          <div>
            <label htmlFor="name">Nickname: </label>
            <input name="name" type="text" maxLength="60"/>
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
  product_id: PropTypes.any,
  product_name: PropTypes.any
};

export default AddReview;